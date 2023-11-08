import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg bg-body-primary navbar-${props.mode ==='light'?'white':'dark'} bg-${props.mode ==='light'?'secondary':'dark'}`}>
    <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">{props.Home}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.About}</a>
        </li>
        </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className="p-3 mb-2 bg-primary text-white mx-1" onClick={props.BlueMode}></div>
      <div className="p-3 mb-2 bg-success text-white mx-1" onClick={props.GreenMode}></div> 
      <div className="p-3 mb-2 bg-danger text-white mx-1" onClick={props.RedMode}></div> 
      <div className="p-3 mb-2 bg-warning text-dark mx-1" onClick={props.YellowMode}></div>
      <div className="p-3 mb-2 bg-dark text-white border mx-1" onClick={props.DarkMode}></div>
      <div className="p-3 mb-2 bg-light text-dark mx-1" onClick={props.LightMode}></div>
      {/* <div className="form-check form-switch mx-2">
        <label className={`form-check-label text-${props.mode ==='light'?'black':'white'}`} htmlFor="flexSwitchCheckDefault">Enable Blue Mode</label>
        <input className="form-check-input" onClick={props.BlueMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      </div> */}
      {/* <div className="form-check form-switch mx-2">
        <label className={`form-check-label text-${props.mode ==='light'?'black':'white'}`} htmlFor="flexSwitchCheckDefault">Enable Green Mode</label>
        <input className="form-check-input" onClick={props.GreenMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      </div> */}
      {/* <div className="form-check form-switch mx-2">
        <label className={`form-check-label text-${props.mode ==='light'?'black':'white'}`} htmlFor="flexSwitchCheckDefault">Enable Red Mode</label>
        <input className="form-check-input" onClick={props.RedMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      </div> */}
      {/* <div className="form-check form-switch mx-2">
        <label className={`form-check-label text-${props.mode ==='light'?'black':'white'}`} htmlFor="flexSwitchCheckDefault">Enable Yellow Mode</label>
        <input className="form-check-input" onClick={props.YellowMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      </div> */}
      {/* <div className="form-check form-switch mx-2">
        <label className={`form-check-label text-${props.mode ==='light'?'black':'white'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        <input className="form-check-input" onClick={props.DarkMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      </div> */}
    </div>
    </div>
    </nav>
    </>
  )
}
Navbar.propTypes = {
    home : PropTypes.string,
    about : PropTypes.string
}

Navbar.defaultProps = {
    home : "Enter home page here",
    about : "Enter about page here"
}