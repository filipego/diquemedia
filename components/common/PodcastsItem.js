import RichText from './RichText';
import ImageComponent from "./ImageComponent"


function PodcastsItem({ thumbnail, title, paragraph, }) {


    return (

        <li className="podcastsItems__item">
            <div className="podcastsItems__item__img">
                {thumbnail && <ImageComponent img={thumbnail} />}
            </div>
            <div>

                <div className="podcastsItems__item__text">
                    <h3>{title}</h3>
                    <RichText textContent={paragraph} />
                    {/* <a href="#" target="_blank" rel="noreferrer">View Product &#8827;</a> */}
                </div>
            </div>
        </li>

    )
}

export default PodcastsItem