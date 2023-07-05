importScripts("/assets/assets/soundcodeNative.js");makeUUID=function(){uuid="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(c){var r=Math.random()*16|0,v=c=="x"?r:r&3|8;return v.toString(16)});return uuid};var userID=makeUUID();var scodesBuffer=[];var OFFSET_2016=1451606400;var UPLOAD_PERIOD=1;var localTimer=0;var localTimerReset=0;var lastId=0;var wasmReady=true;Module.ccall("init_soundcode");onmessage=function(ev){if(!wasmReady){console.log("wasm module not loaded yet");return}if(ev.data.type==="close"){Module.ccall("close_soundcode");close()}if(ev.data.type==="audio"){var ch=ev.data.channel;var samplerate=ev.data.samplerate;var audioBuffer=ev.data.audio;var curTime=ev.data.time;var isPlaying=ev.data.isPlaying;if(ev.data.reset){localTimer=0;Module.ccall("reset_soundcode","number",["number","number"],[1234,0])}if(!isPlaying)return;var st=Date.now();var length=audioBuffer.length;var bytesX=new Uint8Array(audioBuffer.buffer);var audioPtr=Module.ccall("get_soundcode","number",["number","array","number","number"],[ch,bytesX,length,samplerate]);var resultId=Module.getValue(audioPtr+0*8,"double");var resultTime=Module.getValue(audioPtr+1*8,"double");var format=Module.getValue(audioPtr+2*8,"double");if(resultId>=0){resultTime+=OFFSET_2016;var ent=new Uint8Array(188);var str="";for(var i=0;i<188;i++){ent[i]=Module.getValue(audioPtr+(i+3)*8,"double")}var base=btoa(String.fromCharCode.apply(null,ent));if(format==0){if(lastId!=resultId){lastId=resultId;localTimer=0}localTimer+=length/samplerate;resultTime=Math.floor(localTimer*1e3)}var data={};data.timestamp=Math.floor(Date.now()/1);data.code=Math.floor(resultId/Math.pow(2,1));data.scDuration=resultTime;postMessage(data);localTimerReset=0}else{localTimerReset+=length/samplerate;if(localTimerReset>2)localTimer=0}}};sendToServer=function(ev){if(scodesBuffer.length>0){var lastSc=scodesBuffer[scodesBuffer.length-1];postMessage(lastSc)}scodesBuffer=[]};