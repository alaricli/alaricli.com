import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar is-fixed-top custom-header" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a role="button" class="navbar-burger burger" (click)="toggleNavbar()" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" routerLink="/home">Home</a>
          <a class="navbar-item" routerLink="/projects">Projects</a>
          <a class="navbar-item" routerLink="/blog">Blog</a>
        </div>

        <div class="navbar-end">
          <a class="navbar-item" href="https://drive.google.com/file/d/1W_Lpz3W5KBd5UJkbq76ja9_E5T7s0Ec-/view?usp=sharing">Resume</a>
          <a class="navbar-item" href="mailto:alaricli@outlook.com?subject=Hello%20Alaric&body=Hello%20Alaric," target="_blank" rel="noopener noreferrer"><strong>Contact</strong></a>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `.custom-header {
      background-color: hsl(0, 0%, 98%);
    }
    @media (max-width: 1023px) {
      .navbar-menu {
        background-color: hsl(0, 0%, 98%);
      }
    }`
  ]
})
export class HeaderComponent {
  isNavbarOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
    const navbarMenu = document.getElementById('navbarBasicExample');
    const navbarBurger = document.querySelector('.navbar-burger');
    if (navbarMenu && navbarBurger) {
      navbarMenu.classList.toggle('is-active');
      navbarBurger.classList.toggle('is-active');
    }
  }
}
