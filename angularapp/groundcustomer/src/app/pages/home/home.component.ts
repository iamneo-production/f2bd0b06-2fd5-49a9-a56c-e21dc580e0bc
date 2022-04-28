import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { NavbarService } from 'src/app/navbar.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:OrderDetailsService,public router:Router) { }
  foodData:any;
  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
    
  }

}
