import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  valorAtual:string ="";
  valorSalvo :string="";
  isMouseOver: boolean =false;
  cont:number =0;
  valorBusca:string="";

  url:string = 'https://www.facebook.com/capoeiravadiando';
  
  urlDaImagem:string = 'http://lorempixel.com/400/200/nature/';

  constructor() { }

  getUrl(){
    return 'https://www.facebook.com/capoeiravadiando';
  }
  botaoClidado(){
    this.valorBusca = "http://www.google.com.br/search?hl=pt-BR&source=hp&q="+this.valorAtual;
    window.location.replace(this.valorBusca);
  }

  salvarValor(valor){
    this.valorSalvo = valor;

  }
  onkeyUp(evento:KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  

  }
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
    
  }
  ngOnInit() {
  }

}
