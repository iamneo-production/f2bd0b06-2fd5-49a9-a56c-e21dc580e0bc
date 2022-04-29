import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/services/details.service';

@Component({
  selector: 'app-add-ground',
  templateUrl: './add-ground.component.html',
  styleUrls: ['./add-ground.component.css']
})
export class AddGroundComponent implements OnInit {

  constructor(private service:DetailsService) { }
  Data:any;

  ngOnInit(): void {
    this.Data = this.service.Details;
  }

}
