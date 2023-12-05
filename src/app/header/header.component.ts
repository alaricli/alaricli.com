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

        <!-- About page not necessarily atm -->
        <!-- <a class="navbar-item" routerLink="/about">
          About
        </a> -->

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
          <a 
            class="button"
            href="https://drive.google.com/file/d/1JiSXdsosY6YDDvIFjEWdbxa0FGPa2_ZA/view?usp=sharing"
          >
            Resume
          </a>
          <!-- Replace example@example.com with email address in production -->
          <a 
            class="button"
            href="mailto:example@example.com?subject=Hello%20Alaric&body=Hello%20Alaric,"
            target="_blank"
            rel="noopener noreferrer"
          >
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
