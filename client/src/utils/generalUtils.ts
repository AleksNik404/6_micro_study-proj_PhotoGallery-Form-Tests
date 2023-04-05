import { EMPTY_API_IMAGE } from './constants';

export const replaceApiImageToLowSize = (rawgApiImg: string) => {
  if (!rawgApiImg) return EMPTY_API_IMAGE;

  const commonPath = 'https://media.rawg.io/media';

  return rawgApiImg.replace(commonPath, `${commonPath}/crop/600/400/`);
};
