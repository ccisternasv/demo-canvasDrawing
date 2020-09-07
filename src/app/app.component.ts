import { Component } from '@angular/core';
import { CdParams } from './params/cd-params/cd-params';
import { CtxAnimation } from './canvas/ctx-animation';
import { CdElems } from './helpers/cd-elems';
import { Size } from './helpers/size';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'canvasDrawing';
  private _paramSettings: CdParams;
  private _drawer: CtxAnimation;
  private _cdElems: CdElems;
  private _ctx: CtxAnimation;


  constructor(){
    this._paramSettings = new CdParams();
  }
  public get paramSettings(): CdParams {
    return this._paramSettings;
  }
  public set paramSettings(value: CdParams) {
    this._paramSettings = value;
  }
  public get drawer(): CtxAnimation {
    return this._drawer;
  }
  public set drawer(value: CtxAnimation) {
    this._drawer = value;
  }
  public get cdElems(): CdElems {
    return this._cdElems;
  }
  public set cdElems(value: CdElems) {
    this._cdElems = value;
  }
  public get ctx(): CtxAnimation {
    return this._ctx;
  }
  public set ctx(value: CtxAnimation) {
    this._ctx = value;
  }
  public action(instr:string){
    console.log("Comp: "+JSON.stringify(instr));
    switch(instr){
      case "create":
        this.create();
        break;
      case "play":
        break;
      case "resume":
        break;
      case "reset":
        break;
      default:
        break;
    }

  }

  create(){
    this.cdElems = new CdElems(this.paramSettings, new Size(1000,200));
    console.log(this.cdElems);
    this.ctx.draw(this.cdElems.target, this.cdElems.arrElems);
  }

  createCenterPoint(){

  }

  play(){

  }

  ctxReady(ctx:CtxAnimation){
    this.ctx = ctx;
    console.log("ctx is ready to go", this.ctx);
  }

}
