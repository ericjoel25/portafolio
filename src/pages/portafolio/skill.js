import React from "react";
import Menu from "../../components/menu/menu";
import skillStyle from "../../components/styles/skill.module.css";
import Background from "../home/background";
import firebaseIcon from '../../components/images/Firebase.png';
import HTMLIcon from '../../components/images/HTML.png';
import CssIcon from '../../components/images/CSS.png';
import Javascript from '../../components/images/Javascript.png';
import ReactIcon from '../../components/images/React.png';
import ReactNativeIcon from '../../components/images/ReactNative.png';
import ExpoIcon from '../../components/images/Expo.png';
import TauriIcon from '../../components/images/Tauri.png';
import GitIcon from '../../components/images/Git.png';
import Typewriter from 'typewriter-effect';


export default function Skill() {

   const data = [
      {
         title: 'HTML',
         Image: HTMLIcon

      },
      {
         title: 'CSS',
         Image: CssIcon
      },
      {
         title: 'Javascript',
         Image: Javascript
      },
      {
         title: 'React',
         Image: ReactIcon
      },
      {
         title: 'firebase',
         Image: firebaseIcon
      },
      {
         title: 'React Native',
         Image: ReactNativeIcon
      },
      {
         title: 'SDK Expo',
         Image: ExpoIcon
      },
      {
         title: 'Tauri',
         Image: TauriIcon
      },
      {
         title: 'Git',
         Image: GitIcon
      }
   ]

   return (
      <main className={skillStyle.container}>
         <Background />
         <Menu />

      <section className={skillStyle.body}>
         
         <span className={skillStyle.text}>
               <Typewriter
                  onInit={(typewriter) => {
                     typewriter.typeString("My Skills")
                        .pauseFor(2500)
                        //.deleteAll()
                        .start();
                  }}
               />
         </span>
         <section className={skillStyle.bodyCard} >
            {data.map((list, index) => {
               return (
                  <article className={`${skillStyle.card} ${skillStyle.animate}`} key={index}>
                     <img src={list.Image} alt={`Imagen-${list.title}`} className={skillStyle.Image} />
                     <span className={skillStyle.imageText}>{list.title}</span>
                  </article>
               )
            })}

         </section>

         </section>
      </main>
   )
}