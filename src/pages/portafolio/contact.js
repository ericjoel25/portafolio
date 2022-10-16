import React from "react";
import Menu from "../../components/menu/menu";
import contactStyles from "../../components/styles/contact.module.css";
import Background from "../home/background";
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons';
import github from '../../components/images/github.webp'
 

export default function Contact(){
    return(
       <main className={contactStyles.container}>
          <Background />
          <Menu />

          <section className={contactStyles.body}>
             <span className={contactStyles.title} >
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString("Contact me.")
                                    .pauseFor(2500)
                                    //.deleteAll()
                                    .start();
                            }}
                        />

               </span>

               <article className={contactStyles.card}>

            
                 <span className={contactStyles.cardText}>
                   <FontAwesomeIcon icon={faEnvelope} className={contactStyles.cardIcon} />
                   ericjoelmarte.m@hotmail.com
                 </span>

                 <span className={contactStyles.cardText}>
                   <FontAwesomeIcon icon={faPhone}  className={contactStyles.cardIcon} />
                   (829)-360-6091
                 </span>

                 <span  className={contactStyles.cardText}>
                    <img src={github} className={contactStyles.github} />
                    https://github.com/ericjoel25
                 </span>

               </article>
          </section>
       </main>
    )
}