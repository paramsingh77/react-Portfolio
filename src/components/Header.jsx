import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
function Header() {
  return (
      <nav>
          <NavContent/>
		  <button>
			  <AiOutlineMenu/>
		 </button>

   </nav>
  )
}

const NavContent = () => (
	<>
		<h2>Parminder.</h2>
		<div>
			<a href="#home">Home</a>
			<a href="#work">Work</a>
			<a href="#timeline">Experience</a>
			<a href="#services">Services</a>
			<a href="#testimonial">Testimonial</a>
			<a href="#contact">Contact</a>
		</div>
		<a href="mailto:psingh13@una.edu">
			<button>Email</button>
		</a>
	</>
);
export default Header
