import React from "react";
import { Link, useLocation } from "react-router-dom";
import menuStyle from '../styles/menu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse, faUser,faBookOpenReader, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import foto from '../images/Eric2.png'


export default function Menu() {

      const {pathname} = useLocation()

  
    return (
        <nav className={menuStyle.menu}>

            <div className={menuStyle.fotoContainer}>
                <img src={foto} alt='Eric Joel' className={menuStyle.foto}/>
            </div>
   
            <Link  to={'/'} className={menuStyle.btn}>
                <FontAwesomeIcon icon={faHouse} className={`${pathname ==='/'? menuStyle.activate:menuStyle.btnIcon}`} />
                <p className={menuStyle.btnText} >Home</p>

            </Link>

            <Link to={'/About'} className={menuStyle.btn}>
               <FontAwesomeIcon icon={faUser}  className={`${pathname ==='/About'? menuStyle.activate:menuStyle.btnIcon}`}  />
                <p className={menuStyle.btnText} >About</p>
            </Link>

            <Link to={'/Skill'} className={menuStyle.btn}>
                <FontAwesomeIcon icon={faBookOpenReader} className={`${pathname ==='/Skill'? menuStyle.activate:menuStyle.btnIcon}`} />
                <p className={menuStyle.btnText}>Skill</p>
            </Link>

            <Link to={'/MyProjects'} className={menuStyle.btn}>
               <FontAwesomeIcon icon={faBriefcase} className={`${pathname ==='/MyProjects'? menuStyle.activate:menuStyle.btnIcon}`}  />
                <p className={menuStyle.btnText}>Projects</p>
            </Link>


            <Link to={'/Contact'} className={menuStyle.btn}>
               <FontAwesomeIcon icon={faEnvelope} className={`${pathname ==='/Contact'? menuStyle.activate:menuStyle.btnIcon}`}/>
                <p className={menuStyle.btnText}>Contact</p>
            </Link>
          
        </nav>
    )
}