import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

   
  
  foodDetails = [
    {
      id:1,
      foodName:"Yashwanth Grounds",
      foodDetails:"with all aminities, open 24 hrs",
      foodPrice:400,
      foodImg:"https://image.shutterstock.com/image-photo/seogwiposi-jejudo-island-south-korea-600w-1878790768.jpg"
    },
    {
      id:2,
      foodName:"Aravind Grounds",
      foodDetails:"with all aminities, open 24 hrs",
      foodPrice:400,
      foodImg:"https://www.gwsportsapp.in/media/ground-images/MC40NDYyOTcwMCAxNjQyMjMwMjgy.jpeg"
    },
    {
      id:3,
      foodName:"Dinesh Grounds",
      foodDetails:"with all aminities, open 24 hrsr",
      foodPrice:400,
      foodImg:"https://www.gwsportsapp.in/media/ground-images/MC41NTQ5MTQwMCAxNjM3NDc4OTQz.jpeg"
    },
    {
      id:4,
      foodName:"Reneetha grounds",
      foodDetails:"with all aminities, open 24 hrs",
      foodPrice:400,
      foodImg:"https://www.gwsportsapp.in/media/ground-images/MC41NjA2NjkwMCAxNjM3NDc5NzI4.jpeg"
    },
    {
      id:5,
      foodName:"Preethi Grounds",
      foodDetails:"with all aminities, open 24 hrs",
      foodPrice:400,
      foodImg:"https://www.gwsportsapp.in/media/ground-images/MC4zNzg3MjQwMCAxNTQyOTYzMDA4.jpeg"
    },
    {
      id:6,
      foodName:"Sowmya Grounds",
      foodDetails:"with all aminities, open 24 hrs",
      foodPrice:400,
      foodImg:"https://www.gwsportsapp.in/media/ground-images/MC44MTQxOTkwMCAxNjI3MzczOTE2.jpeg"
    }
  ]


  

}
