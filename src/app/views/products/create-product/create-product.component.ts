import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Product from '../product.model';
import { ProductsService } from '../shared/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})

export class CreateProductComponent implements OnInit {
  createSubs : Subscription;
  constructor(private productService: ProductsService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(product: Product){
    this.createSubs = this.productService.createProduct(product)
      .subscribe((product: Product) =>{
        this.router.navigate(['/products'])
      });
  }

  ngOnDestroy(){
    if(this.createSubs){
      this.createSubs.unsubscribe();
    }
  }
}
