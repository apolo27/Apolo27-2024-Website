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
                   <li><HashLink smooth to="/#Members">Members</HashLink></li>
                   <li><HashLink smooth to="Telemetry">Telemetry</HashLink></li>
                   <li><HashLink smooth to="STEM">STEM</HashLink></li>
                   <li><HashLink smooth to="Manufacturing">Manufacturing</HashLink></li>
                   <li><HashLink smooth to="Simulation">HERC Simulation</HashLink></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Data Dashboard</h4>
  	 			<ul>
                    <li><HashLink smooth to="DataDashboard#overview">Overview</HashLink></li>
                    <li><HashLink smooth to="DataDashboard#rover">Rover</HashLink></li>
                    <li><HashLink smooth to="DataDashboard#crewmembers">Crewmembers</HashLink></li>
                    {/* <li><HashLink smooth to="DataDashboard#environment">Environment</HashLink></li> */}
                    <li><HashLink smooth to="DataDashboard#sensors">Sensors</HashLink></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Stem With Us</h4>
  	 			<ul>
  	 				<li><HashLink smooth to="StemWithUs#blogs">Blog</HashLink></li>
  	 				<li><HashLink smooth to="StemWithUs#events">Events Calendar</HashLink></li>
  	 				<li><HashLink smooth to="ContactUs">Book a School Visit</HashLink></li>
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