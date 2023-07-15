import YoutubeVideo from "./YoutubeVideo"


function Hero({ title, paragraph, youtubeUrl, youtubeTitle, inverse, bottomPadding }) {


    return (

        <div className={`hero ${inverse ? 'hero__inverse' : ''} ${bottomPadding ? 'bottom-padding' : ''}`}>

            <div className="hero__text">
                <h2>{title}</h2>
                {paragraph}
            </div>

            <div className="hero__media">
                {youtubeUrl && <YoutubeVideo video={youtubeUrl} title={youtubeTitle} />}
            </div>


        </div>



    )
}

export default Hero