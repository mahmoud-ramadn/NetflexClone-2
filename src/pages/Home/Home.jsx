import './Home.css'
import Navbar from "../../components/Navbar/NavBar"
import Hero from "../../../public/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png"
import info_icon from "../../assets/info_icon.png";
import play_icon from "../../assets/play_icon.png"
import TitileCards from '../../components/TitileCards/TitileCards';
import Footer from '../../components/Footer/Footer';
const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='hero'>
        <img src={Hero} alt="hero" className='banner-img' />
        <div className='hero-caption'>
          <img src={hero_title} alt="hero_title" className='caption-img' />
          <p>Discovring his ties to a secret ancint order, a young man living in modern 
            Istanbul embarks on  a quest to save the city from an immortal enemy.
          </p>
          <div className='hero-btns'>
            <button className='btn'><img src={play_icon} alt="play" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="info" />More Info</button>
          </div>
          <div className='titel-cards'>
          <TitileCards  />

          </div>
        </div>
      </div>
      <div className='more-cards'  style={{paddingLeft:"6%"}}>
          <TitileCards title={"BlockBuster Movies"} catgrory={"top_rated"}/>
          <TitileCards title={"Only on Netflix"}catgrory={"popular"} />
          <TitileCards title={"Upcoming"} catgrory={"upcoming"}/>
          <TitileCards title={"Top Pics for you"} catgrory={"now_playing"}/>
        </div>
<Footer/>
    </div>
  )
}

export default Home