import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from '../ImageTag';

const Header = ({ siteTitle }) => (
  <header>
    <div className="flex items-center justify-center content-center mb-12">
      <div className="flex-col">
        <div className="avatar items-center mx-auto mb-5">
          <Img alt={siteTitle} filename="avatar/avatar.jpg" className="self-center w-25 avatar-img" />
        </div>
        <div className="w-full flex-1 text-center mb-5">
          <h1 className="text-5xl font-bold title">
            <Link
              to="/"
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
        <p className="w-full text-center text-xl">Frontend &amp; <a href="https://jamstack.org/" target="_blank" rel="noreferrer">
          Jamstack</a> developer<br />
          <a href="mailto:johnsonta87@gmail.com">Say hello!</a>
        </p>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
