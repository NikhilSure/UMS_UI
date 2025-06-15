import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuBarComponent } from "./side-menu-bar/side-menu-bar.component";

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    RouterOutlet, 
    SideMenuBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'UMS_UI';
}
