'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b0a52ce88b5f28c4c4e29b2cd7d18d81",
".git/config": "510a9ea500cac476727a704147fb6e6b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "fdc10b01cfbedcfd9f6a93ecb9726166",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "959ec7991330497506b0ed7c1a84c757",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "308a8de1b8d9e1a12acf03c18ac092e7",
".git/logs/refs/heads/main": "95842702e316f4b38c21072642adc8a3",
".git/logs/refs/heads/master": "8b62fa5ab9bab803b3728970406c07ed",
".git/logs/refs/remotes/origin/main": "8fb4b06487e39434e15aa723da59c2dd",
".git/logs/refs/remotes/origin/master": "01fd765f6e626805155d325f7f052d49",
".git/objects/09/035f60a69fa3a186f4d8c736c3992577766b95": "62ea3585d2ca1e0c891cf1cf989b4e69",
".git/objects/0a/1ef3f7ec16d6686bea362f2e41247b813e6d40": "d579c8b98579b2b634b77735eb9e7f2e",
".git/objects/0a/e8e32980919739f15c5de6cd9c25b87b57f3a6": "65c6604c03b50a90cdadb975310acf6c",
".git/objects/0d/575fd51acf072fe17265acded1ac2a48895995": "5f3bc55fef996f19b25ec6654f6e4256",
".git/objects/0f/8b9e29b567dc6e22f36abc3439f3b5bb78094c": "e69288559144ce576d9d96d78d7a1a1f",
".git/objects/11/4f7f8843f1456cdd6ada4cc4e2afbbb3e23f65": "ca05971f4b02a0c232c8a7e83c90537e",
".git/objects/11/63be4e8597526630f04903df4c1379360a900f": "e0e54eef1774bff955d0aac35ba1d3ff",
".git/objects/17/bb6747a599c59238e88924d3f50b2911adeeea": "e3343ccbaee736c6e0409ebdf1437fba",
".git/objects/1a/99f3ef3c52b7997624ee089c8b04aac9a70ba9": "adb3dab2684d3be561f36a1af667bd49",
".git/objects/1e/110bcf0502ac7b86ffa00b672ff49577f236b1": "cf251be348f636a996227952fb8b87ec",
".git/objects/1e/8ea984c7623507c908ada617093dd6c7c3aae8": "13683877896d3e20e19411d3c35cdf9c",
".git/objects/1e/c72d419687e620e39df11f5ccdcddde1834876": "1b7824dc75348ad0c7fa3cf2b07535e0",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/b1c2a97492ca455c2857ba46fed34c167946d6": "8d0a664c09543ffa102301dd27e6b1cb",
".git/objects/25/472f49383cf0939c50b60c2e3f16197d0fcc60": "82b486611ed154f5fb3a5e3634aad336",
".git/objects/27/d58ebde1977916e5b70d356b36c73997490efc": "219b108ade4290835836da3f975310e1",
".git/objects/28/51e76b3e9b91e372a62fb0164d2428a5b898e6": "e2282ce11ee13e82a8a050412ce0d0cf",
".git/objects/28/75252ef2f739b8d39aa5077fc05b74e8edbea9": "c7999c94bb72bdb6dde3979426b40da7",
".git/objects/2e/874012a93b3af26c0374e1c6ef19a3f3f55344": "42827a494c5485bdc7f7d619aefd2e95",
".git/objects/31/e0e015172c49964e5c259df01a7e8fc90d5182": "3e1a52143cecbea9c4330d008c7cef0f",
".git/objects/31/f8fb654f408e755aa2975602abebc21ecf13a3": "89721519bb76943431715bb1b255540f",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/26a89774dc01333122b3488157f156144a60ce": "53c9b64898a8a9cca494ea3e989425b2",
".git/objects/35/cc7b3b7aca3106b44e3cf7d5784d6d329277d6": "2fd8b7f6fa122a3a66205a57124fd2c0",
".git/objects/38/00dcc82aeb91427bff64856f5ea0a7e9bc016a": "bd62d70a7045f6e408b17e36108048ba",
".git/objects/38/a05bf8e5716d55587af5143b6223f7c01573f9": "8ace6f5a307d1e71a90697df8a64335b",
".git/objects/3b/1c7b19bb161136bb13031bcb17c01ac21a4dc9": "fffa8a41a6548019a58e8f3bcf56dc0e",
".git/objects/3f/6f97b7ad8ffad12778689714151d8af06d3d6d": "2506e35782ab221a9a5c0b2459de015f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/237533e017eaf1645462e01c06de249744f536": "198c025c6fb608667b9d2037b30da22a",
".git/objects/4c/91678b37d096f88a13dd710f2ff9d20a289c6b": "1bd44e475baf580f66ec83405d445d0a",
".git/objects/4c/f2a4fee4bdc1938f9e6b35a747c93a86e00fef": "5025255d2882a53dd0adcc60e75ea40e",
".git/objects/4d/aac900c9629796f3f9681479d524af1d9eecd1": "bd358564b181c8ede6a4dee43967ab4e",
".git/objects/56/939e67183436ddb2716b21172dd42b624c7891": "d9345c45930136260f30e0db74abf4bb",
".git/objects/5f/c758719dc7012edf5aa19b3f9b2acb27d2745e": "d0b10bb61d4906448a55eb6605e69a32",
".git/objects/65/9b7d480d8c6ae9d906743bb296f78d1ad29b9b": "d71ca621039303ca38d3728b4cddd05a",
".git/objects/66/049e8ab0a5b2fe03e47a6981eaefd3862ad3b7": "8257fa853e27a4faf7c6e22ad9c4b682",
".git/objects/77/56136d0c0b1e652c6dadf9fe36ae8930f32a6f": "4ef9ee0f18a4fe827552bc1699568197",
".git/objects/78/0a7b51d955d25eb1c6432813f5ca0df735c644": "91835f26bf3542d09d5bdec8230f0c6b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/f27b23c29d091c0780c2c74e45b4d4eef8dafd": "fe9c9a878a816464f044549a139c39ff",
".git/objects/84/cebe3de8c5e29448d8d845b39f87ff2bc4f121": "59febcee15a11163c0e68592ec2dd197",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/642f9784e2af709790926b9d72794247a5a946": "e9ac5a970f676f0d0f79bff428895696",
".git/objects/92/7c99261266980c7a98c20af7df8fda7775c697": "817d15cb0ca292cf9bac45883f26cfbb",
".git/objects/93/935eea23896fc04e29c5e28f54295c8ffa7096": "61f60a10f24892dc6d48dae9ea7e8285",
".git/objects/a0/438b15b8529ac999387e69c23fb9292a83b122": "2946f5bed8d5bb9293c15f3a7019d59d",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/49ff131a5bcf9a17232fb3cc06e546dca56a67": "be8df646a407d25984541a93e26126ea",
".git/objects/a3/13b8c239d0f853cb457013efc14291cddc68a5": "1b610ad17b18b1288d5d682eebae8c8d",
".git/objects/a3/b05eb6b3210968acf1284b219480f68a5e6ad3": "d2adc36aa375321b44c899cd723dcfb9",
".git/objects/a4/a2b08cbfff6cea7fbea280e73c5ce196e0fb41": "b3b4b4705ebb6f5af3e225c055723020",
".git/objects/a5/4111cb83d802dc84433644bae22ebb3b8e58ba": "500fd524d8b77b877a58e19137a7aa7a",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/90bf322f92f19b87613bb10955cebe0d6d667c": "2f98ecb2fec8417413c4c251c46a81bb",
".git/objects/b2/a8c18bb9d7a5d854e57f88d92e2fb547cd4cc7": "1d3df4743fe111c1ea93f04db99a09b5",
".git/objects/b7/1351d7e4d9f7617b72cc789c39e59a15b5f2e1": "172da5998016ec8d457dbe0ef78059bd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/9eb0c2ee3cd27935c93ceaad250f9dc239cdc7": "9e9743d79ab851b07468e278475b2ae2",
".git/objects/bb/a7c9e8fc804830aebb2b0965361d28d1b19627": "db957455322ecde3f0a91d95dc34c81a",
".git/objects/bc/d834354efef1210da1a48625a426d48273e156": "137750c23e986feafb61dc6d29f7faa2",
".git/objects/be/6334d222d91e7c5ad82f93624731c3c37fcfb8": "4d1696565f6b66b5d1db948d1a78f833",
".git/objects/be/9f044cff35de0fd6a04ee895c0125d9b37be9f": "9e3638751950146990c8bda43e6a7c18",
".git/objects/c8/70c86072755d9cfed460420b0c89f09b961e76": "c6398aa37f98766e70234abf0a188584",
".git/objects/cd/a0a84cfb15713ff11a77882a5af6cd68f6af42": "5b3381fa02a2d5355b1d75eaf6c3fb6e",
".git/objects/cd/d33c3bc609a91ff492fa352d835bc65de6eb9c": "a829cf80eafae2eae5b99bf346eac288",
".git/objects/cf/5213b9e7513ad3796096640cc78df760137425": "d3408ca8e2d24809ea69ecb9c9d3257d",
".git/objects/d2/cc207e0e18841ad2c7828f5a6170903c669c42": "821c4232eb0b2d2dbdce27e7b6c31778",
".git/objects/d8/799815345d8a668463e5fa2608fa9c72f2e174": "7080402ba2171947655a8153fca16803",
".git/objects/dd/f534e041f581f9ad45e90d2d2b3a43c77c3d57": "50fc350a7d27fcbad956fc223e5e4c86",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/ee/13f848ecc459afad72db6feaaef367cabdc63f": "3c59f1bf2d0ed19fd5536f634c658ae1",
".git/objects/ee/a9aa228137c5d178a22f785828ff4a867ea92e": "c039e616123e8bb6f2c67f004e2b5331",
".git/objects/ef/75106be9bdae7dac1277dd2ba56bbd7dd41ca3": "1534e55870cfb678dbd40c69f7e77ac5",
".git/objects/f3/debcaa41276fc4cb0c8531d2767d3c68ae09e2": "566d03f27d521699c7b7f563632ca2c2",
".git/objects/f7/0900e07d88bce85cc2824d246eea7983573536": "be014cdde4451cc573f449ff6fde0848",
".git/objects/f7/936cc1e789eea5438d576d6b12de20191da09d": "2f9ca3519159b7422b4b9d04ba5343a6",
".git/objects/f9/9085132dc78365412a4f395cd886fb1a3b69eb": "a36933a969a9849c8e9c45fe26f8bbb7",
".git/objects/f9/c5750487308ec6592e05b6cd1ce798b9eb6cde": "0d95c4ee3249abcc39f127135a33bcf6",
".git/objects/fa/4db6fd5f28448303a93773923869e5fd6e03b0": "79d890e9a007edd1fb9db17953b5d85c",
".git/objects/fd/80e2bac1a16e8e47fd9c237c303cf381ff4c75": "bf88fc70233b553522a64b7353171447",
".git/objects/ff/120465b5f988ae6d4c537278bb5c459e2490a0": "2fdaedb664f3180ce206acc51a6337b4",
".git/ORIG_HEAD": "b39ba820c5497b2d2671360f76bd53f3",
".git/refs/heads/main": "b39ba820c5497b2d2671360f76bd53f3",
".git/refs/heads/master": "819886c22c9ca02528c809d414d8af98",
".git/refs/remotes/origin/main": "b39ba820c5497b2d2671360f76bd53f3",
".git/refs/remotes/origin/master": "46bb8b8868e69e4af264d687fdec8a44",
"assets/AssetManifest.json": "d33a2d93b4140ccd3eaa1b4b1f56a364",
"assets/assets/bahamas.jpg": "cb9dd0fe9a57d80415345d1d95d29c0e",
"assets/assets/bora%2520bora.jpg": "4be3791f02bc9f88283e1e96665523fe",
"assets/assets/img.jpg": "6c9cb24ac35539db517944609484429b",
"assets/assets/maldives.jpg": "ddc5918d1906d047d68d6ea6de0bbe4f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "32935d0270d07d764880713113492947",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "a67e0d9652172500b2692a4c44e6cff4",
"/": "a67e0d9652172500b2692a4c44e6cff4",
"main.dart.js": "ffa27a001d9fdb275f65850e4487e2e7",
"manifest.json": "4706fb14f3e705f9bfd924e4f997004d",
"README.md": "a78c27beab378e1d57eee1c884b7f5f0",
"version.json": "a9f70df9d271109809a07bb9e3065f52"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
