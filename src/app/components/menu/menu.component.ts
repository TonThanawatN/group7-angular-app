import { Component, OnInit } from '@angular/core';
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faHouse , faCartShopping } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  

  faYoutube = faYoutube
  faHouse = faHouse
  faCartShopping = faCartShopping

  constructor() { }

  ngOnInit(): void {
    
  }

}
