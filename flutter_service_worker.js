'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "8d915a162b9a292f443056f06b7f44f4",
"index.html": "0f17f4c58148da21856cebdd8083c17f",
"/": "0f17f4c58148da21856cebdd8083c17f",
"favicon.png": "0457833ea9524eb5dc2ddb61354d7966",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "95ade68fdc2f1b41b9e1f231f842d2f4",
".git/config": "617ad68576e8f96b8fb4bc7c748bc890",
".git/objects/61/feb07c8bb004db48f68e95b54e0f7144f82314": "a7ee67eb9f56e11ea28dbfc32c157116",
".git/objects/0d/36e0d0fd093ab1329857e3591763ba76a989f1": "f5ce1c211c3fb7bbde80d949836f9775",
".git/objects/0c/956ad2b8c7b752ad1b0458c1a18f5f776d3ea5": "4252aed39187911fc70a24a7a2f8f331",
".git/objects/57/5d8a6c3df6377ab410dc05bd0f170c8769aa99": "927bd1a57bbedb376d1f5964bceecf92",
".git/objects/03/24ae0ecdba0e84c1921f3e580c4ed8b6c24b33": "56730ef370097fa68b00702d433c021a",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9e/af8ba1f6768867ea2a318f8157945b6c24f24d": "bf7d3b31eb393825e8b46d23e0c6b004",
".git/objects/6a/538b0915a4c7b4a73d0486c34b5ac95cf7e4eb": "e109545210df27de803db4cbf3ef0945",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/914f8fae12936ca327cd30c3a7c9f8e0e3500f": "5434795c030b30f42b2013e3b4fbf00a",
".git/objects/56/e33e605f723f70784956ee0fba8f937ee067fe": "505853ab1a86ff5d11b633b247c8b5ce",
".git/objects/51/a52cc42a36c640299100c3cffbcd177d8f8cc0": "e2b4903375ecf903becf430aca921708",
".git/objects/58/4b76d0077a6f91df2fd5edb1980cbb350acdc2": "6947a297b37f20ce2c3c5ef081acc339",
".git/objects/67/1a29fa4a257fd18e6aae19d7a38292bd33db7a": "626240cc723c24983a5958d51fa912a6",
".git/objects/94/9ecbc95ae0eabd666c38642498fb9db1741814": "a0cd0bc03902bc17c114100b8e12cd45",
".git/objects/94/2ec21cc5c1067232723e7c8107ee97958eb643": "1edb0e81e564b53dfb2865f1c9849f71",
".git/objects/94/04007abb58e71de1435f134e4b9972219fa90b": "aa73dd7c4208867fcf68e1bceceb31f1",
".git/objects/0e/2ecd93521bdbbbf369ec2a335ae4df277fcdc4": "a3870f3256151a0c844592e20c9481f1",
".git/objects/34/cd81e196875d4cc0435d7477a3c2ff5bc007f7": "40698e49e54f273efa8f05d41bea685d",
".git/objects/5f/cef912f665c5125454542a3db76065e9049c3e": "ba528327e545e2f713f0c483d6584a3f",
".git/objects/05/18c6f4a2850f6f9bab90f289c271c3a0bd7007": "2274e2ce9d29c7f35aabc371f9ec2483",
".git/objects/a3/93ea7df30ff74d521740a3a4aabe248735f238": "5da5e9ad7f73f05c939e40573b88ddf7",
".git/objects/b2/2f9e7a87c3473a0cde26c6eb21ab024e9204cf": "fa661b897c4bd314094a7783e117caab",
".git/objects/b2/0988a1fea61417ac65a5492d4c3b1d0730e175": "4353160070f2d155d1970c6c6094883b",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/d7/1a1977adec27cc32f3d1d46cf32453d57c54e8": "8bf9668b05a55db4894e2b90aa7fb6f5",
".git/objects/df/190ecdf9b4bd481ea419612e9035bb5fd35c8c": "f79946a3896a983897ab63b97bbd609f",
".git/objects/df/75ab66d902e46d1533d7d9a09f838828c1769f": "0b5e3f6189ad212b3b11a761dec52bdd",
".git/objects/da/8e9fb7538a610fc8f96c0c35dbf052082ced26": "6105a3ca367a59549f9afa6805ed9f84",
".git/objects/a5/13355c6d403aebbc8e94a904e095c2ea7bd0f9": "5e64c2bd9dbfdb701eb656c1e3dfb361",
".git/objects/bd/81add729d0749d0eba57e280058b14638ccdbb": "4dc5102a50ab1f3c966c6d82c2af6e3d",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/35f79e6645d570915ecd933820b3140491ec18": "a43ac77085c35fb794e9afed11b5878a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/722ba07912d5dc9bf7d8bfb4d8784b0c3a557c": "69bd5b372a8794cd5b18fb3c25f54d74",
".git/objects/c0/771c0e3a393f145858bf3f80eedc4e753793f5": "3b4ec7424f3daa159e050baad999e3df",
".git/objects/fc/9df5cc7cf8f05c556da59645c3ef4d39e2f19c": "1c0bc608be5eabf3e298d92ab65b2362",
".git/objects/fd/b4a800bd825720fad8d1bb635188aa234b01eb": "b014965ba1019562cf8e334ba9f97f1a",
".git/objects/f2/bffeb82d3383b8eae298d3da50dc5b1278d818": "6738d557dfc034bf5d2ee9a821affed4",
".git/objects/f5/855bfbb23ea40ed8ce84793ee8d8076d19410a": "9a5739d69263e31ee081dcca2671e580",
".git/objects/e4/240be96678218d1656946713e6412ff1deaa45": "84d7784e143464a3556953f0aac91a96",
".git/objects/c8/43ae8d95fb4f86c5d765d61966f8c058fb8435": "b016c753749b3238d50f9ec3800af953",
".git/objects/c6/4ef29a7c0a73fea66ed9073d16f7145d402c06": "f3c9c9dec2d57ef206c4b4df9290d2c1",
".git/objects/ec/6b42b3898c151e2f4c611dfa749a8a4315666d": "5346884ccf1e740803fc11a9250f43fa",
".git/objects/27/204f6814475b1fbb1c5a898ab3ea8d60f354cb": "c062482a8b6082610d768345c4002682",
".git/objects/4b/e0767775e3acead410c844865a178fc49eef81": "eac92d1b454e031c3878a77fbc61e7fe",
".git/objects/7d/3350b777bdc8bbbe68b632f59db9051552ee96": "f8a2b76eb1e40f78bef47f656757b430",
".git/objects/16/f3ad77417df25827791e6a744e2c851da1c925": "6303bc348cfaa12360174b1bc5ec7c19",
".git/objects/89/32ac16f58671a6a2e762aca4733dcf59e54e09": "1db6f0880034d09ea87cb33c37282092",
".git/objects/1f/731e5b8b02f8aa20c07754328001e50639499e": "ebafdda8e733c76cfeb9415ef595cd30",
".git/objects/1f/35918c734e3b5a6288fdad6513b7e793762640": "720867712d0fa8b2c789350b0dde0d0d",
".git/objects/87/88481b2301a009fe735fbc266fc4023c38b51a": "23dc5c0a065e0dbb1f10209fcd615707",
".git/objects/1a/da20961f78651389adf0ad8bda26bbe111b81f": "59b37cb0938401d0394e3277e9254500",
".git/objects/7b/af3a2b7c9f54a15d5d11823b3f23869a388ed7": "4f69387adceb6098a2666189ab14f363",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/1d1778cc8d73bbef2ee5c0f2e22a238ba36ac3": "a196e7eba7287f6b61157b88ffd1d7eb",
".git/objects/10/5ca66e5eb8d2438edea22b22f7180e0bf48158": "ff68aace3320f7dbc27b8bbc5b621762",
".git/objects/10/98e7cb7fcc6186c896dc38049f295605561adc": "42da1f9d13f3126e7e66a10d72ae1c22",
".git/objects/4c/15ae57fe1b83b6e38e0cd285a40a6ecbbb4ff6": "9e842b3254b8078f675e2aa647e932e1",
".git/objects/4c/eb184e7b8d437742a5b58323d0fdbce380b252": "074c89494d3a166862ed116af3b888cd",
".git/objects/4c/3c6f630d7d332bcd6d15af35fee313e0e2c95c": "e16037b09d02420b5e95d40d1344f29e",
".git/objects/4d/fc489f04a78a095a37319aaa6d7d9fa24a0130": "2448abdf175a5a4710b2b98d3a7f67d2",
".git/objects/81/b58d04714ccf41f420bc50a5fcdae3d900f260": "14044a81355e87cd768eb6671d02c8c3",
".git/objects/72/39513012bc3edf1c2b0ec022c3a3e62d79ff22": "85d1549cec39c1a280dbbe3dff231c66",
".git/objects/2f/ffad0ee2fbdb74af88bc60f388bda9b4d5b930": "58f14a5aaa4e30c34d5ee97bdcc8b27a",
".git/objects/2f/06ca1d474ecbe82c26e264f2a66d147267867d": "0dac3874ded7d56d52338448738d0ad4",
".git/objects/88/f0cfdc71d12bb3dbec95277784d6dc9d13ebfb": "a6235085fc27c7afdb6147144d6659d7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/dacc116120f60950acaae4f5cbf50fcc189ec3": "8250cfc1b3877b0fe337487c7befa7c5",
".git/objects/9f/54cc9ba0e429f6c571e0b7dac67e11981ec704": "4be34130e91b07e209a2d01912f6f702",
".git/objects/6b/0c214e098bca0676d07a50f8a058a06e40110f": "dd762e86f962fe1f8cd2b2425715f954",
".git/objects/00/91201a3be4bdbec53ce6319a9a039ceae97301": "c92ff27b5f4bbb1898b3ead13a0c528c",
".git/objects/6e/7dfa1c37aaf81bb9273992ad95ee27fd4266e2": "52989d635c319e497afda52f32f9152a",
".git/objects/9a/1218a6b7f926941dda6b4f4ad2e887f8689b01": "d6642a5354cfae918d9ef9b10d98dfca",
".git/objects/9a/43b2009a397d3d33aa84679b4cb505d2a454df": "5ccf4a356ec76b84d7ee380c23341c8e",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/36/98211efb83a13a2239827bfc2a72b6609ae2db": "009a4023f3fe5d82d886dc56389108e0",
".git/objects/5c/f4654789a4dc9a275c6aaddacd8475223f1c65": "76ff1c859040577e8dc9bb9f06eb1e20",
".git/objects/09/28f7556b1054e8f8c2db38e4039dabe238f937": "7c073ce1ccd14eb911df905f2f1b142c",
".git/objects/09/367a14dd26a2fae4e97829a47aae2f5d338014": "817604cb9502eceee4e70727c380f1e3",
".git/objects/5d/ce682dd69a2f9f43a9f3145a109901952dc9d1": "2d3bb9059a5b45c11d5c4a659f8d7893",
".git/objects/91/0a4ffff373f5e2d04335540dfdbd0ec5b1f824": "a78e71ab39330ed59fe2dbe32ac00503",
".git/objects/3f/7b64e690ff31ddf4e35fd23a698d82c921c6eb": "be3b209cc8f4888d2f4670b5d8509e2a",
".git/objects/5b/5b5a1806c8f78b6307d77836c126a8b74006fa": "2c341e80ee94c8edfc5dbc788e3e760c",
".git/objects/5b/79e51d77201df6db96d5743cca635127df800a": "e63296cf077ca9ae6eb91f179911be9e",
".git/objects/6c/b5157c2e37c518332d6a4f5c811c27d2ae66c3": "4a792d255364fb7093189f3d4f744107",
".git/objects/99/81214897ba03dec64e74f26d3275c6dc06afb4": "b41540202096e0cae7ceb1934a8f61ab",
".git/objects/99/0697a56269da732feecaaa82283208d862f6e4": "0b60b8eee40ef9dc5bc68a1a62bbda92",
".git/objects/55/3aa16bcfe874cae55d668aec7ab2d867e63331": "e79e29268f76691ae34fa76e2086e2e7",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/90/06a64ab25be78ed67162ea641bcc68dd3ba859": "777897582eb19cf911da9e52e453a230",
".git/objects/a0/e2cce32a83967b506792a12f51970a01cf1e60": "4ca87b9a0ab0f7862f241d9364e52628",
".git/objects/a7/89641379655abbfaf06b42d6c2d9fef5d505f7": "da07c1d907a44938ff90e21671c62c1b",
".git/objects/b1/37e2a420882982eed76d959abbc3c0928d7444": "a99d1b3fb99d10bc84351d1b6ac4c4b3",
".git/objects/b1/ed65a8bbd7fe7e507bac2a618377dc9ed44c30": "ad5ed40982ba9d3886c245fead9dd603",
".git/objects/dd/4abb314cba2c6f886e14e2df2a8eb4395b3374": "43b18e89821b623ea9a334af74acef97",
".git/objects/dc/967ddc449f292d5ddd89df6603ecf188e47e7b": "3be3714fb4be47b36a288f23f3701e8d",
".git/objects/b6/b39baa51220ef956899d92f1160e48bad0f65b": "15aff2b5626118a21a5970d282fb9c89",
".git/objects/d5/85c00514e9fc00c6b6c6552319695fc84ad683": "0ec70eff306aa95f9e6aa3b961ccdfc1",
".git/objects/aa/d6dfecacacb35b7f8036ca3c8b51a22264346b": "8843c3540ffdf2864793aee2e874458f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/0a73e247dc6ac59bf883a4d6e2acc1870ba7fd": "04aabf26dea21d1e26ea1b65d6af32da",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/f168d8282ac66e9f8d73d1b401af08499ed9cf": "c7d6845fdcedde9791af8b8731eb53a3",
".git/objects/a8/2ffaba666ffb9558efe4637c53d13a00548fa6": "34559ba099f96f9551a976fa549e55ed",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/8660ea5097952457e86b070ed1dadbfeaa81b8": "fd765e9e13774bf02111d06ba6fafab3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/0f115214b8aa5a558f90b824d279f9fb181f27": "046a3eb5b8c086be9f16b2b699ee95b1",
".git/objects/ef/6574ed15eea90bfe50c3ed5a73ece3ed575eb0": "3991a372629019a5bb07afa7543e4fd8",
".git/objects/ef/7cb334b8080fdf7c56c5e6a3588b16f89135a2": "63fa8519a9e364dd5dcb4d88d29b4fb0",
".git/objects/c3/04d136d28e5e8de8d5df0c7d1207b062b920a7": "97413206c76b26cab8939855a6837f5d",
".git/objects/c4/3ceb510a0541ffcc47dc445f1d12a5610c9428": "3ea0786054d57502cc91ad714e5feadd",
".git/objects/ea/ab65b83cf5e5a2eeb4239867be8386f2c41589": "b228ac3529617fb5d10a2a5e06efe4ff",
".git/objects/e1/a22268c5f1ebed41003fb5b13fa8232d923174": "2331c6c6bd86bb2d6dfa791ec369dac6",
".git/objects/cc/6bad6fb68769a1e7d01bfe84cfc8dd0708821e": "4327251ea18273bdcc762a3ba89444f3",
".git/objects/f9/115a3c62e7e5fbca44f611dd66ba1f7ae7a764": "16530c42fbb5ad82fb4e27a411074a41",
".git/objects/f9/96e995cee14a1bcc47f753bbd7510a2c6bf23f": "2e2b1f9fa5a579314539571115d5ae59",
".git/objects/e8/040dc4c1f56f86f1407cd271bda8522d115ed0": "4f7c99ee75a801bfaf401bf536afdb82",
".git/objects/fa/28b9fe911dc73dbc3dd3d8561a3861f56061df": "e4619448e45e1a2e455f851ee21c1298",
".git/objects/ff/98d68d652d91816751bf9111b426d9ccb8a5ac": "c2a42331c7b806b3aca415db4ccff6f0",
".git/objects/f6/f224d5d6bf67083ed37891c557cc257239e7fa": "4a35ebe29a6d531fc8951e92a96bc1a1",
".git/objects/f6/701af41c08ca6baf95ad036636c7c9d0e3fc11": "94ff9e9b506f51bea478436d05e06622",
".git/objects/e7/3c15c2a3dc984bf824a254947921e8528d76e3": "66301f5f2c74201fe921305a59220795",
".git/objects/cb/50f7021c1101ab4b9ad481b3266d38a14518ec": "ea96dcfc8d5915a2dcb839f0ca128c13",
".git/objects/f8/27cc63714dbad3ca80067e33dc415c345766e3": "b510f931e610a6fdd9eb24074c597cb1",
".git/objects/e0/54e22c1d56d4d0ae8a817040bfb234414f6231": "d2738d0c546a1e4f89642d14fa4c2a69",
".git/objects/46/f52164734b3a6e031960c5539da9eaa58b443a": "203ebf8f32efc16282dfd6057f8a5358",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/1d08d525d348ddcdfc5b9e33fef697060aa8b0": "e0344f11fff6c71f0a337aca7724ef1a",
".git/objects/2d/06fa5b89c97d6d9533a52394eec360d1508854": "47aa05b3a911077f45cc458848ac8488",
".git/objects/2d/37e649d07524333cc1dee45bcaf1d1cd455405": "79df2a585e06790c15fb2ca1d45ff4c4",
".git/objects/83/ec6478e30ec8557d1e1ff2b6f68a24fadc8981": "ebc46e562778724159d2691e8153e9a8",
".git/objects/83/a29bfc83b59227f3230f80d3a0e851969b869c": "d65a22ef38fcc81e547bb4de00b810c5",
".git/objects/70/f48953adfd0e0b482347aaf85dc341aca56622": "f5e9929bd5b732a0230d8e41479c75ab",
".git/objects/23/41aefb61ab95440543cb69ae7c9c96e5a27e17": "1499d1c73a537a75f25a1101f4f8c99f",
".git/objects/8d/b762bb18071e1c3c582f1c902cdff28ef2fcba": "2ea085966f03ee55a95475dd163c68b2",
".git/objects/1c/a331bcaab68bdf519368c0f3da90fd39bbd83d": "f159e0f873372dc73dd6aa78efdb634e",
".git/objects/2e/3fd0ffa6375371368763a20b3f8d1ec3608399": "86106ded622d473a2228ed27d47a08b7",
".git/objects/2b/add2e469c87760fa41c1dd137e5c2bc2382ad7": "3317d4c13ea09014c0554d2fe9b85859",
".git/objects/78/437a750786f6e0efa508786ee267d39d04ab46": "baf367cd8574f6c2249e34aaa017dca6",
".git/objects/78/961c7b442efb2556296efbeada687c1332ec65": "9f1f7e552399f146dbc6e1e459a9c70f",
".git/objects/13/ef9a2ad10cdf44d4de4092d9d883968e5c707f": "b51cf974600edbc75975f2d50b627d42",
".git/objects/7a/c2dc62161a43d7de1cbe67e86c7a7b68b1e367": "6310f8f510c09041ffe413f508712210",
".git/objects/22/12acdb634285998c7f2113d6b66bbe59faf287": "33db17f44b993af335eea896ef6a3138",
".git/objects/25/a649ebcb45d0dbe1729d49c369ece7f9dde896": "11f05f3c33d580e5399061eb7867e952",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "be0d3ed27d4c2628d646943abcd35a10",
".git/logs/refs/heads/master": "be0d3ed27d4c2628d646943abcd35a10",
".git/logs/refs/remotes/origin/master": "67bb8cdda902fde0f142d81349c9c6b7",
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
".git/refs/heads/master": "4e488dbc7e6ae817aab4b6d2840c448f",
".git/refs/remotes/origin/master": "4e488dbc7e6ae817aab4b6d2840c448f",
".git/index": "d2c3eeab949a39bc8ab92404edf5469c",
".git/COMMIT_EDITMSG": "87e33054948f724fc6ef9369fdee378a",
"assets/AssetManifest.json": "a3b0cf95a0e82690b049bdef03b2160e",
"assets/NOTICES": "40b9cde86497d37209b8c5d2eebc7ce2",
"assets/FontManifest.json": "a8e026aa7f2bedf84b7941011bf9ce0f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/build/contracts/Migrations.json": "b5361e44afd4b679f524176c742e0267",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/assets/BebasNeue-Regular.ttf": "21bb70b62317f276f2e97a919ff5bd8c",
"assets/assets/assets/AlfaSlabOne-Regular.ttf": "7676beb2b1f19eec709feed096327d21",
"assets/assets/assets/logo.png": "72c574bd1792e3090bf5ab4cf1adef86",
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
