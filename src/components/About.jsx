import { artistPhoto } from '../data/paintings'
import Ornament from './Ornament'

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="about-grid">
        <div className="about-image-wrap">
          <div className="about-frame">
            <img src={artistPhoto} alt="Anita Raj in her studio" />
          </div>
        </div>

        <div className="about-content">
          <p className="section-eyebrow">The Artist</p>
          <h2>Anita Raj</h2>
          <Ornament />
          <p>
            I'm a self taught artist based in Jodhpur,Rajasthan,India creating original oil paintings..I have always been
            drawn to the intricate details,rich histories and majestic beauty of heritage architectural landmarks such as forts,palaces,havelies,temples etc. 
            I find inspiration in the stories these structures tell .
          </p>
          <p>
            The architectural splender of Rajasthan's historic architecture is a testament to the artistic genius of the region's craftsman, who turned sandstone into poetry. They are like a time machine , transporting you to a world of kings and queens, battles and romance, all etched in stone. Each brick and each arc in Rajasthan's heritage architecture is a brushstroke on the canvas of history, painting a vivid picture of a glorius past.
          </p>
          <p>
            Besides architecture the women of Rajasthan inspires me to mould their souls on canvas into various forms which portray their beauty,grace,strength and courage.
          </p>
          <p>
            I aspire to showcase the mesmerising heritage and cultural aspects of Rajasthan so that the world can admire it's beauty and and feel it's true essence.
          </p>

          
        </div>
      </div>
    </section>
  )
}
