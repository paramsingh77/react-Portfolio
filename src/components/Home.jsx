import React, { useRef } from "react";
import { motion ,animate } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";

import mes from '../assets/me.png'
const Home = () => {

    const animationClientsCount = () => {
        animate(0, 10, {
            duration: 1,
            onUpdate: (v) => (clientCount.current.textContent = v.toFixed())
       })
    }

    const clientCount = useRef(null);
	const animations = {
			h1: {
				initial: {
					x: "-100%",
					opacity: 0,
				},
				whileInView: {
					x: 0,
					opacity: 1,
				},
			},
		}
		// button = {
		// 	initial: {
		// 		y: "-100%",
		// 		opacity: 0,
		// 	},
		// 	whileInView: {
		// 		y: 0,
		// 		opacity: 1,
		// 	},
		// };

	return (
		<div id="home">
			<section>
				<div>
                    <motion.h1 {...animations.h1} style={{ fontSize: "3rem" , fontWeight:'bold'}}>
						Hi, I am <br /> Parminder Singh
					</motion.h1>
					<Typewriter
						options={{
							strings: ["A Developer", "A Designer"],
							autoStart: true,
							loop: true,
							wrapperClassName: "typewriterpara",
							cursor: "",
						}}
					></Typewriter>
					<div>
						<a href="mailto:psingh13@una.edu">Hire Me</a>
						<a href="#work">
							Projects <BsArrowUpRight />
						</a>
					</div>
                    
					<article>
						<p>
							+<motion.span whileInView={animationClientsCount} ref={clientCount}>5</motion.span>
						</p>
                        <span>Projects Done</span>
                        
                    </article>
                
                        <article data-special>
						<p>
							<span>Contact</span>
						</p>
						<span>psingh13@una.edu</span>
					</article>
                  
					
				</div>
			</section>
            <section>
                <img src={mes} alt="Parminder"></img>
            </section>
            <BsChevronDown/>
		</div>
	);
};

export default Home;
