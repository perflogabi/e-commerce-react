import React, { useState } from "react";
import { Link } from "react-router-dom"

const Navbar = () => {

    const [MobileMenu, setMobileMenu] = useState(false)
    return (
       <>
        <header>
            <div className="container d_flex">
                <div className="categories d_flex">
                    <span className="fa-solid fa-border-all"></span>
                    <h4>
                        Categorias <i className="fa fa-cheverson down"></i>
                    </h4>
                </div>
                
                <div className="navlink">
                    <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                        <li>
                            <Link to='/'>home</Link>
                        </li>
                        <li>
                            <Link to='/paginas'>paginas</Link>
                        </li>
                        <li>
                            <Link to='/usuario'>conta usuário</Link>
                        </li>
                        <li>
                            <Link to='/fornecedor'>conta fornecedor</Link>
                        </li>
                        <li>
                            <Link to='/rastrear'>Rastrear</Link>
                        </li>
                        <li>
                            <Link to='/contato'>contato</Link>
                        </li>
                    </ul>

                    <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
                        {MobileMenu ? <i className='fas fa-times close home-btn'></i> : 
                        <i className='fas fa-bars open'></i>}
                    </button>
                </div>
            </div>
        </header>
       </>
    )
}

export default Navbar