import { Point } from '../../helpers/point';

export class CdParams {
    private _minNbrOfPoints: number;
    private _maxNbrOfPoints: number;
    private _nbrOfPoints: number;

    private _targetPoint: number;
    private _targetPointOptions: string[];

    private _speedRnd: boolean;
    private _speedValue: number;

    private _maxMaxSpeed: number;
    private _maxSpeed: number;
    private _minMinSpeed: number;
    private _minSpeed: number;
    
    private _blocksShape: number;
    private _blocksShapeOptions: string[];
    
    private _blocksColor: number;
    private _blocksColorValue: string;
    private _blocksColorOptions: string[];
    
    private _bgImg: boolean;
    
    private _clearCanvasByFrame: boolean;
    
    private _startPoint: number;
    private _startPointOptions: string[];

    constructor(){
        this.loadDefaultValues();
    }
    public get nbrOfPoints(): number {
        return this._nbrOfPoints;
    }
    public set nbrOfPoints(value: number) {
        this._nbrOfPoints = value;
    }
    public get minNbrOfPoints(): number {
        return this._minNbrOfPoints;
    }
    public set minNbrOfPoints(value: number) {
        this._minNbrOfPoints = value;
    }
    public get maxNbrOfPoints(): number {
        return this._maxNbrOfPoints;
    }
    public set maxNbrOfPoints(value: number) {
        this._maxNbrOfPoints = value;
    }
    public get targetPoint(): number {
        return this._targetPoint;
    }
    public set targetPoint(value: number) {
        this._targetPoint = value;
    }
    public get targetPointOptions(): string[] {
        return this._targetPointOptions;
    }
    public set targetPointOptions(value: string[]) {
        this._targetPointOptions = value;
    }
    public get speedRnd(): boolean {
        return this._speedRnd;
    }
    public set speedRnd(value: boolean) {
        this._speedRnd = value;
    }
    public get speedValue(): number {
        return this._speedValue;
    }
    public set speedValue(value: number) {
        this._speedValue = value;
    }
    public get maxSpeed(): number {
        return this._maxSpeed;
    }
    public set maxSpeed(value: number) {
        this._maxSpeed = value;
    }
    public get minSpeed(): number {
        return this._minSpeed;
    }
    public set minSpeed(value: number) {
        this._minSpeed = value;
    }
    public get blocksShape(): number {
        return this._blocksShape;
    }
    public set blocksShape(value: number) {
        this._blocksShape = value;
    }
    public get blocksShapeOptions(): string[] {
        return this._blocksShapeOptions;
    }
    public set blocksShapeOptions(value: string[]) {
        this._blocksShapeOptions = value;
    }
    public get blocksColor(): number {
        return this._blocksColor;
    }
    public set blocksColor(value: number) {
        this._blocksColor = value;
    }
    public get blocksColorValue(): string {
        return this._blocksColorValue;
    }
    public set blocksColorValue(value: string) {
        this._blocksColorValue = value;
    }
    public get blocksColorOptions(): string[] {
        return this._blocksColorOptions;
    }
    public set blocksColorOptions(value: string[]) {
        this._blocksColorOptions = value;
    }
    public get bgImg(): boolean {
        return this._bgImg;
    }
    public set bgImg(value: boolean) {
        this._bgImg = value;
    }
    public get clearCanvasByFrame(): boolean {
        return this._clearCanvasByFrame;
    }
    public set clearCanvasByFrame(value: boolean) {
        this._clearCanvasByFrame = value;
    }
    public get startPoint(): number {
        return this._startPoint;
    }
    public set startPoint(value: number) {
        this._startPoint = value;
    }
    public get startPointOptions(): string[] {
        return this._startPointOptions;
    }
    public set startPointOptions(value: string[]) {
        this._startPointOptions = value;
    }
    public get maxMaxSpeed(): number {
        return this._maxMaxSpeed;
    }
    public set maxMaxSpeed(value: number) {
        this._maxMaxSpeed = value;
    }
    public get minMinSpeed(): number {
        return this._minMinSpeed;
    }
    public set minMinSpeed(value: number) {
        this._minMinSpeed = value;
    }
    loadDefaultValues(){
        this.minNbrOfPoints = 2;
        this.maxNbrOfPoints =1000;
        this.nbrOfPoints = 10;

        this.targetPoint = 0;
        this.targetPointOptions = ["center", "opposite to center", "random"];
        
        this.speedRnd = true;
        this.speedValue = 1;
        this.minSpeed =1;
        this.minMinSpeed = 1;
        this.maxSpeed =10;
        this.maxMaxSpeed = 10;
        
        this.blocksShape =0;
        this.blocksShapeOptions = ["square", "circle", "triangle", "line"];
        
        this.blocksColor = 0;
        this.blocksColorOptions = ["color", "grayscale", "random"];
        this.blocksColorValue = this.blocksColorOptions[this.blocksColor];
        
        this.bgImg = true;
        
        this.clearCanvasByFrame = true;
        
        this.startPoint = 0;
        this.startPointOptions = ["random inside canvas", "random outside canvas", "top left", "top right", "bottom left", "bottom right", "center"];
    }
}
