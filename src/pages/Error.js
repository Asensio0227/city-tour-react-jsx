import React from 'react'
import logo from "../img/undraw_not_found_re_44w9.svg";
import { Link } from "react-router-dom"

function Error() {
  return (
    <section className="section section-center">
      <div className="er">
        <img src={logo} alt="page not found" className="img"/>
        <Link to='/' className="btn-primary">
          back home
        </Link>
      </div>
    </section>
  )
}

export default Error
