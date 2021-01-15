import React from 'react'
import { Link } from "gatsby"

export default function footer() {
  return (
    <footer>
      <div className="footer_content">
        <p>Find me on &nbsp;
        <a href="https://twitter.com/JNSN_" target="_blank" rel="noreferrer">Twitter</a>, &nbsp;
        <a href="https://www.instagram.com/jnsn.t/" target="_blank" rel="noreferrer">Instagram</a> & &nbsp;
        <a href="https://github.com/johnsonta87" target="_blank" rel="noreferrer">Github</a></p>
        <p>&copy; {new Date().getFullYear()} Built with Gatsby React / Contentful + deployed by Netlify</p>
      </div>
      <div className="footer_links">
        <Link to="/">Contact me</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/uses">Uses</Link>
      </div>
    </footer>
  )
}
