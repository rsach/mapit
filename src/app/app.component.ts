import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    zoom:number = 10;
    lat:number = 42.858217;
    lng:number = -70.929990;

  markerForm:FormGroup;


   constructor(private fb:FormBuilder){
      this.markerForm = this.fb.group({
        name: ['',Validators.required],
        lat: ['',Validators.required],
        lng: ['',Validators.required],
        draggable: [false]
      });
  }



    markers:marker [] =[
      {
        name:'Company one',
        lat: 42.825588,
        lng: -71.018029,
        draggable: true

      },
      {
        name:'Company two',
        lat: 42.868164,
        lng: -71.889071,
        draggable: true

      },
      {
        name:'Company three',
        lat: 42.858279,
        lng: -71.930498,
        draggable: true

      }
    ];


  clickedMarker(marker:marker,i:number){
    console.log(marker,i)


  }


  mapClicked($event){
    var marker = {
      name: 'untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    }

    this.markers.push(marker);

  }

  markerDragEnd(marker:marker,$event){
    console.log(marker,$event)
  }



  submitForm(){
    var draggable:boolean = (this.markerForm.value.draggable ==='True')? true:false;
    var marker = {
      name: this.markerForm.value.name,
      lat: this.markerForm.value.lat,
      lng: this.markerForm.value.lng,
      draggable: draggable

    }

    console.log(marker);

    this.markers.push(marker);
  }



}



interface  marker{
  name?:string;
  lat:number;
  lng:number;
  draggable:boolean;
}
