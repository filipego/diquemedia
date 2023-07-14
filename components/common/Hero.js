



function Hero({ title, paragraph, media, inverse }) {


    return (

        <div className={`hero ${inverse ? 'hero__inverse' : ''}`}>

            <div className="hero__text">
                <h2>{title}</h2>
                {paragraph}
            </div>

            <div className="hero__media">
                {media}
            </div>


        </div>



    )
}

export default Hero