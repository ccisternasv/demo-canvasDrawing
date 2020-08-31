import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CdParams } from './cd-params';

@Component({
  selector: 'app-cd-params',
  templateUrl: './cd-params.component.html',
  styleUrls: ['./cd-params.component.css']
})
export class CdParamsComponent implements OnInit {

  @Output()
  private params:EventEmitter<CdParams>;
  
  private cdParams:CdParams;

  constructor() { 
    this.params = new EventEmitter();
    this.cdParams = new CdParams();
    console.log(this.cdParams);
  }

  ngOnInit() {
  }

  public create(){
    this.params.emit(this.cdParams);
  }
  public play(){}
  public pause(){}
  public reset(){}
}
