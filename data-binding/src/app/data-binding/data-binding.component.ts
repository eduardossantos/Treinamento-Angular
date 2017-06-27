import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url:string = 'https://www.facebook.com/capoeiravadiando';

  
  urlDaImagem:string = 'http://lorempixel.com/400/200/nature/';

  constructor() { }

  getUrl(){
    return 'https://www.facebook.com/capoeiravadiando';
  }

  ngOnInit() {
  }

}
