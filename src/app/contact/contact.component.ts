import { Component } from '@angular/core';
import { Prog1Component } from "../prog1/prog1.component";
import {MatTooltipModule} from '@angular/material/tooltip';

type ListeContactItem = {
  img: string;
  text: string;
  link: string;
  alt: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatTooltipModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  bgImgUrl = "./assets/img/background.jpg";
  bgImgUrl2 = "./assets/img/profil.png";
  bgImgUrl3 = "./assets/img/linkedin.png";
  bgImgUrl4 = "./assets/img/mail.png";
  bgImgUrl5 = "./assets/img/background2.mp4";
  dianeUrl = "./assets/img/mdp.jpg";
  cv = "./assets/img/CV_PAQUELET_Etienne.pdf";
  CV = "./assets/img/cv.png";
  dianeArray: string[] = [];

  listeContact: ListeContactItem[] = [
    {
      img: this.bgImgUrl3,
      link: "https://www.linkedin.com/in/etienne-paquelet/",
      text: "Etienne PAQUELET",
      alt: "Photo menant à mon compte Linkedin",
    },
    {
      img: this.bgImgUrl4,
      link: "ailto:etienne.paquelet.01@gmail.com",
      text: "etienne.paquelet.01@gmail.com",
      alt: "Photo boite mail",
    },
  ];

  constructor() {
    window.addEventListener("keydown", (ev) => {
      const elmt = document.getElementById("imgProfil") as HTMLImageElement;
      if (!ev || !elmt) return;
      if (this.dianeArray.length == 7) { this.dianeArray.shift(); }
      this.dianeArray.push(ev.key.toLowerCase());
      if (this.dianeArray.join("") == "etienne") {
        elmt.src = this.dianeUrl;
        elmt.alt = "Image easter egg";
      } else {
        elmt.src = this.bgImgUrl2;
        elmt.alt = "Image de profil";
      }
    });
  }

  makeImgUrl(str: string): string {
    return "url('" + str + "')"
  }

  // redirection1() {
  //   document.location.href = "https://www.linkedin.com/in/etienne-paquelet/"
  // }
}
