import "./Footer.css"
import { HashLink } from 'react-router-hash-link';
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"/>

const Footer = () => {
    return(
        <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>Apolo 27</h4>
  	 			<ul>
                   <li><HashLink smooth to="/#timeline">Our Story</HashLink></li>
                   <li><HashLink smooth to="Sponsors#root">Donate</HashLink></li>
                   <li><HashLink smooth to="Telemetry#Telemetry-page">Telemetry</HashLink></li>
                   <li><HashLink smooth to="STEM#STEM-page">STEM</HashLink></li>
                   <li><HashLink smooth to="Manufacturing#Manufacturing-page">Manufacturing</HashLink></li>
                   <li><HashLink smooth to="Simulation#root">HERC Simulation</HashLink></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Data Dashboard</h4>
  	 			<ul>
                    <li><HashLink smooth to="Data-Dashboard#overview">Overview</HashLink></li>
                    <li><HashLink smooth to="Data-Dashboard#rover">Rover</HashLink></li>
                    <li><HashLink smooth to="Data-Dashboard#crewmembers">Crewmembers</HashLink></li>
                    <li><HashLink smooth to="Data-Dashboard#environment">Environment</HashLink></li>
                    <li><HashLink smooth to="Data-Dashboard#sensors">Sensors</HashLink></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Stem With Us</h4>
  	 			<ul>
  	 				<li><HashLink smooth to="Stem-With-Us#blogs">Blog</HashLink></li>
  	 				<li><HashLink smooth to="Stem-With-Us#events">Events Calendar</HashLink></li>
  	 				<li><HashLink smooth to="Contact-Us#root">Book a School Visit</HashLink></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
                    <a href="https://www.instagram.com/apolo27_rd/" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.youtube.com/@apolo2730" target="_blank"><i class="fab fa-youtube"></i></a>
                    <a href="https://www.linkedin.com/company/apolo27/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://www.tiktok.com/@apolo27rd" target="_blank"><i class="fab fa-tiktok"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    )
}

export default Footer