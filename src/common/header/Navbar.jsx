import React, { useState } from "react";
import { Link } from "react-router-dom"

const Navbar = () => {

    const [MobileMenu, setMobileMenu] = useState(false)
    return (
       <>
        <header>
            <div className="container d_flex">
                <div className="catgrories d_flex">
                    <span className="fa-solid fa-border-all"></span>
                    <h4>
                        Categorias <i className="fa fa-cheverson down"></i>
                    </h4>
                </div>
                
            </div>
        </header>
       </>
    )
}

export default Navbar