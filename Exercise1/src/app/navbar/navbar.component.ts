import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    navTitle: string;
    donation: number = 0;
  constructor() {
    this.navTitle = "Exercise 1 "
   }
   donationCounter(){
    this.donation = this.donation + 10;
  }

  ngOnInit(): void {
  }

}
