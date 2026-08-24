// Image registry — maps bannerKey and logoKey to imported assets
// For companies without local images, bannerImg will be null → CSS gradient used
import bugattiB from '../img/Bugatti banner.png';
import ferrariB from '../img/Ferrari Banner.jpg';
import lamborghiniB from '../img/Lamborghini banner.jpg';
import rollsroyceB from '../img/Rolls Royce banner.jpg';
import astonmartinB from '../img/astonmartin_banner.webp';
import koenigseggB from '../img/Konisegg banner.jpg';

import bugattiLogo from '../img/Bugatti logo.png';
import ferrariLogo from '../img/Ferrari logo.png';
import lamborghiniLogo from '../img/Lamborghini Logo.png';
import rollsroyceLogo from '../img/Rolls Royce logo.png';
import astonmartinLogo from '../img/aston logo.jpg';
import koenigseggLogo from '../img/Konisegg logo.jpg';

// Model images (local)
import tourbillonImg from '../img/Bugatti Tourbillon.jpg';
import bugattiCentodiceImg from '../img/Bugatti-Centodieci-Prototype-02.webp';
import bugattiChironImg from '../img/bugatti.jpg';
import ferrari296GtbImg from '../img/Ferrari 296-gtb.webp';
import ferrariDaytonaImg from '../img/1-Ferrari-Daytona-SP3.webp';
import ferrariLaferrariImg from '../img/LaFerrari.webp';
import lambRevueltoImg from '../img/Lamborghini revuelto m.webp';
import lambVenenoImg from '../img/Lamborghini-Veneno-Roadster-1.jpg';
import lambCentenarioImg from '../img/LAMBORBHINI-CENTENARIO m.jpg';
import rrSpectreImg from '../img/Rolls Royce spectre m.jpg';
import rrGhostImg from '../img/ghost1.webp';
import rrCullinanImg from '../img/rolls-royce-cullinan1.webp';
import koenigseggJeskoImg from '../img/Konisegg jesko m.jpg';
import koenigseggAgeraImg from '../img/Agera1.webp';
import koenigseggRegeraImg from '../img/Koenigsegg-regra1.jpg';
import astonMartinImg from '../img/aston martin valkrie.jpg';

// bannerKey → banner image. Local files for brands we have real assets for;
// verified-live Wikimedia Commons photos for the rest. null = CSS gradient fallback.
export const bannerImages = {
  bugatti: bugattiB,
  ferrari: ferrariB,
  lamborghini: lamborghiniB,
  rollsroyce: rollsroyceB,
  astonmartin: astonmartinB,
  koenigsegg: koenigseggB,
  porsche: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Porsche_headquarter_Stuttgart-Zuffenhausen_Werk_II.jpg',
  mclaren: 'https://upload.wikimedia.org/wikipedia/commons/9/92/2024_McLaren_750S_2.jpg',
  pagani: 'https://upload.wikimedia.org/wikipedia/commons/4/44/IMGPAGANI25.png',
  pininfarina: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Pininfarina_1.jpg',
  maserati: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Maserati_Mod%C3%A8ne_0002.JPG',
  rimac: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Rimac_Nevera.jpg',
};

// logoKey → brand logo. Local files where we have real logo assets;
// verified-live Wikimedia/Wikipedia logo files for the rest.
export const logoImages = {
  bugattiLogo: bugattiLogo,
  ferrariLogo: ferrariLogo,
  lamborghiniLogo: lamborghiniLogo,
  rollsroyceLogo: rollsroyceLogo,
  astonmartinLogo: astonmartinLogo,
  koenigseggLogo: koenigseggLogo,
  porscheLogo: 'https://upload.wikimedia.org/wikipedia/en/c/c2/Porsche_Logo_2024.png',
  mclarenLogo: 'https://upload.wikimedia.org/wikipedia/en/4/45/McLaren_logo.svg',
  paganiLogo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/IMGPAGANI25.png',
  pininfarinaLogo: 'https://upload.wikimedia.org/wikipedia/en/6/6e/Pininfarina.svg',
  maseratiLogo: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Maserati_logo_2.svg',
  rimacLogo: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Rimac_Automobili_logo.svg',
};

// model ID → local image (null = use gradient placeholder)
export const modelImages = {
  bugatti_tourbillon: tourbillonImg,
  bugatti_centodieci: bugattiCentodiceImg,
  bugatti_chiron: bugattiChironImg,
  ferrari_296gtb: ferrari296GtbImg,
  ferrari_daytonasp3: ferrariDaytonaImg,
  ferrari_laferrari: ferrariLaferrariImg,
  lamborghini_revuelto: lambRevueltoImg,
  lamborghini_veneno: lambVenenoImg,
  lamborghini_centenario: lambCentenarioImg,
  rollsroyce_spectre: rrSpectreImg,
  rollsroyce_ghost: rrGhostImg,
  rollsroyce_cullinan: rrCullinanImg,
  koenigsegg_jesko: koenigseggJeskoImg,
  koenigsegg_agera_rs: koenigseggAgeraImg,
  koenigsegg_regera: koenigseggRegeraImg,
  astonmartin_valkyrie: astonMartinImg,
};

// model ID → high-res online photo (Wikimedia Commons / official sources).
// Verified live at the time these were added.
export const onlineModelImages = {
  "pininfarina_b95": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTcuALa8CLFq7OPDbWS0wj0mddvVNuMuz6lSO9gI0sGQ&s=10",

  "pagani_zonda_hp_barchetta": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgNIwp4TayapPp-ae9JOtNF3undpe9jflgTDJ9UPCi7Q&s=10",
  "pagani_zonda_revolucion": "https://cdn.motor1.com/images/mgl/WmAmL/s3/pagani-zonda-revolucion-getting-road-conversion.jpg",

  "mclaren_p1": "https://i.ytimg.com/vi/659jfAB3jPI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAYN0xUmkFfZd4UNitBYU5MZ0CksA",
  "porsche_913_gt3rs": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCCkVbK5dFuPI5FlMLycomia9_xbw5hEknL2p2uIg9V9Pg2n2Xfn9XHpUE&s=10",
  "porsche_mission_x": "https://www.topgear.com/sites/default/files/2023/06/_DSF4308_ret_lores.jpg",
  "porsche_taycan_turbo_gt": "https://upload.wikimedia.org/wikipedia/commons/8/80/2025_Porsche_Taycan_Turbo_GT_-_01.jpg",
  "porsche_911_carrera_gts": "https://upload.wikimedia.org/wikipedia/commons/4/42/Porsche_992_Carrera_4_GTS_1X7A7209.jpg",
  "porsche_718_spyder_rs": "https://upload.wikimedia.org/wikipedia/commons/d/da/2025_Porsche_718_Spyder_RS_rear.jpg",

  "rollsroyce_cullinan": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVt506Z8oZhQcuQlFjQ6nOdmas71CL8MxXpwTB6swEkA&s=10",

  "rollsroyce_spectre": "https://images.hgmsites.net/hug/rolls-royce-spectre-lunaflair_100943867_h.webp",
  "rollsroyce_droptail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV2G5HPjw0k7EQXhMXjpP7BAIyPk35_nE8OoiyyvHzU04OmMqcOx9ZPKCm&s=10",
  "rollsroyce_phantom": "https://hips.hearstapps.com/hmg-prod/images/2026-rolls-royce-phantom-pr-123-690cd211484fb.jpg?crop=0.553xw:0.554xh;0.106xw,0.344xh&resize=1200:*",
  "rollsroyce_ghost": "https://etimg.etb2bimg.com/photo/91029567.cms",

  "ferrari_296gtb": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE2ZFRA-ompbGYc2JXKX6VtbzI0rPSUbzew4325Iy3s0HJYyluNz-zKW20&s=10",
  "lamborghini_aventador_svj": "https://res.cloudinary.com/unix-center/image/upload/c_limit,dpr_3.0,f_auto,fl_progressive,g_center,h_240,q_auto:good,w_385/k6he0ktcmvcyq27zuhtz.jpg",

  "ferrari_812superfast": "https://hips.hearstapps.com/hmg-prod/images/ferrari-812-comp-tm-hero-64e3ccf9971d5.jpg?crop=0.685xw:0.962xh;0.155xw,0&resize=1200:*",
  "ferrari_daytonasp3": "https://f1rst-motors.s3.me-central-1.amazonaws.com/cars/1752435532582-ferrari-daytona-sp3-599-1%20%286%29.jpg",
  "ferrari_purosangue": "https://motoringworld.in/wp-content/uploads/2022/09/Ferrari-Purosangue.jpg",
  "ferrari_sf90": "https://supercarblondie.com/wp-content/uploads/1-Ferrari-SF90-.webp",

  "lamborghini_temerario": "https://medialamborghini-meride-tv.akamaized.net/meride/lamborghini/video/images/folder1/1799/vlcsnap-2024-07-31-15h54m13s688.jpg",
  "lamborghini_urus_se": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNcu5YXh6HEACDrkoAElbWH--oy43kPux6WfDr9VDBfbc6Oh1fNQR22k&s=10",

  "astonmartin_vantage": "https://www.astonmartin.com/-/media/models---vantage-s/final/designer-specs/vantage-s-specs-desktop-2.jpg?mw=1920&rev=72cd77621bcf4490b0f0e763189f373f&hash=00A3618C89913B4D08C2556B63D3498A",
  "astonmartin_valhalla": "https://images.cdn.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/aston-martin-valhalla-static.jpg?itok=bk_ky2DA",
  "astonmartin_db12": "https://images.hgmsites.net/hug/2024-aston-martin-db12-volante_100925693_h.webp",
  "astonmartin_valiant": "https://www.topgearmag.in/uploads/News/Image/news_aston_martin_valiant_ajpg1719471751.jpg",
  "astonmartin_vanquish": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Aston_Martin_Vanquish_%282024%29_DSC_7892.jpg",

  "bugatti_tourbillon": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Bugatti_Tourbillon.jpg/1280px-Bugatti_Tourbillon.jpg",
  "bugatti_mistral": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Bugatti_Mistral_2.jpg/1280px-Bugatti_Mistral_2.jpg",
  "bugatti_bolide": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/2024_Bugatti_Bolide_4.jpg/1280px-2024_Bugatti_Bolide_4.jpg",
  "bugatti_chironss": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Bugatti_Chiron_Super_Sport.jpg/1280px-Bugatti_Chiron_Super_Sport.jpg",
  "bugatti_chiron": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bugatti_Chiron_1.jpg/1280px-Bugatti_Chiron_1.jpg",
  "bugatti_divo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bugatti_Divo%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0029%29.jpg/1280px-Bugatti_Divo%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0029%29.jpg",
  "bugatti_centodieci": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/2022_Bugatti_Centodieci_in_Grigio_Chiaro%2C_front_left.jpg/1280px-2022_Bugatti_Centodieci_in_Grigio_Chiaro%2C_front_left.jpg",
  "ferrari_12cilindri": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/2025_Ferrari_12Cilindri_in_Rosso_Imola%2C_front_left.jpg/1280px-2025_Ferrari_12Cilindri_in_Rosso_Imola%2C_front_left.jpg",
  "ferrari_laferrari": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/LaFerrari_in_Beverly_Hills_%2814563979888%29.jpg/1280px-LaFerrari_in_Beverly_Hills_%2814563979888%29.jpg",
  "pininfarina_pura_vision": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7iObGsFMdbLSn-j2HjmGCNMt2k5GtEqj0-LfLqZUvguo-KL85kqAJJaSb&s=10",
  "pininfarina_sergio": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Geneva_MotorShow_2013_-_Pininfarina_Sergio_right_front_view.jpg/1280px-Geneva_MotorShow_2013_-_Pininfarina_Sergio_right_front_view.jpg",
  "lamborghini_veneno": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg/1280px-Geneva_MotorShow_2013_-_Lamborghini_Veneno_1.jpg",
  "lamborghini_centenario": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/2016-03-01_Geneva_Motor_Show_1360.JPG/1280px-2016-03-01_Geneva_Motor_Show_1360.JPG",
  "lamborghini_sesto": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Lamborghini_Sesto_Elemento.jpg/1280px-Lamborghini_Sesto_Elemento.jpg",
  "astonmartin_db12_volante": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Aston_Martin_DB12_1X7A1921.jpg/1280px-Aston_Martin_DB12_1X7A1921.jpg",
  "astonmartin_dbs770": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/2018_Aston_Martin_DBS_Superleggera_V12_Automatic_5.2_Front.jpg/1280px-2018_Aston_Martin_DBS_Superleggera_V12_Automatic_5.2_Front.jpg",
  "porsche_cayenne_turbo_gt": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Porsche_Cayenne_Turbo_GT.jpg/1280px-Porsche_Cayenne_Turbo_GT.jpg",
  "koenigsegg_gemera": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/2020_Koenigsegg_Gemera_2.0.jpg/1280px-2020_Koenigsegg_Gemera_2.0.jpg",
  "koenigsegg_cc850": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/2022_Koenigsegg_CC850.jpg/1280px-2022_Koenigsegg_CC850.jpg",
  "koenigsegg_agera_rs": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Koenigsegg_Agera_RS.JPG/1280px-Koenigsegg_Agera_RS.JPG",
  "koenigsegg_one1": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Koenigsegg_One-1_-_Gen%C3%A8ve_2014_-_01.jpg/1280px-Koenigsegg_One-1_-_Gen%C3%A8ve_2014_-_01.jpg",
  "pagani_utopia": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Pagani_Utopia_Auto_Zuerich_2023_1X7A1183.jpg/1280px-Pagani_Utopia_Auto_Zuerich_2023_1X7A1183.jpg",
  "pagani_huayra_bc": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Pagani_Huayra_BC_.jpg/1280px-Pagani_Huayra_BC_.jpg",
  "pagani_huayra_r": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Pagani_Huayra_R.jpg",
  "pininfarina_battista": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Pininfarina_Battista%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS1056%29.jpg/1280px-Pininfarina_Battista%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS1056%29.jpg",
  "maserati_grancabrio_folgore": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Maserati_GranCabrio_in_Hong_Kong.jpg",
  "maserati_granturismo_folgore": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/2018_Maserati_GranTurismo_Sport_Automatic_4.7_Front.jpg/1280px-2018_Maserati_GranTurismo_Sport_Automatic_4.7_Front.jpg",
  "maserati_mc20": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Maserati_MC20_003.jpg/1280px-Maserati_MC20_003.jpg",
  "maserati_mc20_cielo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Maserati_MC20_IAA_2021_1X7A0087.jpg/1280px-Maserati_MC20_IAA_2021_1X7A0087.jpg",
  "maserati_grecale_folgore": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Maserati_Grecale_Trofeo_1X7A5784.jpg/1280px-Maserati_Grecale_Trofeo_1X7A5784.jpg",
  "maserati_grecale_trofeo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Maserati_Grecale_Trofeo_1X7A5720.jpg/1280px-Maserati_Grecale_Trofeo_1X7A5720.jpg",
  "maserati_mc20_gt2": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Maserati_MC20_003.jpg/1280px-Maserati_MC20_003.jpg",
  "rimac_nevera_r": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Rimac_Nevera_R_Auto_Zuerich_2024_DSC_6340.jpg/1280px-Rimac_Nevera_R_Auto_Zuerich_2024_DSC_6340.jpg",
  "rimac_nevera": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Rimac_Nevera.jpg/1280px-Rimac_Nevera.jpg",

  "mclaren_750s": "https://upload.wikimedia.org/wikipedia/commons/e/e6/2024_McLaren_750S_5.jpg",
  "mclaren_artura": "https://upload.wikimedia.org/wikipedia/commons/1/1a/McLaren_Artura_IMG_0527.jpg",
  "mclaren_765lt": "https://upload.wikimedia.org/wikipedia/commons/6/62/McLaren_765LT_IMG_3930.jpg",
  "mclaren_w1": "https://upload.wikimedia.org/wikipedia/commons/2/28/2024_McLaren_W1_SP25.jpg",
  "mclaren_senna": "https://upload.wikimedia.org/wikipedia/commons/1/1f/McLaren_Senna%2C_GIMS_2018%2C_Le_Grand-Saconnex_%281X7A0404%29.jpg",
  "mclaren_speedtail": "https://upload.wikimedia.org/wikipedia/commons/0/06/McLaren_Speedtail_Genf_2019_1Y7A5298.jpg",
};
