import React from 'react'

export default function Header() {
    return (
      <nav className="navbar navbar-default probootstrap-navbar">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href={"/"} title="ProBootstrap:Immobilier">Immobilier</a>
          </div>

          <div id="navbar-collapse" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><a href={"/"}>Acceuil</a></li>
              <li className="dropdown">
                <a href="#" data-toggle="dropdown" className="dropdown-toggle">Pages</a>
                <ul className="dropdown-menu">
                  <li><a href={"/save"}>Enregistrer une annonce</a></li>
                  <li><a href={"/all"}>Liste des annonces</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
