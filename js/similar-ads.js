import { createAd } from './create-ad.js';
const SIMILAR_AD_COUNT = 10;

const similarAds = Array.from({length: SIMILAR_AD_COUNT}, createAd);

export {similarAds};
