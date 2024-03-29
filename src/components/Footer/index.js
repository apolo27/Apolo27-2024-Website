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
  	 				<li><a href="#">Our Story</a></li>
  	 				<li><a href="#">Awards</a></li>
                    <li><a href="#">Manufacturing</a></li>
  	 				<li><a href="#">Telemetry</a></li>
  	 				<li><a href="#">STEM</a></li>
                    <li><a href="#">HERC Simulation</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Data Dashboard</h4>
  	 			<ul>
  	 				<li><a href="#">Overview</a></li>
  	 				<li><a href="#">Rover</a></li>
  	 				<li><a href="#">Crewmembers</a></li>
  	 				<li><a href="#">Environment</a></li>
  	 				<li><a href="#">Sensors</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Stem With Us</h4>
  	 			<ul>
  	 				<li><HashLink smooth to={window.innerWidth > 1280 ? "Stem-With-Us#blogs" : "Stem-With-Us"}>Blog</HashLink></li>
  	 				<li><HashLink smooth to={window.innerWidth > 1280 ? "Stem-With-Us#events" : "Stem-With-Us"}>Events Calendar</HashLink></li>
  	 				<li><HashLink smooth to={window.innerWidth > 1280 ? "Stem-With-Us#schoolvisit" : "Stem-With-Us"}>Book a School Visit</HashLink></li>
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