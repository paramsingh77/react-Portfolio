import React from 'react'
import pic from '../assets/2.jpeg'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai'
const Footer = () => {
  return (
      <footer>
          <div>
              <img src={pic} alt="prop" />
          <h2>Parminder Singh</h2>
          <p>Motivation is temporary , But Discipline lasts forever</p>
        </div>
          <aside>
              <h2>Social Media</h2>
              <article>
                  <a href="https://linkedin.com/psingh20" target={"blank"}><AiFillLinkedin/></a>
                  <a href="https://instagram.com/param.sings" target={"blank"}><AiFillInstagram/></a>
                  <a href="https://github.com/paramsingh77" target={"blank"}><AiFillGithub/></a>
              </article>
          </aside>
          <a href="#home"><AiOutlineArrowUp/></a>
    </footer>
  )
}

export default Footer 
