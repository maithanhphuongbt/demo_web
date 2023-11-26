'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "cc09473cfc48a9d5cf9aa7dd51b6e78e",
"index.html": "c74d3ae5aabdda58f055c377f35515f5",
"/": "c74d3ae5aabdda58f055c377f35515f5",
"main.dart.js": "22ae18baad734785f613756d068e87fe",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5c0acf68f509fa55d109ba40bc5b7c52",
"assets/images/img_book_trial_class.png": "ddd977421c1772e818769d29e2a660a2",
"assets/images/img_verify_otp.png": "6b285f6732eaa598d230567396d9a0d3",
"assets/images/bg_sparkling.svg": "b6dfa8029f04655d16f67f8565611282",
"assets/images/img_transparent.png": "cd10482f41f0ed1adde4f7048e150032",
"assets/images/img_clap.png": "1bd84d4140b859f5d33995109480df77",
"assets/images/test.png": "62e36c340df4076a443ca9093f3d0568",
"assets/images/img_star.png": "a829e8664f52b22a32afe15f75ce2206",
"assets/images/bg_success.png": "f82f355218a36998e9b5b44e6dbca7b6",
"assets/images/img_lightning_start.png": "c135303b9ef959599896d585c71f6b14",
"assets/images/ic_schola.png": "bc679d2b667bca76f00ef70f07061bf1",
"assets/AssetManifest.json": "0634990b179ccd1ecc25bcdfa1e91d00",
"assets/NOTICES": "3fb287a5739dd37c58d27e9efd90dc85",
"assets/FontManifest.json": "e011fea25d4dd2be185af49050224399",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "9582736a5b6440a663a0c3c8438c9022",
"assets/fonts/Lato-Bold.ttf": "2d15decc87393ec398f00dc3d7a2163d",
"assets/fonts/Anton-Regular.ttf": "13770dde4178c487efc63d33866fe613",
"assets/fonts/Lato-Regular.ttf": "c5eb54404c9dbda925f7142d6343c913",
"assets/fonts/SFProDisplay-Medium.ttf": "70830fa4b0f259734f7e52903f3efd59",
"assets/fonts/SFProDisplay-Regular.ttf": "d09549c1ab4a5947a007561521e45da3",
"assets/fonts/SFProDisplay-Bold.ttf": "42d79eba974955740a95cc0fb71ca247",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/feeling-positive.ogg": "446c820e033ea8255676f2ce871a62b2",
"assets/assets/rectangle_selected.png": "7f4fe56fce942d3644e63cc71918fe58",
"assets/assets/buttonClick.mp3": "7d8f12afdb39016f3905bc276b7955fe",
"assets/assets/menu_click.mp3": "73ecaaf0455d5aaa9dd61f212d3d8c23",
"assets/assets/correct_answer.mp3": "94c4d3129ff77b8f691f64562461480b",
"assets/assets/success.mp3": "0290aea0dcedb75c8071afa47595f148",
"assets/assets/img_error.png": "c4c62400c3630c5098ba7a4c61f912ac",
"assets/assets/diamond_selected.png": "28e11a6983ddd70dd6110ede26ba0df7",
"assets/assets/feeling-positive.mp3": "c241b962f4e072a7fbde2cfb1900b5f6",
"assets/assets/drag_sound.mp3": "6e7c84cfb3f14a7a9d94f8ac010bcef1",
"assets/assets/triangle_unselected.png": "d76f3365f3090cc12fbb1efc84ef2077",
"assets/assets/wellcome.mp3": "c72ed7673fed03a50c2c4cb35a866208",
"assets/assets/circle_selected.png": "a10745f5e6197f5c2d6dd68483021c2c",
"assets/assets/demo.mp3": "57b3db3a0f2c8e383a001ec327b6c3b4",
"assets/assets/rectangle_unselected.png": "9379cc98165710fce587b1e8f8819173",
"assets/assets/wrong_answer.mp3": "7d8f12afdb39016f3905bc276b7955fe",
"assets/assets/triangle_btn.png": "518234a8b2d3b7a59926ba68fd397b13",
"assets/assets/feeling-positive.opus": "afa484f5519a05d6a6fd7422b0377a57",
"assets/assets/diamond_btn.png": "49af635c135e9bb70e37e38a74d3a763",
"assets/assets/rectangle_btn.png": "2e10670c555891ccd5528eeeffa8031f",
"assets/assets/diamond_unselected.png": "edf1eb627e8f579a26414c1d4cc74078",
"assets/assets/triangle_selected.png": "c9a54a4fcd90a89a1639446ed597714c",
"assets/assets/circle_btn.png": "5d2fb0215b210a68c5941395fb10af8c",
"assets/assets/login_click.mp3": "273414d296102b172ac4eabaf74c189e",
"assets/assets/circle_unselected.png": "9216d0c51bfb46009e9934d7f49c7725",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
