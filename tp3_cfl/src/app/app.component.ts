import { RouterOutlet } from '@angular/router';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ApiService } from './api.service';
import { OldBoutiqueComponent } from './old-boutique/old-boutique.component';

import { Component, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoutiqueComponent, OldBoutiqueComponent],
  providers: [ApiService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'tp3_cfl';

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    const divider = document.querySelector('.divider') as HTMLElement;
    const leftPane = document.querySelector('.left-pane') as HTMLElement;

    let isResizing = false;

    const onMouseMove = (event: MouseEvent) => {
      if (!isResizing) return;
      leftPane.style.flex = `0 0 ${event.clientX - divider.offsetWidth / 2}px`;
    };

    const onMouseUp = () => {
      isResizing = false;
      this.renderer.removeClass(document.body, 'resizing');
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    divider.addEventListener('mousedown', () => {
      isResizing = true;
      this.renderer.addClass(document.body, 'resizing');
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  }
}