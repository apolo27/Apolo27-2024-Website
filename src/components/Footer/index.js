import "./Footer.css"
import {Container} from 'react-bootstrap/';
import Grid from '@mui/material/Grid';
import footerLogo from '../../imgs/FooterLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTiktok, faFacebook, faSquareXTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

//Hola como vas
const Footer = (props) => {
    let t = props.t;
    return(
        <footer className="footer">
            <Container>
                <Grid container={true} spacing={0} wrap="wrap">

                    <Grid item xs={0} sm={4} md={4} >
                        <img src={footerLogo} alt="apolo27 logo"/><h4  style={{display: "inline-block"}}>Apolo 27</h4>
                        <p>{t('Hero-Title')}</p>
                        <section className="socials">
                            <a style={{marginLeft: 25}} href="https://www.instagram.com/apolo27_rd/"> <FontAwesomeIcon icon={faInstagram} size="xl" className="fa-ig"/></a>
                            <a style={{marginLeft: 25}} href="https://www.tiktok.com/@apolo27rd"> <FontAwesomeIcon icon={faTiktok} size="xl" className="fa-tk"/></a>
                            <a style={{marginLeft: 25}} href="https://www.facebook.com/Apolo27.rd"> <FontAwesomeIcon icon={faFacebook} size="xl" className="fa-fb"/></a>
                            <a style={{marginLeft: 25}} href="https://twitter.com/apolo27_rd"> <FontAwesomeIcon icon={faSquareXTwitter} size="xl" className="fa-x"/></a>
                            <a style={{marginLeft: 25}} href="https://www.linkedin.com/company/apolo27/"> <FontAwesomeIcon icon={faLinkedin} size="xl" className="fa-lin"/></a>
                            <a style={{marginLeft: 25}} href="https://www.linkedin.com/company/apolo27/"> <FontAwesomeIcon icon={faYoutube} size="xl" className="fa-yt"/></a>
                        </section>
                    </Grid>


                    
                    <Grid item xs={0} sm={3} md={3} >
                        <h4>{t('Pages')}</h4>
                        <ul className="footer-col">
                            <li><a href="/">{t('Home')}</a></li>
                            <li><a href="/About-Us">{t('AboutUsFooter')}</a></li>
                            <li><a href="/Data-Dashboard">{t('DataDashboardFooter')}</a></li>
                            <li><a href="/Stem-With-Us">{t('StemWithUsFooter')}</a></li>
                            <li><a href="/Sponsors">{t('BecomeASponsorFooter')}</a></li>
                            <li><a href="/Games">{t('Games')}</a></li>
                        </ul>
                    </Grid>

                    
                    <Grid item xs={0} sm={3} md={3} >
                        <h4>{t('AboutUsFooter')}</h4>
                        <ul className="footer-col">
                            <li><a href="/About-Us#OurStory">{t('OurStoryFooter')}</a></li>
                            <li><a href="/About-Us">{t('NasaHERCFooter')}</a></li>
                            <li><a href="/About-Us#TeamMembers">{t('TeamMembersFooter')}</a></li>
                            <li><a href="/About-Us#OurAwards">{t('OurAwardsFooter')}</a></li>
                        </ul>
                    </Grid>

                </Grid>
                <hr></hr>
            </Container>
        </footer>
    )
}

export default Footer