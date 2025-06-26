import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './footer.css'

export default function Footer(){
    return(
        <footer>
            <div className="footer-divider"></div>
                <div className="credits">
                    <p>Made by Airbone25</p>
                </div>
                <div className="icons">
                    <a href="#"><FontAwesomeIcon icon={faGithub} style={{height: "30px"}}/></a>
                    <a href="#"><FontAwesomeIcon icon={faLinkedin} style={{height: "30px"}}/></a>
                </div>
        </footer>
    )
}