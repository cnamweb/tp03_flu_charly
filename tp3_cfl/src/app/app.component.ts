import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoutiqueComponent],
  providers: [ApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp3_cfl';
}
