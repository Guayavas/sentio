import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
        {
            label: 'Explorador de Datos',
            icon: 'pi pi-eye'
        },
        {
            label: 'Gráficos',
            icon: 'pi pi-chart-bar'
        },
        {
            label: 'Clasificador de Información',
            icon: 'pi pi-cog',
            styleClass: 'bg-green-500 text-white border-round',
            routerLink: '/home'
        },
        {
            label: 'Banco de Datos',
            icon: 'pi pi-database'
        }
    ];
  }
}
