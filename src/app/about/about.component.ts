import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section class="hero is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
        <p class="title">
          Coming Soon...
        </p>
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
export class AboutComponent {

}
