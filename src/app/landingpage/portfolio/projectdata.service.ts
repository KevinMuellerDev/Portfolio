import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectdataService {
  projects = [
    {
      title: "Join",
      stack: "JavaScript | HTML | CSS",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      image: "/assets/img/joinphoto.png",
      liveUrl: "http://join.kevin-mueller-dev.de/",
      githubUrl: "https://github.com/KevinMuellerDev/join-Kanban"
    },
    {
      title: "Halloween Madness",
      stack: "JavaScript | HTML | CSS",
      description: "A simple Jump-and-Run game based on an object-oriented approach. Help Maddy to find coins and arcane orbs to fight against the zombies.",
      image: "/assets/img/joinphoto.png",
      liveUrl: "http://halloween-madness.kevin-mueller-dev.de/",
      githubUrl: "https://github.com/KevinMuellerDev/halloween-madness"

    },
    {
      title: "test",
      stack: "TypeScript | HTML | CSS",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.",
      image: "/assets/img/joinphoto.png",
      liveUrl: "http://halloween-madness.kevin-mueller-dev.de/",
      githubUrl: "https://github.com/KevinMuellerDev/halloween-madness"
    }
  ]
  constructor() { }
}
