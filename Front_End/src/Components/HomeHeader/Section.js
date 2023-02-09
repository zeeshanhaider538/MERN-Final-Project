import React from 'react'
import "./Section.css"
function Section() {
  return (
    <main className="container">
        <p>Hello 👋 We Track Your Exercise Like</p>
        <section className="animation">
          <div className="first"><div>Running</div></div>
          <div className="second"><div>Cycling</div></div>
          <div className="third"><div>Swimming</div></div>
          <div className="fourth"><div>Walking</div></div>
          <div className="fifth"><div>Hiking</div></div>
        </section>
      </main>
  )
}

export default Section