import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { PrimaryButtonComponent } from "../../../componets/primary-button/primary-button.component";

@Component({
  selector: 'app-order-summary',
  imports: [PrimaryButtonComponent],
  template: `
    <div class=" bg-slate-100 shadow-md rounded-lg border-gray-200 p-6 flex flex-col">
      <h2 class="text-2xl font-bold">Order Summary</h2>
      <div class="flex flex-col gap-4">
         <div class="flex gap-4">
          <span class="text-md font-bold">TOTAL</span>
          <span class="text-large font-bold">{{'R' + total()}}</span>
         </div>
         <app-primary-button label="PROCEED TO CHECKOUT" class="mt-3"/>
        </div>
    </div>
   
  `,
  styles: ``
})
export class OrderSummaryComponent {

    cartService = inject(CartService);

    total = computed(() => {
      let total = 0;
      for (const item of this.cartService.cart()) {
        total += item.price;
      }
      return total;
    });

}
