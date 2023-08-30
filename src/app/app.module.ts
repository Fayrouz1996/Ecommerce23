import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './products/index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsModules } from './products/products';
import { ViewComponent } from './products/view/view.component';
import { CreateComponent } from './products/create/create.component';
import { EditComponent } from './products/edit/edit.component';
import { ListproduitsComponent } from './listproduits/listproduits.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ViewComponent,
    CreateComponent,
    EditComponent,
    ListproduitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductsModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
