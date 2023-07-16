import { urlForImage } from '../../lib/sanity'

function ImageComponent({ img }) {
    return (
        <img src={urlForImage(img).url()} alt="Latest Podcast" />
    )
}

export default ImageComponent