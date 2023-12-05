import { Component } from '@angular/core';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-projects',
  template: `
    <section class="hero is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
        <p class="title">
          Coming Soon...
        </p>
        <div>
          <app-project></app-project>
        </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .subtitle span {
      display: block;
    }
  `
  ]
})
export class ProjectsComponent {

}
