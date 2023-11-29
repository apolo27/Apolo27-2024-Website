import "./Footer.css"
import {Container} from 'react-bootstrap/';
import Grid from '@mui/material/Grid';
import footerLogo from '../../imgs/FooterLogo.png'

const Footer = (props) => {
    const t = props.t;
    return(
        <footer className="footer">
            <Container>
                <Grid container={true} spacing={0} wrap="wrap">

                    <Grid item xs={0} sm={4} md={4} >
                        <img src={footerLogo} alt="apolo27 logo"/><h4  style={{display: "inline-block"}}>Apolo 27</h4>
                        <p>{t('Hero-Title')}</p>
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
            </Container>
        </footer>
    )
}

export default Footer