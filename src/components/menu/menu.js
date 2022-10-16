import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import menuStyle from '../styles/menu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faBookOpenReader, faBriefcase, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import foto from '../images/Eric2.webp'


export default function Menu() {

    const { pathname } = useLocation()
    const [resposive, setResposive] = useState(false)
    const menu2Ref = useRef()

    /*useEffect(() => {
        let show = window.matchMedia("(max-width: 767px)");
        window.addEventListener('resize', (e) => {
            // console.log(e.isTrusted)
            //console.log(show.matches)
            setResposive(show.matches)
        });

        //console.log(window)

    }, [])*/

   function closeMenu(){
     menu2Ref.current.className=menuStyle.hideMenu; 
     setResposive(false)
    
   }

   function openMenu(){
    menu2Ref.current.className=menuStyle.menu2;
    setResposive(true)
   
   }

   function navegate(){
    menu2Ref.current.className=menuStyle.hideMenu;
    setResposive(!resposive)
    
   }
    return (
        <>
            <nav className={menuStyle.menu}>

                <div className={menuStyle.fotoContainer}>
                    <img src={foto} alt='Eric Joel' className={menuStyle.foto} />
                </div>

                <Link to={'/'} className={menuStyle.btn}>
                    <FontAwesomeIcon icon={faHouse} className={`${pathname === '/' ? menuStyle.activate : menuStyle.btnIcon}`} />
                    <p className={menuStyle.btnText} >Home</p>

                </Link>

                <Link to={'/About'} className={menuStyle.btn}>
                    <FontAwesomeIcon icon={faUser} className={`${pathname === '/About' ? menuStyle.activate : menuStyle.btnIcon}`} />
                    <p className={menuStyle.btnText} >About</p>
                </Link>

                <Link to={'/Skill'} className={menuStyle.btn}>
                    <FontAwesomeIcon icon={faBookOpenReader} className={`${pathname === '/Skill' ? menuStyle.activate : menuStyle.btnIcon}`} />
                    <p className={menuStyle.btnText}>Skill</p>
                </Link>

                <Link to={'/MyProjects'} className={menuStyle.btn}>
                    <FontAwesomeIcon icon={faBriefcase} className={`${pathname === '/MyProjects' ? menuStyle.activate : menuStyle.btnIcon}`} />
                    <p className={menuStyle.btnText}>Projects</p>
                </Link>


                <Link to={'/Contact'} className={menuStyle.btn}>
                    <FontAwesomeIcon icon={faEnvelope} className={`${pathname === '/Contact' ? menuStyle.activate : menuStyle.btnIcon}`} />
                    <p className={menuStyle.btnText}>Contact</p>
                </Link>

            </nav>


            <nav ref={menu2Ref} className={menuStyle.hideMenu}>

                <div className={menuStyle.fotoContainer2}>

                    <img src={foto} alt='Eric Joel' className={menuStyle.foto2} />

                    <FontAwesomeIcon icon={faBars} className={menuStyle.faBars} onClick={() => closeMenu()} />

                </div>

                <Link to={'/'} className={menuStyle.btn2} onClick={()=>navegate()}>
                    <FontAwesomeIcon icon={faHouse} className={`${pathname === '/' ? menuStyle.activate2 : menuStyle.btnIcon2}`} />
                    <p className={menuStyle.btnText2}>Home</p>

                </Link>

                <Link to={'/About'} className={menuStyle.btn2} onClick={()=>navegate()} >
                    <FontAwesomeIcon icon={faUser} className={`${pathname === '/About' ? menuStyle.activate2 : menuStyle.btnIcon2}`} />
                    <p className={menuStyle.btnText}  >About</p>
                </Link>

                <Link to={'/Skill'} className={menuStyle.btn2} onClick={() => closeMenu()}>
                    <FontAwesomeIcon icon={faBookOpenReader} className={`${pathname === '/Skill' ? menuStyle.activate2 : menuStyle.btnIcon2}`} />
                    <p className={menuStyle.btnText2}>Skill</p>
                </Link>

                <Link to={'/MyProjects'} className={menuStyle.btn2} onClick={() => closeMenu()}>
                    <FontAwesomeIcon icon={faBriefcase} className={`${pathname === '/MyProjects' ? menuStyle.activate : menuStyle.btnIcon2}`} />
                    <p className={menuStyle.btnText2}>Projects</p>
                </Link>


                <Link to={'/Contact'} className={menuStyle.btn2} onClick={() => closeMenu()}>
                    <FontAwesomeIcon icon={faEnvelope} className={`${pathname === '/Contact' ? menuStyle.activate2 : menuStyle.btnIcon2}`} />
                    <p className={menuStyle.btnText2}>Contact</p>
                </Link>

            </nav>

            {!resposive?(

            <header className={menuStyle.showMenuHeader} >
               <span className={menuStyle.showbtn}  onClick={() => openMenu()}>  
                  <FontAwesomeIcon icon={faBars} className={menuStyle.faBars} onClick={() => openMenu()}/>
               </span>
            </header> 
         
            ):(
                <></>
            )

            }



        </>

    )
}