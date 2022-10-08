import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  urlImage!: string;

  constructor() { }

  ngOnInit(): void {
    this.urlImage="http://pm1.narvii.com/7608/459277005d596d40913c65574a04eb83154f2825r1-1200-675v2_uhq.jpg"
  }

}
