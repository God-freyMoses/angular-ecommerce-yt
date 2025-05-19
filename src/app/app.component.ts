import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './componets/header/header.component';
import { ProductsListComponent } from "./pages/products-list/products-list.component";
import { CartComponent } from './pages/cart/cart.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>
    <app-header/>

    
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-ecommerce-yt';
}
