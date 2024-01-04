import { Component, Input } from '@angular/core';
import { Project } from "src/models/project.model";

@Component({
  selector: 'app-project',
  template: `
  <div class="card project-card">
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-96x96 frame">
            <img src="{{project.imageUrl}}" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <a href={{project.githubUrl}} class="title is-4 project-link">
            {{project.title}}
          </a>
          <p>
          {{project.description}}
          </p>
        </div>
      </div>

      <div class="tags">
        <div *ngFor="let tag of project.tags" class="tag-bubble">
            {{ tag }}
        </div>
      </div>
    </div>
  </div>

  `,
  styles: [
  `
  .frame img {
    border: 2px solid #ddd;
    border-radius: 10px;
  }
  .project-link:hover {
    color: #485fc7;
  }
  .project-card {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 15px;
  }

  /* Larger screens */
  @media (min-width: 768px) {
    .project-card {
      max-width: 50%;
    }
  }
  .media-content {
    display: block;
    text-align: left;
    padding-left: 10px;
  }
  .tags {
    justify-content: center;
    display: flex;
  }
  .tag-bubble {
    display: inline-block;
    padding: 5px 10px;
    margin-left: 3px;
    margin-right: 3px;
    color: white;
    background-color: #485fc7;
    border-radius: 15px;
  }
  `
  ]
})
export class ProjectComponent {
  @Input() project!: Project;
}
