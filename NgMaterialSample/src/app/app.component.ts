import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { GridListOneComponent } from './components/grid-list-one/grid-list-one.component';
import { GridListTwoComponent } from './components/grid-list-two/grid-list-two.component';

@Component({
    selector: 'app-root',
    imports: [
      RouterOutlet,
      MatButtonModule,
      MatIconModule,
      MatListModule,
      MatSidenavModule,
      MatToolbarModule,
      GridListOneComponent,
      GridListTwoComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NgMaterialSample';
}
