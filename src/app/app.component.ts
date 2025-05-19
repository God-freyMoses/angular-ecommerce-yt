import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './componets/header/header.component';
import { ProductsListComponent } from "./pages/products-list/products-list.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ProductsListComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <app-header/>
    <app-products-list/>
    
    

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-ecommerce-yt';
}
