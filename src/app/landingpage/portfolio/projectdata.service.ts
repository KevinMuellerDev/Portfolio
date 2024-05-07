import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectdataService {
  projects = [
    {
      title: "Join",
      stack: "JavaScript | HTML | CSS",
      description: "join_desc",
      image: "/assets/img/joinphoto.png",
      liveUrl: "http://join.kevin-mueller-dev.de/",
      githubUrl: "https://github.com/KevinMuellerDev/join-Kanban"
    },
    {
      title: "Halloween Madness",
      stack: "JavaScript | HTML | CSS",
      description: "halloween_desc",
      image: "/assets/img/halloweenphoto.png",
      liveUrl: "http://halloween-madness.kevin-mueller-dev.de/",
      githubUrl: "https://github.com/KevinMuellerDev/halloween-madness"

    }
  ]
  constructor() { }
}
