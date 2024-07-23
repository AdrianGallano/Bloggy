import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/partials/header/header.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private route: Router) {
  }


  goToExplore() {
    this.route.navigate(['/explore']);
    
  }
}
