'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "10e836c1d74b3566b58ea080e46c865a",
"index.html": "a090c44f11bd4dbc91af2c68f1714190",
"/": "a090c44f11bd4dbc91af2c68f1714190",
"main.dart.js": "68f0d6476235d285538326f7f2c2baf3",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "af989e183a3c0d32a4111c1fe2a137d3",
"assets/AssetManifest.json": "b61454c07a43d27339128a475859367c",
"assets/NOTICES": "c54b89132d57bd0a933a70a97f20ccfe",
"assets/pubspec.yaml": "8ded709d09b9433c33a8d7a8992e1568",
"assets/FontManifest.json": "ee8178528a392b2a2757adcb9648312d",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/quill_html_editor/assets/delete_row.png": "3a56332918794e49ffca20016948553d",
"assets/packages/quill_html_editor/assets/insert_column_left.png": "114e6cca4b2f60a5eaebe4e574f2c36d",
"assets/packages/quill_html_editor/assets/insert_table.png": "c8f041a07bc6b8e4010ccf93ba4c291d",
"assets/packages/quill_html_editor/assets/h1_dark.png": "aa135c261ba758a3990d4594d982104d",
"assets/packages/quill_html_editor/assets/insert_row_above.png": "80ae3856d5f7415d9957d9a1699ec782",
"assets/packages/quill_html_editor/assets/insert_column_right.png": "fb27c4e3cc557089f79dd1f0cc937d62",
"assets/packages/quill_html_editor/assets/insert_row_below.png": "cea46607b37038f71c0fec22341b80e4",
"assets/packages/quill_html_editor/assets/camera_roll_icon.png": "962f1d57cab7451d4b92b236b1993bd5",
"assets/packages/quill_html_editor/assets/delete_column.png": "62358bf5aa9ac7f18e2411e4a0c63f14",
"assets/packages/quill_html_editor/assets/delete_table.png": "37e148071ce0a306a27f296369e52f40",
"assets/packages/quill_html_editor/assets/edit_table.png": "6a51397f56e90d98ae0b46a2e359676f",
"assets/packages/quill_html_editor/assets/h2_dark.png": "037de75dfed94244b78e7493c6425586",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/neumorphic_ui/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/linkedin_login/assets/linked_in_logo.png": "86b61ef3acce4c1f108238e2ea4f5d1c",
"assets/packages/flutter_arc_text/assets/README.md": "fbaed1ae60d80596d99545ef45d72803",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "418f0bcc58dafbc0984d8577e4276f93",
"assets/fonts/MaterialIcons-Regular.otf": "b1a3ab764963348e1a0bd3d6f05da016",
"assets/assets/closeBg.png": "aec09eea2c46ad7eb954db51f613b83f",
"assets/assets/soundcodeWorker.js": "c35ae7fa1b95bae36dd291c1118ce8e9",
"assets/assets/profilePlaceholder.png": "1b9debb666fb283e3ff7d29483e3f87a",
"assets/assets/zoom.png": "afb0a34decf7f5bbb1c8fbba4fa30331",
"assets/assets/row_icon_Images/Email.png": "94c53d46e6b66e58dbe9c1b840c46b0a",
"assets/assets/row_icon_Images/Instagram.png": "71ead9d18e3689fc923df63a33381e2c",
"assets/assets/row_icon_Images/WordPress.png": "abc7dcbe94d324e828951250722915bd",
"assets/assets/row_icon_Images/Twitter.png": "1c165c410af9b32dd858f263a5b37a07",
"assets/assets/row_icon_Images/LinkedIn.png": "f23834c9af29caa11fae06b5f9704821",
"assets/assets/row_icon_Images/YouTube.png": "115eb1abd83fc3a236eaed55d0c231fa",
"assets/assets/row_icon_Images/WhatsApp.png": "7c3573f9dfcc342edbb1b770719e5ee0",
"assets/assets/row_icon_Images/Facebook.png": "30a26e708d260184df7addcd34be245e",
"assets/assets/appLogo.png": "7f3b5db8df61ae77a58955d0be835801",
"assets/assets/chat_background.png": "10ef004facf7f7fc38c7e0a26c497fa3",
"assets/assets/images/spotify.png": "cac4679b7a8d0b550188b630d20040e0",
"assets/assets/images/russia.png": "e9d3076b9239a6bd5ff7086466e66563",
"assets/assets/images/mc.png": "7d7961cddd2d670f2aff2c33931a1b50",
"assets/assets/images/arrowright.png": "25d83ebb8f29f4da52ae63736c4199e7",
"assets/assets/images/ci.png": "43c680388c8b1312c84827b20d98509a",
"assets/assets/images/qrCode.png": "d2fc21a40fb6a4a1934269d7ad34e7f1",
"assets/assets/images/minfopause.png": "9a96fac269ffb5d357fcbdf4c5a009ab",
"assets/assets/images/multi_connect.png": "78efc8e42ac04ae6346e3673f9db5d5b",
"assets/assets/images/usa.png": "e499f1fbaeb06cf2b9f6ddfd4de672b5",
"assets/assets/images/recent.png": "538ffa42167bd8050da5f88d193844cc",
"assets/assets/images/microphone.png": "f0d0060eaba3a2e814d2c025f49b74e6",
"assets/assets/images/minnfoZone.png": "92adc6b1b59ac40306eb5bef785d9de4",
"assets/assets/images/smartphone.png": "3d2058a93471e8a35892b6750c151c12",
"assets/assets/images/music.png": "f30a32095a59ba39c2f37c68bef949ee",
"assets/assets/images/person.png": "3e5cbf22b7fc80a10f366c0db5b29937",
"assets/assets/images/search_icon.png": "895f76ceb74dfb846f3db14ba101e89c",
"assets/assets/images/user.png": "65749ebf300dc1795b4276dd1c3284f3",
"assets/assets/images/japanflag.png": "d09cd9986d8df016a06ecc90e98552ee",
"assets/assets/images/userimag.png": "65d85d368fe8b81e9a80b4efdd18fdf3",
"assets/assets/images/malaysia.png": "39a5b9bac94296c49a78e052df1428c7",
"assets/assets/images/person2.png": "03787f3d48ff4e8bc1431d49ea133d6c",
"assets/assets/images/apple.png": "0823c5df54c9abc282f81e8dd05f8abd",
"assets/assets/images/other.png": "0fa39336a600de77fa32a0b00771017e",
"assets/assets/images/minfosingleconnect.png": "ca39131b68bbe8d1e281132202612766",
"assets/assets/images/shazam.png": "012f02d99d6c0f874aebfd84d4cb4fb5",
"assets/assets/images/minfomulti.png": "ceac67c5efee81d145781ba7e744d21b",
"assets/assets/images/arrowleft.png": "5ad7d04200a627ea68dc506b06d3b2f4",
"assets/assets/images/serbia.png": "127723825a935b02f738d535332271e2",
"assets/assets/images/korean.png": "2ca68d64e952761042191ea7ca520025",
"assets/assets/images/france.png": "78e9f99bc3c993c9c83615d0f3d028c4",
"assets/assets/images/qr.png": "ab9b085c529ca24fd75560e94c8b16c2",
"assets/assets/images/italy.png": "38ae223d1fb5d700fc1878da32717f8c",
"assets/assets/images/ax.png": "c7a1681dc5d25189597cb32a65324381",
"assets/assets/images/music_connect.png": "78efc8e42ac04ae6346e3673f9db5d5b",
"assets/assets/images/youtube.png": "589c47611d3079f2d02a054122644cd7",
"assets/assets/images/star.png": "f2b55611e4d5a8f892d80f2c9afeff9f",
"assets/assets/images/vs.png": "62c405c57f9b91256b8e74ac19a834ce",
"assets/assets/images/amazon.png": "801bfe57ca8d6f1265dae9ac873e0f72",
"assets/assets/images/single_connect.png": "525848763f7eb18cc8aa1dbdb7d9797b",
"assets/assets/images/ci%2520copy.png": "43c680388c8b1312c84827b20d98509a",
"assets/assets/images/croatia.png": "944d5c6b7b53bb7e2a53d80645c5f26d",
"assets/assets/images/backspacewhite.png": "b35c9727bd2fefaa120328d3603c45fc",
"assets/assets/images/qr_capture.png": "a9021fb0e645eb79d08e3ec1a16da6c6",
"assets/assets/images/vietnam.png": "ddd2fc3c1765bde1418176d0f111a8f3",
"assets/assets/images/shazam_connect.png": "032aff2c86ab18fcc02d4503e64b9207",
"assets/assets/images/filter64x.png": "1095869321e338eb21849e2958398337",
"assets/assets/images/english.png": "21a47e726a014b81b1e1fa5a8f25ac67",
"assets/assets/images/ns.png": "5ae5122acdab2552451100b2ac3d021b",
"assets/assets/map.PNG": "983b2f48bd57aafb503d1216860f8d41",
"assets/assets/AuthKey_42844323MK.p8": "821fedff1fdd3bfe8622fe44dae83668",
"assets/assets/soundcodeListener.html": "e90ed20971f1bd1ea876a6fc6edb7112",
"assets/assets/soundcodeNative.js": "1aae4731b6efc0f095e22d09cc119761",
"assets/assets/game/hotelroom.jpg": "b5d8fb6419d6dd0ebbdfb5ea5e474c99",
"assets/assets/notificationIcon.png": "03ab6be1f601cec103030ca4f8edc2fb",
"assets/assets/Telerik_RadImageEditor_Image(5).jpg": "dddf981bf8580febac681a516e08a13f",
"assets/assets/ProfileImage/Layer1.png": "7ad1b568e623e44cdf43ee4856e71a13",
"assets/assets/ProfileImage/Layer2.png": "90ec9301b02217729f309c0393f6a1af",
"assets/assets/ProfileImage/Layer%252013.png": "b328a779712b5d0a22e7e3a6cbfac04e",
"assets/assets/ProfileImage/change%2520profile%2520pic%2520copy%25205.png": "fc48fed2108929c591af69cc61989777",
"assets/assets/ProfileImage/Change%2520picture.png": "5c596620231740d68a3ff641ea7422c0",
"assets/assets/webscanner.html": "ee10af015cb42c58435a8d7440ce99e4",
"assets/assets/MediaShared/Layer%2520867.png": "2ea11ebc987fd1f482100b224845c6d7",
"assets/assets/img/loading.gif": "3f899a790ab677acd5762723b7743334",
"assets/assets/img/logo.png": "de6861ed7caf7b21d9b9c4c391b7517c",
"assets/assets/img/france.png": "78e9f99bc3c993c9c83615d0f3d028c4",
"assets/assets/img/italy.png": "cc79b1867397b8aec17dccce31e6fbef",
"assets/assets/img/cash.png": "9349ca548e2ae942cdaf08e023706d7a",
"assets/assets/img/Netflix170.png": "6141b319f88b7062cfbd03986bf00dfb",
"assets/assets/qrimages/minfozoneb.png": "be11805f6974fa41b8e0a11ee67d86a4",
"assets/assets/qrimages/logo.png": "05d0e97610997b194d5ffa2a0258f362",
"assets/assets/qrimages/share.png": "2b3c6def7fc047c35dc425ce119056b5",
"assets/assets/qrimages/minfozones.png": "8e4be3004cd8687da72d48cddd8f6628",
"assets/assets/qrimages/openlink.png": "a2e0aa80cf98dc52993a28e0fc69fce4",
"assets/assets/GroupImages/Layer%25201200.png": "22ba8762b518edb0b6e1a50b354c9cad",
"assets/assets/GroupImages/change%2520pic.png": "3e2a77dcbc0e9a835ea00e590ebc3e08",
"assets/assets/logo.png": "05d0e97610997b194d5ffa2a0258f362",
"assets/assets/logoweb.png": "88e5976f426d85597542912293c090e8",
"assets/assets/notconnecting/giftcard-2.png": "37444a221c01f9e17730329b8bf8277c",
"assets/assets/notconnecting/giftcard.png": "2150e56cfb9f8bc534ad746ce9f0b31b",
"assets/assets/nonternet.png": "a8ed5279dd3e0ecbbcec63d05ac5b3ba",
"assets/assets/campaigns/3961.png": "b1a76a046f4fe1fe2d6659be5cad26c0",
"assets/assets/campaigns/3961.jpg": "1bdfdcc97d6f92d3ecf243ed55c9499d",
"assets/assets/campaigns/3961.json": "22905e0aa8f65cfc8ec6e8dde64f964a",
"assets/assets/campaigns/3965.png": "41a09d86788fe6319d603ea70f508984",
"assets/assets/campaigns/3969.json": "6560ee2517f4158745041f4038e8b1f1",
"assets/assets/campaigns/3965.json": "c3dbf7cf3c978e959933dd7ec0273e25",
"assets/assets/campaigns/3933.json": "dc39d1eb0e071b5a402cd9037df4afd5",
"assets/assets/campaigns/3933.png": "8abc82b51aef19dab9103cc65fd0bb25",
"assets/assets/campaigns/3969.png": "5ff70aa025bcbe0fd46e7f7097c805f2",
"assets/assets/campaigns/3979.json": "2dcc1b0f428e3537c1d8e82c13a826a1",
"assets/assets/campaigns/3979.png": "7c4bd50cff231d3ccc34d88b3a9b5ab5",
"assets/assets/chatheadIcon.png": "2e36fcddfb15f5d9a566e83798f011a1",
"assets/assets/fonts/DigitalNumbers-Regular.ttf": "df8665d3e226b24d8a296cb34a3692fd",
"assets/assets/assets/soundcodeWorker.js": "321f0ea61b309101ba308d44118e36d3",
"assets/assets/assets/profilePlaceholder.png": "1b9debb666fb283e3ff7d29483e3f87a",
"assets/assets/assets/appLogo.png": "7f3b5db8df61ae77a58955d0be835801",
"assets/assets/assets/chat_background.png": "10ef004facf7f7fc38c7e0a26c497fa3",
"assets/assets/assets/map.PNG": "983b2f48bd57aafb503d1216860f8d41",
"assets/assets/assets/soundcodeListener.html": "98da5f9eecb526f1042b379940e4e710",
"assets/assets/assets/soundcodeNative.js": "1aae4731b6efc0f095e22d09cc119761",
"assets/assets/assets/pixel-2790335_640.png": "1e240767c29f9821528ec65c23e172c1",
"assets/assets/assets/logo.png": "05d0e97610997b194d5ffa2a0258f362",
"assets/assets/assets/logoweb.png": "88e5976f426d85597542912293c090e8",
"assets/assets/assets/nonternet.png": "a8ed5279dd3e0ecbbcec63d05ac5b3ba",
"assets/assets/assets/soundcodeDetector.js": "7626afa3576d9520a4129458ad2d4618",
"assets/assets/teams.png": "149ff0322891b6e07f647a937298a7f8",
"assets/assets/soundcodeDetector.js": "672ac366bf1b3b6c3f887992b2b366b2",
"assets/assets/close.png": "5a5436a0c782d782b87109864f4b1d76",
"app.js": "b86a3a0019b119186b84a994e6635c94",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
