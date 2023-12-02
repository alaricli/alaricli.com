import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarLinks">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarLinks" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" routerLink="/home">
          Home
        </a>

        <a class="navbar-item" routerLink="/about">
          About
        </a>

        <a class="navbar-item" routerLink="/projects">
          Projects
        </a>

        <a class="navbar-item" routerLink="/blog">
          Blog
        </a>
      </div>

    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button" routerLink="/contact">
            <strong>Contact</strong>
          </a>
        </div>
      </div>
    </div>
    </nav>
  `,
  styles: []
})
export class HeaderComponent {

}
