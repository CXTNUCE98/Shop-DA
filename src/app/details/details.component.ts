import { Component, OnInit } from '@angular/core';
import { Products } from "../modal/products";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public products: Products[] = [];
  constructor() { }

  ngOnInit(): void {
    //@ts-ignore
   this.products = JSON.parse(sessionStorage.getItem('products'))
   if(this.products.length){
     console.log(this.products)
    //  this.products.forEach(p => {
    //    p.Tong = p.price * p.picked;
    //    this.tongtien += p.Tong
    //  })
   }
  }
  
}
