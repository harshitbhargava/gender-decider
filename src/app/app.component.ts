import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name;
  gender : any;
  url= 'https://api.genderize.io/?name='

constructor(private http : HttpClient){ }
getdata(){

this.http.get(this.url+this.name).subscribe((data : any)=>{
  this.gender=data.gender;
  console.log(data);
})
}
}