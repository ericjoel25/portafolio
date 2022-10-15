import React from "react";
import Menu from "../../components/menu/menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCode, faEye } from '@fortawesome/free-solid-svg-icons';
import projectStyles from "../../components/styles/myProjects.module.css";
import Background from "../home/background";
import Typewriter from 'typewriter-effect';
import granja from '../../components/images/Granja.png'
import puntoDeVenta from '../../components/images/venta.png'
import ortografia from '../../components/images/Ortografia.jpg'

export default function Myprojects(){
   const data = [
      {
         title: 'HTML, CSS, React, Firebase',
         Image:granja,
         demo:'',
         code:''

      },
      {
         title: 'HTML, CSS, Javascript Vanilla',
         Image: puntoDeVenta,
         demo:'',
         code:''
      },
      {
         title: 'React Native, Expo, CSS',
         Image: ortografia,
         demo:'',
         code:''
      },
      {
         title: 'React',
         Image: '',
         demo:'',
         code:''
      },
      {
         title: 'firebase',
         Image: '',
         demo:'',
         code:''
      },
      {
         title: 'React Native',
         Image: '',
         demo:'',
         code:''
      },
      {
         title: 'SDK Expo',
         Image: '',
         demo:'',
         code:''
      },
      {
         title: 'Tauri',
         Image: '',
         demo:'',
         code:''
      },
      {
         title: 'Git',
         Image: '',
         demo:'',
         code:''
      }
   ]
   
    return(
       <main className={projectStyles.container}>
          <Background />
          <Menu />

          <section className={projectStyles.body}>
         
         <span className={projectStyles.text}>
               <Typewriter
                  onInit={(typewriter) => {
                     typewriter.typeString("My projects.")
                        .pauseFor(2500)
                        //.deleteAll()
                        .start();
                  }}
               />
         </span>
         <section className={projectStyles.bodyCard} >
            {data.map((list, index) => {
               return (
                  <article className={`${projectStyles.card} ${projectStyles.animate}`} key={index}>
                      <img src={list.Image} alt={`Imagen-${list.title}`} className={projectStyles.Image} />
                     <span className={projectStyles.imageText}>{list.title}</span>
                     
                     <div className={projectStyles.btnBody}>
                        <a target="_blank"  href="https://ericjoel25.github.io/gestor-de-ventas/#Tablero" className={projectStyles.btn}>
                           Code
                           <FontAwesomeIcon icon={faCode}  className={projectStyles.textIcon}/>
                        </a>
                        <a  target="_blank" href="https://ericjoel25.github.io/gestor-de-ventas/#Tablero" className={projectStyles.btn}>
                           Demo
                           <FontAwesomeIcon icon={faEye}  className={projectStyles.textIcon} />
                        </a>
                     </div>
                  </article>
               )
            })}

         </section>

         </section>
       </main>
    )
}