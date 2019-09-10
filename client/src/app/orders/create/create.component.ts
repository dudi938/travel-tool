import { Component, OnInit } from '@angular/core';
import { Order }    from '../../models/order';
import { DatePipe } from '@angular/common'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[DatePipe]
})


export class CreateComponent {


  model = new Order('David gershtenkoren', 'dudi938', 'dudi938@gmail.com');

  trace: string = "";
  today: number = Date.now();
  today1: number = Date.now();
  


  constructor(public datepipe: DatePipe, private http: HttpClient){

    this.writeLog('init...')
  }

  
  writeLog(data: string){
    this.trace = `${this.datepipe.transform( this.today, 'M/d/yy, h:mm:ss')} : ${ data }`;
    console.log(this.trace)
  }

  onSubmit() { 
    this.writeLog('Data recived..')


    console.log('Before request')
    let res = this.http.get('http://localhost:5000/users', {responseType: 'text'})
    res.subscribe((res) => {
      console.log(res)
    })

  }

}


