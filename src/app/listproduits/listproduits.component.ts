import { Component } from '@angular/core';
import { Products } from '../products/products';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-listproduits',
  templateUrl: './listproduits.component.html',
  styleUrls: ['./listproduits.component.css']
})
export class ListproduitsComponent {
  produits:Products[]=[]
  constructor(private prserv:ProductsService){}
  ngOnInit():void{
    this.prserv.getallArti
    cles().subscribe((data:Products[])=>
    this.produits=data)
  }

}
