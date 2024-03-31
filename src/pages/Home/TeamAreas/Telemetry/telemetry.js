import React from 'react';
import '../../TeamAreas/areas-styles.css';
import Rosanna from '../../../../imgs/AboutUs/TeamMembers/rosanna-2.jpeg';
import Luis from '../../../../imgs/AboutUs/TeamMembers/Luis.jpg';
import Manuel from '../../../../imgs/AboutUs/TeamMembers/Manuel.jpg';
import Equipo from '../../../../imgs/areas/telemetry_team.jpeg';
import Electronics from '../../../../imgs/areas/electronics.jpg';
import EvaSuit from '../../../../imgs/areas/evasuit.jpg';

function Telemetry() {
  return (
    <div className='Telemetry-page'>
			<main class="responsive-wrapper">
		<div class="page-title">
			<h1>Telemetry</h1>
		</div>
		<div class="magazine-layout">
			<div class="magazine-column">
				<article class="article">
					<h2 class="article-title article-title--large">
						<a href="#" class="article-link">The team's area that makes the <mark class="mark mark--primary">Communication</mark>from the Crewmembers and Rover possible</a>
					</h2>
					<div class="article-excerpt">
						<p>Have you ever marveled at the real-time sensor data streaming from a distant rover on Mars, displayed on your web browser? The ability to witness the Martian environment live is a marvel of modern space exploration, and behind this magic trick lies the dedication of the telemetry team.</p>
						<p>The telemetry team acts as the communication backbone of a space mission.</p>
					</div>
					<div class="article-author">
						<div class="article-author-img">
							<img src={Luis} alt="Luis"/>	
						</div>
						<div class="article-author-info">
							<dl>
								<dt>Luis Adames</dt>
								<dd>Telemetry Assistant</dd>
							</dl>
						</div>
					</div>
				</article>
				<article class="article">
					<h2 class="article-title article-title--medium">
						<a href="#" class="article-link">Our team is divided by two areas: Electronics and Software</a>
					</h2>
					<div class="article-creditation">
						<p>Thanks to our electronic system, we transmit the data in real time and showcase it as graphics and relevant information about the rover and its crewmembers. Finally, it is showcased and interpreted on this website.</p>
					</div>
				</article>
			</div>
			<div class="magazine-column">
				<article class="article">
					<figure class="article-img">
						<img src={Equipo} alt='equipo'/>
					</figure>
					<h2 class="article-title article-title--medium">
						<a href="#" class="article-link">What do we do?</a>
					</h2>
					<div class="article-excerpt">
						<p>We're the ones who make sure you see all that cool stuff from the rover in real-time.
						Think of us as the mission's secret weapon. The rover might be out there collecting data on temperature,
						snapping pictures, and who knows what else, but it all comes back in a jumbled mess of signals.<br></br>
						<br></br>That's where we come in. We built the systems that translate that mess into something you can understand
						– like charts, images, the whole shebang. We're basically the rover's whisperers, turning its blips and
						bloops into a live feed for you to see on the website. Pretty sweet, right? So next time you're checking out
						the latest from Mars, remember, it's the telemetry team behind the scenes making it all happen!</p>
					</div>
					<div class="article-author">
						<div class="article-author-img">
							<img src={Rosanna} alt="Rosanna"/>
						</div>
						<div class="article-author-info">
							<dl>
								<dt>Rosanna Bautista</dt>
								<dd>Telemetry Manager</dd>
							</dl>
						</div>
					</div>
				</article>
			</div>
			<div class="magazine-column">
				<article class="article">

					<h2 class="article-title article-title--small">
						<a href="#" class="article-link">We are the<mark class="mark mark--secondary">"Nervous System"</mark> of the whole team</a>
					</h2>
					<div class="article-creditation">
						<p>Just like nerves carry signals throughout your body, the telemetry team ensures a constant flow of information from the rover and crewmembers (like the body) back to this website (like the brain).</p>
					</div>
					<figure class="article-img">
						<img src={Electronics} alt="Electronics"/>
					</figure>
				</article>
				{/* CAMBIAR */}
				<article class="article">
					<h2 class="article-title article-title--medium">
						<a href="#" class="article-link">Objectives</a>
					</h2>
					<div class="article-creditation">
						<p>The telemetry team works tirelessly to ensure the smooth flow of information from the depths of space. They are the silent heroes behind the real-time data streams that captivate audiences and fuel scientific discovery. So, the next time you witness the wonders of a distant world on your screen, remember the dedication of the telemetry team who make it all possible.</p>
					</div>
				</article>
			</div>
			<div class="magazine-column">
				<article class="article">
					<figure class="article-img">
						<img src={EvaSuit} alt="Traje"/>
					</figure>
					<h2 class="article-title article-title--medium">
						<a href="#" class="article-link">We recollect crewmembers vital signs with our suit!</a>
					</h2>
					<div class="article-excerpt">
						<p>
						These are the essential body measurements that indicate crewmembers health and well-being. Examples include heart rate, blood pressure, and oxygen levels.
						</p>
					</div>
					<div class="article-author">
						<div class="article-author-img">
							<img src={Manuel} alt="manuel"/>
						</div>
						<div class="article-author-info">
							<dl>
								<dt>Manuel Guerrero</dt>
								<dd>Telemetry Assistant</dd>
							</dl>
							</div>
						</div>
					</article>
				</div>
			</div>
			
		</main>
	</div>
  );
}

export default Telemetry;