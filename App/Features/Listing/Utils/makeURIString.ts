import { Image } from '../../../Entities'

export default (thumbnail: Image | undefined): string | undefined => {
  let imgSource
  if (thumbnail?.extension && thumbnail?.path) {
    imgSource = thumbnail.path + '.' + thumbnail.extension
  }
  return imgSource
}
