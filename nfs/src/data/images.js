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

export const bannerImages = {
  bugatti: bugattiB,
  ferrari: ferrariB,
  lamborghini: lamborghiniB,
  rollsroyce: rollsroyceB,
  astonmartin: astonmartinB,
  koenigsegg: koenigseggB,
  // New companies: null → gradient fallback in CompanyPage
  porsche: null,
  mclaren: null,
  pagani: null,
  pininfarina: null,
  maserati: null,
  rimac: null,
};

export const logoImages = {
  bugattiLogo,
  ferrariLogo,
  lamborghiniLogo,
  rollsroyceLogo: rollsroyceLogo,
  astonmartinLogo,
  koenigseggLogo,
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
  koenigsegg_jesko_absolut: koenigseggJeskoImg,
  koenigsegg_agera_rs: koenigseggAgeraImg,
  koenigsegg_regera: koenigseggRegeraImg,
  astonmartin_valkyrie: astonMartinImg,
};
