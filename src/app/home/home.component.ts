import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-bold is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
        <p class="title">
          Alaric Li
        </p>
        <p class="subtitle">
          <span>business + cs @ UBC</span>
          <span>prev: SAP</span>
        </p>
        <app-social-icons></app-social-icons>
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
export class HomeComponent {

}
