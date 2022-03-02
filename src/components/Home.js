import React from 'react'

export default function Home() {
  return (
      <div>
        <div className="alert alert-success mb-2" role="alert">Bienvenue dans votre application d'annonce immobilière</div>
        <section className="flexslider">
            <ul className="slides">
                <li style={{backgroundImage: `url("assets/img/estate1.jpg")`}} className="overlay"></li>
                <li style={{backgroundImage: `url("assets/img/estate2.jpg")`}} className="overlay"></li>
                <li style={{backgroundImage: `url("assets/img/estate3.jpg")`}} className="overlay"></li>
                <li style={{backgroundImage: `url("assets/img/estate4.jpg")`}} className="overlay"></li>
                <li style={{backgroundImage: `url("assets/img/estate5.jpg")`}} className="overlay"></li>
            </ul>
        </section>
      </div>
  )
}
