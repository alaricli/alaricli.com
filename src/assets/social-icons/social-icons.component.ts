import { Component } from '@angular/core';

@Component({
  selector: 'app-social-icons',
  template: `
    <div class="social-icons">
      <a href="https://www.linkedin.com/in/andyli99/" target="_blank" class="icon-link">
        <i class="fa-brands fa-linkedin icon-lg"></i>
      </a>
      <a href="https://github.com/alaricli" target="_blank" class="icon-link">
        <i class="fa-brands fa-github icon-lg"></i>
      </a>
      <a href="https://twitter.com/alaric__li" target="_blank" class="icon-link">
        <i class="fab fa-twitter icon-lg"></i>
      </a>
      <a href="https://www.instagram.com/andyli51/" target="_blank" class="icon-link">
        <i class="fab fa-instagram icon-lg"></i>
      </a>
    </div>
  `,
  styles: [`
    .icon-lg {
      font-size: 1.5em;
    }
    .icon-link {
      margin-left: 5px;
      margin-right: 5px;
    }
  `]
})
export class SocialIconsComponent {

}
