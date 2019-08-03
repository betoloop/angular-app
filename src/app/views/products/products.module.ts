import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './list-product/list-product.component';
import { HoverDirective } from './shared/directives/hover.directive';
import { ShortTextPipe } from './shared/pipes/short-text.pipe';
import { SortPipe } from './shared/pipes/sort.pipe';

@NgModule({
  declarations: [
    ListProductComponent,
    HoverDirective,
    ShortTextPipe
  ],
  imports: [
    CommonModule    
  ],
  exports :[
    ListProductComponent
  ],
  providers: [
    SortPipe
  ]
})
export class ProductsModule { }
