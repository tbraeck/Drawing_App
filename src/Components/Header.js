import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div style={{justifyContent: "center", alignItems: "center"}}>
       <Link to={`/`} className="link">
            <img src="/sketch_fast.gif" alt="header" style={{width: "600px"}} />
        </Link>
    </div>
  )
}

export default Header
