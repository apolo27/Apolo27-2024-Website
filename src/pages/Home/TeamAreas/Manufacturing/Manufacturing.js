import '../../TeamAreas/areas-styles.css';
import Miguel from '../../../../imgs/AboutUs/TeamMembers/Miguel.jpg';
import Eridania from '../../../../imgs/AboutUs/TeamMembers/Eridania.jpg';
import Humberto from '../../../../imgs/AboutUs/TeamMembers/Humberto.jpg';
import Manufactura from '../../../../imgs/areas/manufacturing1.jpeg';
import Manufactura2 from '../../../../imgs/areas/manufacturing2.jpeg';
import Manufactura3 from '../../../../imgs/areas/manufacturing3.jpeg';

function Manufacturing(){
   
  return(
    <div className='Manufacturing-page'>
	<main class="responsive-wrapper">
		<div class="page-title">
			<h1>Manufacturing</h1>
		</div>
		<div class="magazine-layout">
			<div class="magazine-column">
				<article class="article">
					<h2 class="article-title article-title--large">
						<a href="#" class="article-link">The Hands that Shape the Challenge: <mark class="mark mark--primary">Manufacturing</mark> team</a>
					</h2>
					<div class="article-excerpt">
						<p>These are the unsung heroes who translate blueprints into reality, the hands that turn vision into a machine capable of
              navigating the simulated Martian terrain. Their role is critical, for without their expertise, the dreams of young explorers
              wouldn't have a platform to take flight.<br></br> 
              <br></br>Imagine a complex chassis, strong yet lightweight – that's their creation.
              Every intricately wired circuit board, every meticulously welded frame – these bear the mark of their dedication.  The Manufacturing Team doesn't just build a rover; they build the foundation for success in the HERC competition.</p>
					</div>
					<div class="article-author">
						<div class="article-author-img">
							<img src={Miguel} alt="Miguel"/>	
						</div>
						<div class="article-author-info">
							<dl>
								<dt>Miguel Arredondo</dt>
								<dd>Manufacturing Manager</dd>
							</dl>
						</div>
					</div>
				</article>
			</div>
			<div class="magazine-column">
				<article class="article">
					<figure class="article-img">
						<img src={Manufactura} alt='equipo'/>
					</figure>
					<h2 class="article-title article-title--medium">
						<a href="#" class="article-link">What do we do?</a>
					</h2>
					<div class="article-excerpt">
						<p>As a team, we brainstorming together, tinkering with different ideas, and sometimes even coming up with totally new ways to put things together.
              We've seen it all in this workshop, and that experience gives us a major advantage when it comes to suggesting improvements to the design.
              We might propose a different material or a way to assemble something more efficiently – all to make this rover a champion on the competition.<br>
              </br>
              <br></br>In the end, it's a true team effort. We work hand-in-hand with the engineers, bouncing ideas back and forth until we
               find the perfect solution. It's not just about following instructions – it's about using our skills and experience, along 
               with the engineers' brains, to build something truly remarkable. And let me tell you, there's nothing more satisfying than
              seeing that rover roll out of the workshop, ready to tackle the Martian landscape. It's a testament to the combined power of the entire team!</p>
					</div>
					<div class="article-author">
						<div class="article-author-img">
							<img src={Eridania} alt="Rosanna"/>
						</div>
						<div class="article-author-info">
							<dl>
								<dt>Eridania Pérez</dt>
								<dd>Manufacturing Assistant</dd>
							</dl>
						</div>
					</div>
				</article>
			</div>
			<div class="magazine-column">
				<article class="article">

					<h2 class="article-title article-title--small">
						<a href="#" class="article-link">Evolving <mark class="mark mark--secondary">Excellence </mark></a>
					</h2>
					<div class="article-creditation">
						<p>It's a balancing act, but that's where the magic of engineering comes in. Through meticulous analysis of past rovers, we pinpointed areas for improvement.
            This led us down exciting paths of exploration, from innovative materials to groundbreaking construction techniques.<br></br>
            <br></br>The end result? A next-generation HERC rover that's both lighter and more capable of handling the rigors of the simulated Martian landscape. We can't wait to pull back the curtain and show you this masterpiece!
            Mark your calendars, because the competition is heating up. This year, we're not just participating – we're aiming to leave a lasting impression. Get ready to witness the power of a dedicated team and the evolution of excellence on wheels!</p>
					</div>
					<figure class="article-img">
						<img src={Manufactura2} alt="Manufactura"/>
					</figure>
				</article>
			</div>
			<div class="magazine-column">
				<article class="article">
					<figure class="article-img">
						<img src={Manufactura3} alt="Manufactura"/>
					</figure>
					<h2 class="article-title article-title--medium">
						<a href="#" class="article-link">Lessons Learned, Lighter Rover: We're Gearing Up for the Challenge!</a>
					</h2>
					<div class="article-excerpt">
						<p>
						Year after year, we push ourselves to build a better rover for the NASA Human Exploration Rover Challenge (HERC).
            This year is no different! We've taken all the experience from past competitions and poured it into a brand new design
            – a lighter, yet more robust machine ready to conquer the simulated Martian terrain.
						</p>
					</div>
					<div class="article-author">
						<div class="article-author-img">
							<img src={Humberto} alt="Humberto"/>
						</div>
						<div class="article-author-info">
							<dl>
								<dt>José Hernández</dt>
								<dd>Manufacturing Assistant</dd>
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

export default Manufacturing;