import React from "react";
import Menu from "../../components/menu/menu";
import contactStyles from "../../components/styles/contact.module.css";

export default function Contact(){
    return(
       <main className={contactStyles.container}>
          <Menu />
       </main>
    )
}