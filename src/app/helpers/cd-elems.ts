import { CdParams } from '../params/cd-params/cd-params';
import { Size } from './size';
import { CdElem } from './cd-elem';
import { Point } from './point';
import { preserveWhitespacesDefault } from '@angular/compiler';
import { Rnd } from './rnd';
import { Color } from './color';

export class CdElems {

    private _target: CdElem;
    private _centerPoint: Point;
    private _arrElems: CdElem[];
    private _canvasSize: Size;
    private _cdParams: CdParams;

    constructor(cdParams:CdParams, canvasSize:Size){
        this.cdParams = cdParams;
        this.canvasSize = canvasSize;
        this.arrElems = [];
        this.createCenterPoint();
        this.createTarget();
        this.createElementsRndSize(new Size(0,0), this.canvasSize);
    }

    public get arrElems(): CdElem[] {
        return this._arrElems;
    }
    public set arrElems(value: CdElem[]) {
        this._arrElems = value;
    }
    public get canvasSize(): Size {
        return this._canvasSize;
    }
    public set canvasSize(value: Size) {
        this._canvasSize = value;
    }
    public get target(): CdElem {
        return this._target;
    }
    public set target(value: CdElem) {
        this._target = value;
    }
    public get centerPoint(): Point {
        return this._centerPoint;
    }
    public set centerPoint(value: Point) {
        this._centerPoint = value;
    }
    public get cdParams(): CdParams {
        return this._cdParams;
    }
    public set cdParams(value: CdParams) {
        this._cdParams = value;
    }

    public createElementsRndSize(canvasMin:Size, canvasMax:Size):void{
        //supported position types: random inside canvas, random outside canvas, center of canvas
        const standardSize = new Size(10,10);
        const standardSpeed = this.cdParams.speedValue;;
        const standardShape = this.cdParams.blocksShapeOptions[this.cdParams.blocksShape];
        const targetInverted = this.cdParams.targetPointOptions[this.cdParams.targetPoint] == "center";
        const standardFillColor = this.cdParams.blocksColorOptions[this.cdParams.blocksColor];
        const currentPosition = this.target.currentPosition;
        const expandRate = 50;
        const shrinkRate = 50;
        const minRndSize = 2;
        const maxRndSize = 10;
        const minRndSpeed = this.cdParams.minSpeed;
        const maxRndSpeed = this.cdParams.maxSpeed;

        const minSize = new Size(0,0);
        const minPosition = new Point(0,0);
        let counter = 0;

        while(counter < this.cdParams.nbrOfPoints){
            const rndSideSize = Rnd.rndInt(minRndSize, maxRndSize);
            const rndSize = new Size(rndSideSize, rndSideSize);
            const maxSize = new Size(this.canvasSize.w - rndSideSize, this.canvasSize.h - rndSideSize);
            const maxPosition = new Point(this.canvasSize.w - rndSideSize, this.canvasSize.h - rndSideSize);
            const rndPosition = Rnd.rndPosition(minPosition, maxPosition);
            const rndSpeed = Rnd.rndInt(minRndSpeed,maxRndSpeed);
            const color = Color.createRandomColor();

            const newElm = new CdElem(rndPosition, 
                rndSize, 
                standardShape, 
                targetInverted, 
                currentPosition,
                rndSpeed, 
                color, 
                expandRate, 
                shrinkRate);

            this.arrElems.push(newElm);

            counter++;
        }

        //target element does not have a target...therefore null is used
        //this.target = new CdElem(this.centerPoint, size, shape,target, null, 0, fillColor, 50,50);

        //speed can be random
        //size can be variable
        //position need to be determined
        //fillColor can be variable
    }

    public createTarget():void{
        const size= new Size(10, 10);
        const shape = this.cdParams.blocksShapeOptions[this.cdParams.blocksShape];
        const target = this.cdParams.targetPointOptions[this.cdParams.targetPoint] == "center";
        const fillColor = this.cdParams.blocksColorOptions[this.cdParams.blocksColor];

        //target element does not have a target...therefore null is used
        this.target = new CdElem(this.centerPoint, size, shape,target, null, 0, fillColor, 50,50);
    }

    public createCenterPoint():void{
        const hCenter = Math.round(this.canvasSize.w/2);
        const vCenter = Math.round(this.canvasSize.h/2);
        this.centerPoint = new Point(hCenter, vCenter);
    }

    public update():void{

    }


}
