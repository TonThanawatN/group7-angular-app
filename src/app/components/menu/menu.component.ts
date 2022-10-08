import { Component, OnInit } from '@angular/core';
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faHouse , faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  name!:string;

  faYoutube = faYoutube
  faHouse = faHouse
  faCartShopping = faCartShopping

  constructor( private route: ActivatedRoute, ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }

}
