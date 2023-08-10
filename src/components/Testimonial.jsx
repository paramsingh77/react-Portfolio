import React from 'react'

const Testimonial = () => {
  return (
      <div id='testimonial'>
          <h2>Testimonial</h2>
          <section>
              <TestimonialCard name={"Terwil"} feedback={"Good Work"}/>
              <TestimonialCard name={"Jenki"} feedback={"nice Work"}/>
              <TestimonialCard name={"Dani"} feedback={"osm Work"}/>
          </section>
      
    </div>
  )
}

const TestimonialCard = ({name,feedback}) => (
    <article>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="User" />
        <h4 style={{fontWeight:"bold"}}>{name}</h4>
        <p>{feedback}</p>
    </article>
)
export default Testimonial
