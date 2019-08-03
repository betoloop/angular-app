import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NavComponent } from './components/common/nav/nav.component';
import { ProductsModule } from './views/products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
