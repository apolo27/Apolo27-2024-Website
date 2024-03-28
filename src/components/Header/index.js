/* global jQuery */

import './Header.css'

import $ from 'jquery'; // Import jQuery
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../../imgs/logo.svg'


function Header(props) {
    let t = props.t;
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
      function test() {
        var tabsNewAnim = $("#navbarSupportedContent");
        var selectorNewAnim = $("#navbarSupportedContent").find("li").length;
        var activeItemNewAnim = tabsNewAnim.find(".active");
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimTop = activeItemNewAnim.position();
        var itemPosNewAnimLeft = activeItemNewAnim.position();

        if (itemPosNewAnimTop === undefined) {
          return;
        }
        $(".hori-selector").css({
          top: itemPosNewAnimTop.top + "px",
          left: itemPosNewAnimLeft.left + "px",
          height: activeWidthNewAnimHeight + "px",
          width: activeWidthNewAnimWidth + "px",
        });
        $("#navbarSupportedContent").on("click", "li", function (e) {
          $("#navbarSupportedContent ul li").removeClass("active");
          $(this).addClass("active");
          var activeWidthNewAnimHeight = $(this).innerHeight();
          var activeWidthNewAnimWidth = $(this).innerWidth();
          var itemPosNewAnimTop = $(this).position();
          var itemPosNewAnimLeft = $(this).position();
          $(".hori-selector").css({
            top: itemPosNewAnimTop.top + "px",
            left: itemPosNewAnimLeft.left + "px",
            height: activeWidthNewAnimHeight + "px",
            width: activeWidthNewAnimWidth + "px",
          });
          // Activar el menu, poder dar click y se quede abierto en el movil y otro click y se cierre el menu
        });
      }
      test();

      $(document).ready(function () {
        setTimeout(function () {
          test();
        });
      });
      $(window).on("resize", function () {
        setTimeout(function () {
          test();
        }, 500);
      });
      // $(".navbar-toggler").click(function () {
      //     $(".navbar-collapse").slideToggle(300);
      //     setTimeout(function () { test(); });
      // });

      jQuery(document).ready(function ($) {
        var path = window.location.pathname.split("/").pop();
        if (path == "") {
          path = "index.html";
        }
        var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
        target.parent().addClass("active");
      });
      // Limpia el efecto secundario
      return () => {
        $(window).off("resize");
      };

    }, [location]);

    return (
        <nav className={`navbar navbar-expand-custom navbar-mainbg ${isOpen ? 'open' : ''}`}>
            <a className="navbar-brand navbar-logo" href="/"></a>
            <a className="navbar-brand navbar-logo" href="/">
            <img src={logo} alt="Logo" />
        </a>
            <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleMenu}>
                <i className="fas fa-bars text-white"></i>
            </button>
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
                    <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                        <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}><i className=""></i>Home</Link>
                    </li>
                    <li className={`nav-item ${location.pathname === '/Data-Dashboard' ? 'active' : ''}`}>
                        <Link to="/Data-Dashboard" onClick={() => setIsOpen(false)} className="nav-link"><i className=""></i>Dashboard</Link>
                    </li>
                    <li className={`nav-item ${location.pathname === '/Stem-With-Us' ? 'active' : ''}`}>
                        <Link to="/Stem-With-Us" onClick={() => setIsOpen(false)} className="nav-link"><i className=""></i>STEM With Us</Link>
                    </li>
                    <li className={`nav-item ${location.pathname === '/Sponsors' ? 'active' : ''}`}>
                        <Link to="/Sponsors" onClick={() => setIsOpen(false)} className="nav-link"><i className=""></i>Become a Sponsor</Link>
                    </li>
                </ul>
            </div>
        </nav>
    ) 
}

export default Header;
