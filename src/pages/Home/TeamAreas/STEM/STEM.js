import '../../TeamAreas/areas-styles.css';
import Faisy from '../../../../imgs/AboutUs/TeamMembers/Faisy.jpg';
import Hanlet from '../../../../imgs/AboutUs/TeamMembers/Hanlet.jpg';
import Iselle from '../../../../imgs/AboutUs/TeamMembers/Iselle.jpg';
import STEM1 from '../../../../imgs/areas/stem1.jpeg';
import STEM2 from '../../../../imgs/areas/stem2.jpeg';
import STEM3 from '../../../../imgs/areas/stem3.jpeg';

function STEM(){
   
  return(
    <div className='STEM-page'>
	<main class="responsive-wrapper">
		<div class="page-title">
			<h1>STEM</h1>
		</div>
		<div class="magazine-layout">
			<div class="magazine-column">
				<article class="article">
					<h2 class="article-title article-title--large">
						<a href="#" class="article-link">Sparking STEM: How We Fuel <mark class="mark mark--primary">Curiosity</mark></a>
					</h2>
					<div class="article-excerpt">
						<p>Have you ever seen the excitement on a child's face as they launch a homemade rocket or program a robot to navigate an obstacle course? These moments of discovery are fueled by the dedicated efforts of our STEM team!<br></br>
            <br></br>Our STEM team acts as the launchpad for a lifelong love of science, technology, engineering, and math.</p>
					</div>
					<div class="article-author">
						<div class="article-author-img">
							<img src={Faisy} alt="Faisy"/>	
						</div>
						<div class="article-author-info">
							<dl>
								<dt>Faisy Alcántara</dt>
								<dd>STEM Manager</dd>
							</dl>
						</div>
					</div>
				</article>
			</div>
			<div class="magazine-column">
				<article class="article">
					<figure class="article-img">
						<img src={STEM1} alt='equipo'/>
					</figure>
					<h2 class="article-title article-title--medium">
						<a href="#" class="article-link">The Bridge Builders: How STEM Connects You to the World Around You!</a>
					</h2>
					<div class="article-excerpt">
						<p>Just like a bridge allows you to cross a gap and explore new places, STEM provides the tools and knowledge to understand
              the amazing things happening around you.  Whether it's the way your phone works, the design of a building, or the incredible
              secrets of the universe, STEM helps you bridge the gap between curiosity and understanding.</p>
					</div>
					<div class="article-author">
						<div class="article-author-img">
							<img src={Hanlet} alt="Hanlet"/>
						</div>
						<div class="article-author-info">
							<dl>
								<dt>Hanlet Leonardo</dt>
								<dd>STEM Assistant</dd>
							</dl>
						</div>
					</div>
				</article>
			</div>
			<div class="magazine-column">
				<article class="article">

					<h2 class="article-title article-title--small">
						<a href="#" class="article-link">Join us on our STEM <mark class="mark mark--secondary">Revolution</mark></a>
					</h2>
					<div class="article-creditation">
						<p>We're building a community of innovators. Through hands-on activities, interactive workshops, and engaging challenges, we've already
            impacted over 3,000 people directly!  That's 3,000 curious minds learning how to build rover prototypes, experiment with Newton's Laws, or even explore the wonders
            of the space through experiments.<br></br>
            <br></br>But here's the best part: you can be a part of it too! We believe that everyone has the potential to be a STEM leader.
            Whether you're a budding scientist, a tech enthusiast, or simply curious about how the world works, there's a place for you in our
            ever-growing community.</p>
					</div>
					<figure class="article-img">
						<img src={STEM2} alt="STEM"/>
					</figure>
				</article>
			</div>
			<div class="magazine-column">
				<article class="article">
					<figure class="article-img">
						<img src={STEM3} alt="STEM"/>
					</figure>
					<h2 class="article-title article-title--medium">
						<a href="#" class="article-link">STEM is Shaping the Future of the Dominican Republic</a>
					</h2>
					<div class="article-excerpt">
						<p>
						The Dominican Republic is brimming with potential, and here at the STEM team, we're absolutely thrilled to be a part of its
            exciting future! We're not just teaching science, technology, engineering, and math (STEM) – we're igniting a passion for
            innovation that will empower the next generation of Dominican leaders.
						</p>
					</div>
					<div class="article-author">
						<div class="article-author-img">
							<img src={Iselle} alt="Iselle"/>
						</div>
						<div class="article-author-info">
							<dl>
								<dt>Iselle Suero</dt>
								<dd>STEM Assistant</dd>
							</dl>
							</div>
						</div>
					</article>
				</div>
			</div>
		</main>
    </div>
  )
}

export default STEM;