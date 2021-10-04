import { Component, OnInit } from '@angular/core';
import { Products } from '../modal/products';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  products: Products[] = [
    {
      id: "1",
      name: "iPhone 12",
      price: 1604.97,
      image: "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-200x200.jpg",
      color: "#fff",
      picked: 0,
      rate: "4",
      Tong: 0,
      info: "Độ phân giải màn hình	1170 x 2532 pixels, Công nghệ màn hình	OLED, Hệ điều hành	iOS 14 Chipset	Apple A14 Bionic,   Dung lượng RAM	4 GB,       Bộ nhớ trong	64 GB, Camera sau	12 MP f/1.6 26mm  1.4µm dual pixel PDAF OIS  12 MP f/2.4 120˚ 13mm  1/3.6, Camera trước	12 MP f/2.2 23mm  1/3.6       SL 3D,       Dung lượng pin	Li-Ion sạc nhanh 20W, sạc không dây 15W USB Power Delivery 2.0,       Hãng sản xuất	Apple"

    },
    {
      id: "2",
      name: "iPhone 11",
      price: 1084.44,
      image: "https://www.xtmobile.vn/vnt_upload/product/08_2019/thumbs/600_iphone-11-pro-max-64gb-xtmobile.jpg",
      color: "#fff",
      picked: 0,
      rate: "4",
      Tong: 0,
      info: "Màn hình:	IPS LCD, 6.1, Liquid Retina Hệ điều hành:	iOS 14, Camera sau:	2 camera 12 MP, Camera trước:	12 MP, CPU:	Apple A13 Bionic 6 nhân, RAM:	4 GB, Bộ nhớ trong:	64 GB, Thẻ SIM:	1 Nano SIM & 1 eSIM, Hỗ trợ 4G,        Hãng sản xuất	Apple"
    },
    {
      id: "3",
      name: "iPhone X",
      price: 954.31,
      image: "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
      color: "#fff",
      picked: 0,
      rate: "4",
      Tong: 0,
      info: "Màn hình:	OLED, 5.8, Super Retina, Hệ điều hành:	iOS 12, Camera sau:	2 camera 12 MP, Camera trước:	7 MP, CPU:	Apple A11 Bionic 6 nhân, RAM:	3 GB, Bộ nhớ trong:	64 GB, Thẻ SIM:	1 Nano SIM, Dung lượng pin:	2716 mAh, có sạc nhanh,     Hãng sản xuất	Apple"
    },
    {
      id: "4",
      name: "iPhone 8",
      price: 607.29,
      image: "https://m.media-amazon.com/images/I/51m095zShrL._AC_SX466_.jpg",
      color: "#fff",
      picked: 0,
      rate: "4",
      Tong: 0,
      info: "Màn hình:	LED-backlit IPS LCD, 4.7, Retina HD, Hệ điều hành:	iOS 14, Camera sau:	12 MP, Camera trước:	7 MP, CPU:	Apple A11 Bionic 6 nhân, RAM:	2 GB, Bộ nhớ trong:	64 GB, Thẻ SIM:	1 Nano SIM, Hỗ trợ 4G, Dung lượng pin:	1821 mAh, có sạc nhanh,       Hãng sản xuất	Apple"
    },
    {
      id: "5",
      name: "iPhone 7",
      price: 390.40,
      image: "https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-600x600-1-600x600.jpg",
      color: "#fff",
      picked: 0,
      rate: "4",
      Tong: 0,
      info: "Màn hình:	LED-backlit IPS LCD, 4.7, Retina HD, Hệ điều hành:	iOS 14, Camera sau:	12 MP, Camera trước:	7 MP, CPU:	Apple A10 Fusion 4 nhân, RAM:	2 GB, Bộ nhớ trong:	32 GB, Thẻ SIM:	1 Nano SIM, Hỗ trợ 4G Dung lượng pin:	1960 mAh,       Hãng sản xuất	Apple"
    },
    {
      id: "6",
      name: "iPhone 6",
      price: 173.51,
      image: "https://bizweb.dktcdn.net/100/090/634/products/600-ip6-gold-800x800-2-0c908a99-68b2-4bdf-b17a-61245fc28bd1.jpg?v=1552407661380",
      color: "#fff",
      picked: 0,
      rate: "4",
      Tong: 0,
      info: "Màn hình:	LED-backlit IPS LCD, 4.7, Retina HD, Hệ điều hành:	iOS 12, Camera sau:	8 MP, Camera trước:	1.2 MP, CPU:	Apple A8 2 nhân, RAM:	1 GB, Bộ nhớ trong:	32 GB, Thẻ SIM:	1 Nano SIM, Hỗ trợ 4G, Dung lượng pin:	1810 mAh,       Hãng sản xuất	Apple"
    },
  ]

  listpicked: Products[] = [];

  spicked: Products[] = [];

  //@ts-ignore
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    
        console.log(this.products)

  }

  
  
  //@ts-ignore
  add(id){
    this.products.forEach(p => {
      
      if(p.id === id){
        
        p.picked += 1;
      }
      console.log(p)
    })
  }
  //@ts-ignore
  xoa(id){
    this.products.forEach(p => {
      if(p.id === id){
        if(p.picked<1){
          alert('Sản phẩm không được nhỏ hơn 1!!')
        }
        else p.picked -= 1;
      }
      console.log(p)
    })
  }
//@ts-ignore
  buy(id){
    this.products.forEach(p => {
      if(p.id === id && p.picked > 0){
        this.listpicked.push(p)
        
      }
    })
    sessionStorage.setItem('products', JSON.stringify(this.listpicked));
    this.modalRef.hide();
  }

  
  //@ts-ignore
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
