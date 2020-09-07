import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { CtxAnimation } from '../ctx-animation';
import { CdParams } from 'src/app/params/cd-params/cd-params';

@Component({
  selector: 'app-cd-canvas',
  templateUrl: './cd-canvas.component.html',
  styleUrls: ['./cd-canvas.component.css']
})
export class CdCanvasComponent implements OnInit {

  @ViewChild('cdMainCanvas', { static: true })
  private _cdMainCanvas:ElementRef<HTMLCanvasElement>;
  private _drawing: boolean;
  private _ctxAnimation: CtxAnimation;
  private _cdParams: CdParams;
  @Output()
  private ctx: EventEmitter<CtxAnimation>;

  constructor() { 
    this.ctx = new EventEmitter();
  }

  public get drawing(): boolean {
    return this._drawing;
  }
  public set drawing(value: boolean) {
    this._drawing = value;
  }
  public get cdMainCanvas() {
    return this._cdMainCanvas;
  }
  public set cdMainCanvas(value) {
    this._cdMainCanvas = value;
  }
  public get ctxAnimation(): CtxAnimation {
    return this._ctxAnimation;
  }
  public set ctxAnimation(value: CtxAnimation) {
    this._ctxAnimation = value;
  }
  public get cdParams(): CdParams {
    return this._cdParams;
  }
  @Input("paramSettings")
  public set cdParams(value: CdParams) {
    this._cdParams = value;
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.ctxAnimation = new CtxAnimation(this.cdMainCanvas, this._cdParams);
    this.ctx.emit(this.ctxAnimation);
  }
}
