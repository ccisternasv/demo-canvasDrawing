import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  private _viewLoaded: boolean;
  private _drawing: boolean;

  constructor() { 
    this.viewLoaded =false;
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
  public get viewLoaded(): boolean {
    return this._viewLoaded;
  }
  public set viewLoaded(value: boolean) {
    this._viewLoaded = value;
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.viewLoaded = true;
   console.log(this.cdMainCanvas);
    new CtxAnimation(this.cdMainCanvas, new CdParams()).draw(null, null);

  }



}
