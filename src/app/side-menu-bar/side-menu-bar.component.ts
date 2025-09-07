import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-side-menu-bar',
  imports: [MenubarModule, BadgeModule,RouterLink, RouterLinkActive, AvatarModule, CommonModule, InputTextModule
  ],
  templateUrl: './side-menu-bar.component.html',
  styleUrl: './side-menu-bar.component.css'
})
export class SideMenuBarComponent {
  items = [
            {
                label: 'Home',
                icon: 'pi pi-home',
                link: '/home'
            },
            {
                label: 'Books',
                icon: 'pi pi-search',
                link: '/items'
            },
            {
              label: 'Metrics',
              icon: 'pi pi-chart',
              link: 'metrics'
            }
        ];
}