import React from 'react'
import { Link } from "gatsby"
import { AiFillCaretLeft } from "react-icons/ai";

export default function BackButton({ link, value }) {
  return (
    <div className="back-btn">
      <Link to={link}>
        <AiFillCaretLeft /> {value}
      </Link>
    </div>
  )
}
