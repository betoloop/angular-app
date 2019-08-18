import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import Product from '../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, OnDestroy {
  product: Product;
  updateSubs: Subscription;
  constructor(
    private route: ActivatedRoute, //para ver el estado de la ruta
    private router: Router,
    private productService: ProductsService
  ) { }

  ngOnInit() {
    const { id } = this.route.snapshot.params;
    this.productService.getProduct(+id).subscribe((product: Product) => {
      this.product = product;
      console.log(product);
    })
  }
  onSubmit(product: Product) {
    product.id = this.product.id;
    this.updateSubs = this.productService.updateProduct(product).subscribe((product: Product) => {
      this.router.navigate(['/products']);
    })
  }
  ngOnDestroy(): void {
    if (this.updateSubs) {
      this.updateSubs.unsubscribe();
    }
  }
}
