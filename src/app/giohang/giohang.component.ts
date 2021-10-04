import { Component, OnInit } from '@angular/core';
import { Products } from "../modal/products";

@Component({
  selector: 'app-giohang',
  templateUrl: './giohang.component.html',
  styleUrls: ['./giohang.component.css']
})


export class GiohangComponent implements OnInit {
  public products: Products[] = [];
  //@ts-ignore
  public tongtien: number = 0;
  constructor() { }

  ngOnInit(): void {
    //@ts-ignore
   this.products = JSON.parse(sessionStorage.getItem('products'))
    if(this.products.length){
      console.log(this.products)
      this.products.forEach(p => {
        p.Tong = p.price * p.picked;
        Math.round(p.Tong * 1000000000) / 100000000000;
        this.tongtien += p.Tong
      })
    }

   
  }

   //@ts-ignore
   add(id){
    console.log('added')
  }
  //@ts-ignore
  save() {
    console.log('saved')
  }

  

}
