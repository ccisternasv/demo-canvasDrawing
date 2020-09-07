import { Drawable } from './drawable';
import { Point } from './point';
import { Size } from './size';

export class CdElem implements Drawable{
    private _drawingRequired: boolean;
    private _initialPosition: Point;
    private _currentPosition: Point;
    private _initialSize: Size;
    private _currentSize: Size;
    private _shape: string;
    private _invertedDirection: boolean;
    private _targetP: Point;
    private _speed: number;
    private _fillColor: string;
    private _markForDeletion: boolean;
    private _expandRate: number;
    private _shrinkRate: number;

    constructor(point:Point, 
        size:Size, 
        shape:string, 
        invertedDirection:boolean, 
        target:Point, 
        speed:number, 
        fColor:string, 
        expRate:number, 
        shrRate:number)
        {
        this.drawingRequired = true;
        this.initialPosition= point;
        this.currentPosition= new Point(point.x, point.y);
        this.initialSize= size;
        this.currentSize= new Size(size.w, size.h);
        this.shape= shape;
        this.invertedDirection= invertedDirection;
        this.targetP= target;
        this.speed= speed;
        this.fillColor= fColor;
        this.markForDeletion= false;
        this.expandRate= expRate;
        this.shrinkRate= shrRate;
    }

    public get drawingRequired(): boolean {
        return this._drawingRequired;
    }
    public set drawingRequired(value: boolean) {
        this._drawingRequired = value;
    }
    public get currentPosition(): Point {
        return this._currentPosition;
    }
    public set currentPosition(value: Point) {
        this._currentPosition = value;
    }
    public get currentSize(): Size {
        return this._currentSize;
    }
    public set currentSize(value: Size) {
        this._currentSize = value;
    }
    public get shape(): string {
        return this._shape;
    }
    public set shape(value: string) {
        this._shape = value;
    }
    public get invertedDirection(): boolean {
        return this._invertedDirection;
    }
    public set invertedDirection(value: boolean) {
        this._invertedDirection = value;
    }
    public get targetP(): Point {
        return this._targetP;
    }
    public set targetP(value: Point) {
        this._targetP = value;
    }
    public get speed(): number {
        return this._speed;
    }
    public set speed(value: number) {
        this._speed = value;
    }

    public get fillColor(): string {
        return this._fillColor;
    }
    public set fillColor(value: string) {
        this._fillColor = value;
    }    
    public get initialPosition(): Point {
        return this._initialPosition;
    }
    public set initialPosition(value: Point) {
        this._initialPosition = value;
    }
    public get initialSize(): Size {
        return this._initialSize;
    }
    public set initialSize(value: Size) {
        this._initialSize = value;
    }
    public get markForDeletion(): boolean {
        return this._markForDeletion;
    }
    public set markForDeletion(value: boolean) {
        this._markForDeletion = value;
    }
    public get expandRate(): number {
        return this._expandRate/100;
    }
    public set expandRate(value: number) {
        this._expandRate = value;
    }
    public get shrinkRate(): number {
        return this._shrinkRate/100;
    }
    public set shrinkRate(value: number) {
        this._shrinkRate = value;
    }

    public shrink(): boolean {
        //calculate object center
        const centerPosition = this.getCenterOfCurrentPosition();

        //adjust size:
        this.currentSize.w = Math.round(this.currentSize.w * (1 - this.shrinkRate));
        this.currentSize.h = Math.round(this.currentSize.h * (1 - this.shrinkRate));

        //adjusts position
        this.currentPosition.x = centerPosition.x - this.getHalfOfSize().w;
        this.currentPosition.y = centerPosition.y - this.getHalfOfSize().h;

        return true;
    }

    getCenterOfCurrentPosition() {
        return new Point(Math.round(this.currentPosition.x + this.currentSize.w / 2),
            Math.round(this.currentPosition.y + this.currentSize.h / 2));
    }

    getHalfOfSize(){
        return new Size(
            Math.round(this.currentSize.w/2), 
            Math.round(this.currentSize.h/2));
    }

    //x1, y1, x2, y2
    getCurrentPositionMatrix():number[]{
        return [this.currentPosition.x, this.currentPosition.y, 
            this.currentPosition.x + this.currentSize.w, this.currentPosition.y + this.currentSize.h];
    }

    update(){
        this.drawingRequired =true;
    }

    public expand(): boolean {
        //calculate object center
        const centerPosition = this.getCenterOfCurrentPosition();

        //adjust size:
        this.currentSize.w = Math.round(this.currentSize.w * (1 + this.shrinkRate));
        this.currentSize.h = Math.round(this.currentSize.h * (1 + this.shrinkRate));

        //adjusts position
        this.currentPosition.x = centerPosition.x - this.getHalfOfSize().w;
        this.currentPosition.y = centerPosition.y - this.getHalfOfSize().h;

        return true;
    }
}
