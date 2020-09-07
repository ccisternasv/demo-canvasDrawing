import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule,   } from '@angular/forms';
import { CdParams } from './cd-params';

@Component({
  selector: 'app-cd-params',
  templateUrl: './cd-params.component.html',
  styleUrls: ['./cd-params.component.css']
})
export class CdParamsComponent implements OnInit {

  @Output('action')
  private paramsAction: EventEmitter<string>;
  private _cdParams: CdParams;
  private _cdUIParams: FormGroup;


  constructor() {
    this.paramsAction = new EventEmitter();
  }

  public get cdUIParams(): FormGroup {
    return this._cdUIParams;
  }
  public set cdUIParams(value: FormGroup) {
    this._cdUIParams = value;
  }

  ngOnInit() {
  }

  public action(instr: string) {

    switch(instr){
      case "reset":
        this.cdParams.loadDefaultValues();
        this.updateUIfromParams();
      break;
      case "play":
      break;
      case "pause":
        break;
      case "resume":
        break;
      case "create":
        this.updateParamsFromUIForm();
          break;
      default:
        break;
    }

    this.paramsAction.emit(instr);
  }

  public get cdParams(): CdParams {
    return this._cdParams;
  }

  @Input('paramSettings')
  public set cdParams(value: CdParams) {
    this._cdParams = value;
    this.createGroup();
  }

  public createGroup() {
    this.cdUIParams = new FormGroup({
      nbrOfPoints: new FormControl(this.cdParams.nbrOfPoints),
      targetPoint: new FormControl(this.cdParams.targetPoint),
      rndSpeed: new FormControl(this.cdParams.speedRnd),
      minSpeed: new FormControl(this.cdParams.minSpeed),
      maxSpeed: new FormControl(this.cdParams.maxSpeed),
      speed: new FormControl(this.cdParams.speedValue),
      blockShape: new FormControl(this.cdParams.blocksShape),
      bgImg: new FormControl(this.cdParams.bgImg),
      clearCanvas: new FormControl(this.cdParams.clearCanvasByFrame),
      startPoint: new FormControl(this.cdParams.startPoint)
    });
  }

  private updateParamsFromUIForm(){
    this.cdParams.nbrOfPoints = this.cdUIParams.get("nbrOfPoints").value;
    this.cdParams.targetPoint = this.cdUIParams.get("targetPoint").value;
    this.cdParams.speedRnd = this.cdUIParams.get("rndSpeed").value;
    this.cdParams.minSpeed = this.cdUIParams.get("minSpeed").value;
    this.cdParams.maxSpeed = this.cdUIParams.get("maxSpeed").value;
    this.cdParams.speedValue = this.cdUIParams.get("speed").value;
    this.cdParams.blocksShape = this.cdUIParams.get("blockShape").value;
    this.cdParams.bgImg = this.cdUIParams.get("bgImg").value;
    this.cdParams.clearCanvasByFrame = this.cdUIParams.get("clearCanvas").value;
    this.cdParams.startPoint = this.cdUIParams.get("startPoint").value;
  }

  private updateUIfromParams(){
    this.cdUIParams.get("nbrOfPoints").setValue(this.cdParams.nbrOfPoints);
    this.cdUIParams.get("targetPoint").setValue(this.cdParams.targetPoint);
    this.cdUIParams.get("rndSpeed").setValue(this.cdParams.speedRnd);
    this.cdUIParams.get("minSpeed").setValue(this.cdParams.minSpeed);
    this.cdUIParams.get("maxSpeed").setValue(this.cdParams.maxSpeed);
    this.cdUIParams.get("speed").setValue(this.cdParams.speedValue);
    this.cdUIParams.get("blockShape").setValue(this.cdParams.blocksShape);
    this.cdUIParams.get("bgImg").setValue(this.cdParams.bgImg);
    this.cdUIParams.get("clearCanvas").setValue(this.cdParams.clearCanvasByFrame);
    this.cdUIParams.get("startPoint").setValue(this.cdParams.startPoint);
  }

}
