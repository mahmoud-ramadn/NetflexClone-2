import './Footer.css';
import twitter_icon from "../../assets/twitter_icon.png"
import youtube_icon from "../../assets/youtube_icon.png"
import instagram_icon from "../../assets/instagram_icon.png"
import faceBook from "../../assets/facebook.png"
  
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={faceBook} alt="fc" />
        <img src={twitter_icon} alt="fc" />
        <img src={youtube_icon} alt="fc" />
        <img src={instagram_icon} alt="fc" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help center</li>
        <li>Gift Cards</li>
        <li>Media center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Prefernces</li>
        <li>corporate Information</li>
        <li>Contact Us</li>


      </ul>

      <p className='copyright-text'>c 1997-2023 NetFlix, Inc.</p>
    </div>
  )
}

export default Footer