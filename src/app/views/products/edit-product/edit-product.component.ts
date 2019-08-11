import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import Product from '../product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: Product;  

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
    ) { }

  ngOnInit() {
    const { id } = this.route.snapshot.params;
    //console.log(id);
    this.productService.getProduct(+id).subscribe((product: Product)=>{
      this.product = product;
   });

    console.log(this.product);
  }

  onSubmit(parametro) {
    console.log(parametro);
  }

}
