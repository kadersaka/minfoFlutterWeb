var soundCodeEx=soundCodeEx||{};soundCodeEx.channels=1;soundCodeEx.audio=null;soundCodeEx.worker=null;soundCodeEx.isPlaying=false;soundCodeEx.resetSc=false;soundCodeEx.callback=null;soundCodeEx.audioBuffer=new Float32Array(0);soundCodeEx.onWorkerMessage=function(oEvent){if(soundCodeEx.callback!=null){soundCodeEx.callback(oEvent.data)}};soundCodeEx.float32Concat=function(first,second){var firstLength=first.length;var result=new Float32Array(firstLength+second.length);result.set(first);result.set(second,firstLength);return result};soundCodeEx.isMobileOperatingSystem=function(){var userAgent=navigator.userAgent||navigator.vendor||window.opera;if(/windows phone/i.test(userAgent)){return true}if(/android/i.test(userAgent)){return true}if(/iPad|iPhone|iPod/.test(userAgent)&&!window.MSStream){return true}return false};soundCodeEx.start=function(callback){if(typeof callback==="undefined"){console.warn("callback not defined.")}else soundCodeEx.callback=callback;if(soundCodeEx.isMobileOperatingSystem()){console.warn("Mobile browser detected.")}soundCodeEx.worker=new Worker("/assets/soundcodeWorker.js");soundCodeEx.worker.onmessage=soundCodeEx.onWorkerMessage;soundCodeEx.audio=new soundCodeEx.Audio;soundCodeEx.audio.start()};soundCodeEx.stop=function(){var message={type:"close"};if(soundCodeEx.audio!=null){soundCodeEx.audio.stop()}if(soundCodeEx.worker!=null){soundCodeEx.worker.postMessage(message)}};soundCodeEx.Audio=function(){var audio_context;var recorder;var input;var user_media;Recorder=function(source){var bufferLen=16384;this.context=source.context;this.node=(this.context.createScriptProcessor||this.context.createJavaScriptNode).call(this.context,bufferLen,soundCodeEx.channels,soundCodeEx.channels);if(this.context.state==="suspended"){this.context.resume()}this.node.onaudioprocess=function(e){for(var ch=0;ch<soundCodeEx.channels;ch++){var samplerate=this.context.sampleRate;soundCodeEx.audioBuffer=soundCodeEx.float32Concat(soundCodeEx.audioBuffer,e.inputBuffer.getChannelData(ch));if(soundCodeEx.audioBuffer.length>=samplerate*1){var inputData=new Float32Array(soundCodeEx.audioBuffer);soundCodeEx.audioBuffer=new Float32Array(0);var message={type:"audio",channel:ch,audio:inputData,samplerate:this.context.sampleRate,time:Math.floor(0),isPlaying:true,reset:soundCodeEx.resetSc};soundCodeEx.worker.postMessage(message);soundCodeEx.resetSc=false}}};source.connect(this.node);this.node.connect(this.context.destination)};this.start=function(){try{window.AudioContext=window.AudioContext||window.webkitAudioContext;navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;window.URL=window.URL||window.webkitURL;audio_context=new AudioContext}catch(e){alert("Error: "+e)}navigator.getUserMedia({audio:{optional:[{echoCancellation:false}]}},startUserMedia,function(e){alert("No live audio input: "+e)})};this.stop=function(){user_media.getAudioTracks()[0].stop();recorder.node.onaudioprocess=null};function startUserMedia(stream){user_media=stream;input=audio_context.createMediaStreamSource(stream);recorder=new Recorder(input)}};