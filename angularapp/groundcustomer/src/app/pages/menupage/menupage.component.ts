import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerUser } from 'src/app/customer-user';
import { CustomerService } from 'src/app/customer.service';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {
  customeruser= new CustomerUser();
  constructor(private param:ActivatedRoute,private service:OrderDetailsService,private _service:CustomerService,private _router : Router) { }
  getMenuId:any;
  menuData:any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.menuData =  this.service.foodDetails.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.menuData,'menudata>>');
        
    }
    
  }
  // customerUser(){
  //   this._service.customerUserFromRemote(this.customeruser).subscribe(
  //     data =>{
  //       console.log("response received");
  //       // this.msg="Registration successful";
  //       this._router.navigate(['/popup'])
  //     },
  //     error => alert("sorry user not register")
  //         )
  //       }
  customerUser(){
    this._service.customerUserFromRemote(this.customeruser).subscribe(
data =>{
  console.log("response received");
  // this.msg="Registration successful";
  this._router.navigate(['/popup'])
},
error => alert("sorry user not register")
    )
  }
}


