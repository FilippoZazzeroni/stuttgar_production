'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "8d915a162b9a292f443056f06b7f44f4",
"index.html": "5d605d7e7167ea96c8700d819e9e19cd",
"/": "5d605d7e7167ea96c8700d819e9e19cd",
"main.dart.js": "d79b46edc1574f7a65e340bf5167abf0",
"favicon.png": "0457833ea9524eb5dc2ddb61354d7966",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/logo.png": "0457833ea9524eb5dc2ddb61354d7966",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9c5a60850b9c0dca663f1d2edacf380c",
".git/config": "617ad68576e8f96b8fb4bc7c748bc890",
".git/objects/61/feb07c8bb004db48f68e95b54e0f7144f82314": "a7ee67eb9f56e11ea28dbfc32c157116",
".git/objects/0d/36e0d0fd093ab1329857e3591763ba76a989f1": "f5ce1c211c3fb7bbde80d949836f9775",
".git/objects/57/5d8a6c3df6377ab410dc05bd0f170c8769aa99": "927bd1a57bbedb376d1f5964bceecf92",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9e/af8ba1f6768867ea2a318f8157945b6c24f24d": "bf7d3b31eb393825e8b46d23e0c6b004",
".git/objects/6a/538b0915a4c7b4a73d0486c34b5ac95cf7e4eb": "e109545210df27de803db4cbf3ef0945",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/914f8fae12936ca327cd30c3a7c9f8e0e3500f": "5434795c030b30f42b2013e3b4fbf00a",
".git/objects/58/4b76d0077a6f91df2fd5edb1980cbb350acdc2": "6947a297b37f20ce2c3c5ef081acc339",
".git/objects/94/2ec21cc5c1067232723e7c8107ee97958eb643": "1edb0e81e564b53dfb2865f1c9849f71",
".git/objects/0e/2ecd93521bdbbbf369ec2a335ae4df277fcdc4": "a3870f3256151a0c844592e20c9481f1",
".git/objects/34/cd81e196875d4cc0435d7477a3c2ff5bc007f7": "40698e49e54f273efa8f05d41bea685d",
".git/objects/5f/cef912f665c5125454542a3db76065e9049c3e": "ba528327e545e2f713f0c483d6584a3f",
".git/objects/05/18c6f4a2850f6f9bab90f289c271c3a0bd7007": "2274e2ce9d29c7f35aabc371f9ec2483",
".git/objects/a3/93ea7df30ff74d521740a3a4aabe248735f238": "5da5e9ad7f73f05c939e40573b88ddf7",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/d7/1a1977adec27cc32f3d1d46cf32453d57c54e8": "8bf9668b05a55db4894e2b90aa7fb6f5",
".git/objects/df/190ecdf9b4bd481ea419612e9035bb5fd35c8c": "f79946a3896a983897ab63b97bbd609f",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/35f79e6645d570915ecd933820b3140491ec18": "a43ac77085c35fb794e9afed11b5878a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/722ba07912d5dc9bf7d8bfb4d8784b0c3a557c": "69bd5b372a8794cd5b18fb3c25f54d74",
".git/objects/c0/771c0e3a393f145858bf3f80eedc4e753793f5": "3b4ec7424f3daa159e050baad999e3df",
".git/objects/fd/b4a800bd825720fad8d1bb635188aa234b01eb": "b014965ba1019562cf8e334ba9f97f1a",
".git/objects/f5/855bfbb23ea40ed8ce84793ee8d8076d19410a": "9a5739d69263e31ee081dcca2671e580",
".git/objects/e4/240be96678218d1656946713e6412ff1deaa45": "84d7784e143464a3556953f0aac91a96",
".git/objects/ec/6b42b3898c151e2f4c611dfa749a8a4315666d": "5346884ccf1e740803fc11a9250f43fa",
".git/objects/27/204f6814475b1fbb1c5a898ab3ea8d60f354cb": "c062482a8b6082610d768345c4002682",
".git/objects/4b/e0767775e3acead410c844865a178fc49eef81": "eac92d1b454e031c3878a77fbc61e7fe",
".git/objects/7d/3350b777bdc8bbbe68b632f59db9051552ee96": "f8a2b76eb1e40f78bef47f656757b430",
".git/objects/1f/35918c734e3b5a6288fdad6513b7e793762640": "720867712d0fa8b2c789350b0dde0d0d",
".git/objects/87/88481b2301a009fe735fbc266fc4023c38b51a": "23dc5c0a065e0dbb1f10209fcd615707",
".git/objects/7b/af3a2b7c9f54a15d5d11823b3f23869a388ed7": "4f69387adceb6098a2666189ab14f363",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/5ca66e5eb8d2438edea22b22f7180e0bf48158": "ff68aace3320f7dbc27b8bbc5b621762",
".git/objects/81/b58d04714ccf41f420bc50a5fcdae3d900f260": "14044a81355e87cd768eb6671d02c8c3",
".git/objects/72/39513012bc3edf1c2b0ec022c3a3e62d79ff22": "85d1549cec39c1a280dbbe3dff231c66",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9a/43b2009a397d3d33aa84679b4cb505d2a454df": "5ccf4a356ec76b84d7ee380c23341c8e",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/36/98211efb83a13a2239827bfc2a72b6609ae2db": "009a4023f3fe5d82d886dc56389108e0",
".git/objects/09/28f7556b1054e8f8c2db38e4039dabe238f937": "7c073ce1ccd14eb911df905f2f1b142c",
".git/objects/5d/ce682dd69a2f9f43a9f3145a109901952dc9d1": "2d3bb9059a5b45c11d5c4a659f8d7893",
".git/objects/91/0a4ffff373f5e2d04335540dfdbd0ec5b1f824": "a78e71ab39330ed59fe2dbe32ac00503",
".git/objects/5b/5b5a1806c8f78b6307d77836c126a8b74006fa": "2c341e80ee94c8edfc5dbc788e3e760c",
".git/objects/6c/b5157c2e37c518332d6a4f5c811c27d2ae66c3": "4a792d255364fb7093189f3d4f744107",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/90/06a64ab25be78ed67162ea641bcc68dd3ba859": "777897582eb19cf911da9e52e453a230",
".git/objects/a0/e2cce32a83967b506792a12f51970a01cf1e60": "4ca87b9a0ab0f7862f241d9364e52628",
".git/objects/b1/37e2a420882982eed76d959abbc3c0928d7444": "a99d1b3fb99d10bc84351d1b6ac4c4b3",
".git/objects/b1/ed65a8bbd7fe7e507bac2a618377dc9ed44c30": "ad5ed40982ba9d3886c245fead9dd603",
".git/objects/dc/967ddc449f292d5ddd89df6603ecf188e47e7b": "3be3714fb4be47b36a288f23f3701e8d",
".git/objects/b6/b39baa51220ef956899d92f1160e48bad0f65b": "15aff2b5626118a21a5970d282fb9c89",
".git/objects/d5/85c00514e9fc00c6b6c6552319695fc84ad683": "0ec70eff306aa95f9e6aa3b961ccdfc1",
".git/objects/aa/d6dfecacacb35b7f8036ca3c8b51a22264346b": "8843c3540ffdf2864793aee2e874458f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/0a73e247dc6ac59bf883a4d6e2acc1870ba7fd": "04aabf26dea21d1e26ea1b65d6af32da",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/f168d8282ac66e9f8d73d1b401af08499ed9cf": "c7d6845fdcedde9791af8b8731eb53a3",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/8660ea5097952457e86b070ed1dadbfeaa81b8": "fd765e9e13774bf02111d06ba6fafab3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/0f115214b8aa5a558f90b824d279f9fb181f27": "046a3eb5b8c086be9f16b2b699ee95b1",
".git/objects/ef/7cb334b8080fdf7c56c5e6a3588b16f89135a2": "63fa8519a9e364dd5dcb4d88d29b4fb0",
".git/objects/c3/04d136d28e5e8de8d5df0c7d1207b062b920a7": "97413206c76b26cab8939855a6837f5d",
".git/objects/c4/3ceb510a0541ffcc47dc445f1d12a5610c9428": "3ea0786054d57502cc91ad714e5feadd",
".git/objects/cc/6bad6fb68769a1e7d01bfe84cfc8dd0708821e": "4327251ea18273bdcc762a3ba89444f3",
".git/objects/e8/040dc4c1f56f86f1407cd271bda8522d115ed0": "4f7c99ee75a801bfaf401bf536afdb82",
".git/objects/fa/28b9fe911dc73dbc3dd3d8561a3861f56061df": "e4619448e45e1a2e455f851ee21c1298",
".git/objects/ff/98d68d652d91816751bf9111b426d9ccb8a5ac": "c2a42331c7b806b3aca415db4ccff6f0",
".git/objects/f6/701af41c08ca6baf95ad036636c7c9d0e3fc11": "94ff9e9b506f51bea478436d05e06622",
".git/objects/e7/3c15c2a3dc984bf824a254947921e8528d76e3": "66301f5f2c74201fe921305a59220795",
".git/objects/f8/27cc63714dbad3ca80067e33dc415c345766e3": "b510f931e610a6fdd9eb24074c597cb1",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/1d08d525d348ddcdfc5b9e33fef697060aa8b0": "e0344f11fff6c71f0a337aca7724ef1a",
".git/objects/2d/06fa5b89c97d6d9533a52394eec360d1508854": "47aa05b3a911077f45cc458848ac8488",
".git/objects/2d/37e649d07524333cc1dee45bcaf1d1cd455405": "79df2a585e06790c15fb2ca1d45ff4c4",
".git/objects/83/ec6478e30ec8557d1e1ff2b6f68a24fadc8981": "ebc46e562778724159d2691e8153e9a8",
".git/objects/1c/a331bcaab68bdf519368c0f3da90fd39bbd83d": "f159e0f873372dc73dd6aa78efdb634e",
".git/objects/2e/3fd0ffa6375371368763a20b3f8d1ec3608399": "86106ded622d473a2228ed27d47a08b7",
".git/objects/78/437a750786f6e0efa508786ee267d39d04ab46": "baf367cd8574f6c2249e34aaa017dca6",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a422ce5054940f053df1349b4b680465",
".git/logs/refs/heads/master": "a422ce5054940f053df1349b4b680465",
".git/logs/refs/remotes/origin/master": "03afc34e32bac548395d166b3990160e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "d9056e214f68861b9392cfc2d31129b2",
".git/refs/remotes/origin/master": "d9056e214f68861b9392cfc2d31129b2",
".git/index": "cf3a4856740ace4f70e6acf6949b61d5",
".git/COMMIT_EDITMSG": "89d0896a61a8b43188d0a9ceea195b23",
"assets/AssetManifest.json": "3d749afbdfd8ba2c84f45df6744e89ee",
"assets/NOTICES": "40b9cde86497d37209b8c5d2eebc7ce2",
"assets/FontManifest.json": "79c4efab7ddee792c69724d393d63986",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/build/contracts/Migrations.json": "b5361e44afd4b679f524176c742e0267",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/AlfaSlabOne-Regular.ttf": "7676beb2b1f19eec709feed096327d21",
"assets/assets/logo.png": "0457833ea9524eb5dc2ddb61354d7966",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
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
