import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuBarComponent } from "./side-menu-bar/side-menu-bar.component";
import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    ScrollPanelModule,
    RouterOutlet, 
    SideMenuBarComponent,
    ButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UMS_UI';
}
