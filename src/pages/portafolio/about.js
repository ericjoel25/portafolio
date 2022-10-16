import React from "react";
import aboutStyle from '../../components/styles/about.module.css';
import Menu from "../../components/menu/menu";
import Background from "../home/background";
import Typewriter from 'typewriter-effect';
import foto from '../../components/images/Eric2.webp'

export default function About() {
    return (
        <main className={aboutStyle.container}>
            <Background />
            <Menu />
            <section className={aboutStyle.body}>
                <article className={aboutStyle.article} >
                    <span className={aboutStyle.title} >
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString("Who Am I?")
                                    .pauseFor(2500)
                                    //.deleteAll()
                                    .start();
                            }}
                        />

                    </span>

                    <p className={aboutStyle.title2}>
                        I am a self-taught programmer, passionate about technology.<br/><br/>
                        Open to learn new technology.<br/><br/>
                        I am looking for a position where I can use my skills to solve problems with code.
                    </p>

                </article>

                <article className={aboutStyle.article2} >
                  <img src={foto} alt='home' className={aboutStyle.homeImg} />
          
                  <p className={aboutStyle.text}>
                     Eric Joel Marte
                  </p>
                   
                </article>

            </section>
        </main>
    )
}