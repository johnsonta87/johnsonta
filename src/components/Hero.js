import React from 'react'

export default function Hero() {
  return (
    <div className="hero">
      <div className="MuiGrid-root MuiGrid-container MuiGrid-direction-xs-column MuiGrid-align-items-xs-center MuiGrid-justify-xs-center">
      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
      <a className="jss5" href="/">
      <div className="MuiAvatar-root MuiAvatar-circle jss7">
      <img alt="Johnson Ta" src="/avatar/johnsonta.jpg" className="MuiAvatar-img"></div>
      <div className="jss4">
      <h1 className="MuiTypography-root MuiTypography-h4 MuiTypography-colorPrimary MuiTypography-gutterBottom">Johnson Ta</h1>
      </div>
      </a>
      <p className="jss6">Frontend &amp; <a target="_blank" href="https://jamstack.org/">Jamstack</a> developer<br><a href="mailto:johnsonta87@gmail.com">Say hello!</a></p><p className="jss6"></p>
      </div>
      </div>
    </div>
  )
}
