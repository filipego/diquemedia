import YoutubeVideo from "./YoutubeVideo"


function Hero({ title, paragraph, youtubeUrl, youtubeTitle, inverse }) {


    return (

        <div className={`hero ${inverse ? 'hero__inverse' : ''}`}>

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