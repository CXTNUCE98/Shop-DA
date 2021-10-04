import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Shop-DA';
  
  ngOnInit(){
    localStorage.setItem('k', 'khang')
    // console.log(JSON.parse(localStorage.getItem('k')))
  }
}
