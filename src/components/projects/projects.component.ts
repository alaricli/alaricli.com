import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/services/project.service';
import { Project } from 'src/models/project.model';

@Component({
  selector: 'app-projects',
  template: `
    <section class="hero is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
        <p class="title">
          Projects
        </p>
        <div *ngFor="let project of projects">
          <app-project [project]="project"></app-project>
        </div>
        </div>
      </div>
    </section>
  `,
  styles: [
  `
  .title {
    font-size: 36px;
  }
  `
  ]
})
export class ProjectsComponent {
  projects!: Project[];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }
}
