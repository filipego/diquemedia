import RichText from './RichText';
import ImageComponent from "./ImageComponent"


function ProductItem({ thumbnail, title, paragraph, buy1Url }) {


    return (

        <li className="products__item">
            <div className="products__item__img">

            </div>
            <div>
                {thumbnail && <ImageComponent img={thumbnail} />}
                <div className="products__item__text">
                    <h3>{title}</h3>
                    <RichText textContent={paragraph} />
                    <a href={buy1Url} target="_blank" rel="noreferrer">View Product &#8827;</a>
                </div>
            </div>
        </li>

    )
}

export default ProductItem