import { Component, OnInit } from '@angular/core';
import Product from '../product.model';
import { SortPipe } from '../shared/pipes/sort.pipe';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  allProducts: Product[] = [
    {
      id: 101,
      name: 'Celular 1'
    },
    {
      id: 102,
      name: 'Laptop 1'
    },
    {
      id: 200,
      name: 'Carrito de juguete'
    }
  ];

  constructor(private sortPipe: SortPipe) { }

  ngOnInit() {
  }

  onSort(value: string){
    this.sortPipe.transform(
      this.allProducts,
      value
    );
  }

  onRemove(id: number){    
    this.sortPipe
    this.allProducts = this.allProducts.filter(prod => prod.id !== id);
  }
}
