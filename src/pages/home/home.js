import React, { useState } from "react";
import homeStyle from '../../components/styles/home.module.css';
import Menu from "../../components/menu/menu";
import homeImg from '../../components/images/homeImg.png'
import Background from "./background";
import Typewriter from 'typewriter-effect';


export default function Home() {

   return (
      <main className={homeStyle.container}>
         <Background />
         <Menu />

         <section className={homeStyle.body}>
            <article className={homeStyle.article} >
               <div className={homeStyle.title} >
                  <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString("Hi there!<br/> I'm Eric Joel <br/>Web Developer.")    
                           .pauseFor(2500)
                           //.deleteAll()
                           .changeDelay(0.1)
                           .start();
                     }}

                  />

               </div>

               <p className={homeStyle.text} >Web developer / Front</p>
            </article>

            <article className={homeStyle.article2} >
               < img src={homeImg} alt='home' className={homeStyle.homeImg} />
            </article>

         </section>
      </main>
   )
}