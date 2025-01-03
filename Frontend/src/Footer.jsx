import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
    return(
        <footer>
            <div className="footer-divider"></div>
                <div className="credits">
                    <p>Made by Airbone25</p>
                </div>
                <div className="icons">
                    <a href="#"><FontAwesomeIcon icon={faGithub} style={{height: "30px"}}/></a>
                </div>
        </footer>
    )
}