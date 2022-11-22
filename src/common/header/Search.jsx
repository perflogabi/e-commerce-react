import React from "react";
import { Link } from "react-router-dom";
import logo from "../../components/assets/images/logo.svg"

const Search = () => {
    window.addEventListener("scroll", function () {
        const search = document.querySelector(".search")
        search.classList.toggle("active", window.scrollY>100)
    })
    return (
        <>
            <section className="search">
                <div className="container c_flex">
                    <div className="logo width">
                        <img src={logo} alt="" />
                    </div>
                </div>

                <div className="search-box f_flex">
                    <i className="fa fa-search"></i>
                    <input type="text" placeholder="Pesquise aqui..." />
                    <span>Todas Categorias</span>
                </div>

                <div className="icon f_flex width">
                    <i className="fa fa-user icon-circle"></i>
                    <div className="cart">
                        <Link to='/cart'>
                            <i className="fa fa-shopping-bag icon-circle"></i>
                            <span>0</span>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Search