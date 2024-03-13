import React from "react";
import logo from "../images/logo.png";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Header({search}) {

  const onSearch = (word)=>{
    search(word)
  }

  return (
    <header className="py-4 bg-warning">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Link to="/"> <img src={logo} height={60} alt="" /> </Link>
          </div>
          {/* col-2 */}

          <div className="col-10">
            <div className="input-group mt-2">
              <span className="input-group-text">
                <FaSearch />
              </span>
              <input type="text" onChange={ (e)=>{onSearch(e.target.value)} } className="form-control form-control-lg" placeholder="Search"/>
            </div>
          </div>{/* col-10 */}

        </div>{/* row */}
      </div>{/* container */}
    </header>
  );
}

export default Header;
