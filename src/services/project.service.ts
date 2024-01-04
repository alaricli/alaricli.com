import { Project } from "src/models/project.model";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
    private projects: Project[] = [
      {
        id: 1,
        title: 'www.alaricli.com',
        description: 'Personal website for sharing more about myself hosted on AWS.',
        imageUrl: 'assets/me.png',
        githubUrl: 'https://github.com/alaricli/alaricli.com',
        tags: ['Angular', 'Typescript', 'AWS']
      },
      {
        id: 2,
        title: 'www.recharged.icu',
        description: 'Web app for my pre-owned electronics business. Work in progress.',
        imageUrl: 'assets/recharged.png',
        githubUrl: 'https://github.com/alaricli/recharged.icu',
        tags: []
      },
      {
        id: 3,
        title: 'UBC Insight',
        description: 'Full-stack application for querying specific information on previous UBC courses. Unfortunately, unable to share repository in alignment with academic policies.',
        imageUrl: 'assets/ubc.png',
        githubUrl: 'https://github.com/alaricli',
        tags: ['Typescript', 'React', 'Express', 'Postman']
      },
      {
        id: 4,
        title: 'Showdown Contributions',
        description: 'Contributions I made to the Pokemon Showdown battle simulator open-source project.',
        imageUrl: 'assets/showdown.png',
        githubUrl: 'https://github.com/alaricli/showdown',
        tags: ['Typescript']
      },
    ];
  
    getProjects(): Project[] {
      return this.projects;
    }
  }
  