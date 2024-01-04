import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer is-fixed-bottom custom-footer">
      <div class="container content has-text-centered">
        <p>
          The source code is <a href="http://opensource.org/licenses/mit-license.php">MIT</a> licensed.
        </p>
      </div>
    </footer>
  `,
  styles: [
    `.custom-footer {
      padding: 2rem 1.5rem 2rem;
    }`
  ]
})
export class FooterComponent {

}
