import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectdataService {
  projects = [
    {
      title: "Join",
      stack: "JavaScript | HTML | CSS",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories."
    },
    {
      title: "Halloween Madness",
      stack: "JavaScript | HTML | CSS",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories."
    },
    {
      title: "test",
      stack: "TypeScript | HTML | CSS",
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories."
    }
  ]
  constructor() { }
}
