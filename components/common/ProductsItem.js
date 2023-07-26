import Image from 'next/image'
import Container from "./Container"
import RichText from './RichText';
import ImageComponent from "./ImageComponent"


function ProductItem({ thumbnail, title, paragraph }) {


    return (



        <li className="products__item">
            <div className="products__item__img">

            </div>
            <div className="products__item__text">
                {thumbnail && <ImageComponent img={thumbnail} />}
                <div className="products__item__text">
                    <h3>{title}</h3>
                    <RichText textContent={paragraph} />
                    <a href="">View Product &#8827;</a>
                </div>
            </div>
        </li>





    )
}

export default ProductItem