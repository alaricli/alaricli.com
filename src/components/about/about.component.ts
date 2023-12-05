import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section class="hero is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
        <p class="title">
          About Me
        </p>
        <p class="subtitle">
          Hello, I'm Alaric Li.
        </p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .subtitle {
    }
  `
  ]
})
export class AboutComponent {

}
