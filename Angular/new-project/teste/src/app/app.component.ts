import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'teste';
  count = 0;
  text = ""
  nome : string = 'João'
    
  constructor () {

  }
  
  ngOnInit() {
    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10){
        clearInterval(interval)
      }
    }, 1000)
  }

  clicou() : void {
    console.log('Clicou em mim')
  }
  
}
