import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectdataService {
  projects = [
    {
      title: "DA Bubble",
      stack: "Angular | Typescript | SASS | Firebase ",
      description: "dabubble_desc",
      image: "/assets/img/halloweenphoto.png",
      liveUrl: "http://dabubble.kevin-mueller-dev.de/",
      githubUrl: "https://github.com/KevinMuellerDev/da-bubble"

    },
    {
      title: "Halloween Madness",
      stack: "JavaScript | HTML | CSS",
      description: "halloween_desc",
      image: "/assets/img/halloweenphoto.png",
      liveUrl: "http://halloween-madness.kevin-mueller-dev.de/",
      githubUrl: "https://github.com/KevinMuellerDev/halloween-madness"

    },
    {
      title: "Join",
      stack: "JavaScript | HTML | CSS",
      description: "join_desc",
      image: "/assets/img/joinphoto.png",
      liveUrl: "http://join.kevin-mueller-dev.de/",
      githubUrl: "https://github.com/KevinMuellerDev/join-Kanban"
    }

  ]
  constructor() { }
}
