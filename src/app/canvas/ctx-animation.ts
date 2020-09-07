import { CdParams } from '../params/cd-params/cd-params';
import { ElementRef } from '@angular/core';
import { Point } from '../helpers/point';
import { Drawable } from '../helpers/drawable';

export class CtxAnimation {
    private _mainCanvas: ElementRef<HTMLCanvasElement>;
    private _ctxMainCanvas: CanvasRenderingContext2D;
    private _cdParams: CdParams;
    private _requestedFrameAnimation: number;
    private _drawingRequired: boolean;

    constructor(mainCanvas: ElementRef<HTMLCanvasElement>,
        cdParams: CdParams) {
        this.mainCanvas = mainCanvas;
        this.ctxMainCanvas = mainCanvas.nativeElement.getContext('2d');
        this.cdParams = cdParams;
        this.drawingRequired
    }
    public get mainCanvas(): ElementRef<HTMLCanvasElement> {
        return this._mainCanvas;
    }
    public set mainCanvas(value: ElementRef<HTMLCanvasElement>) {
        this._mainCanvas = value;
    }
    public get ctxMainCanvas(): CanvasRenderingContext2D {
        return this._ctxMainCanvas;
    }
    public set ctxMainCanvas(value: CanvasRenderingContext2D) {
        this._ctxMainCanvas = value;
    }
    public get cdParams(): CdParams {
        return this._cdParams;
    }
    public set cdParams(value: CdParams) {
        this._cdParams = value;
    }
    public get drawingRequired(): boolean {
        return this._drawingRequired;
    }
    public set drawingRequired(value: boolean) {
        this._drawingRequired = value;
    }
    public get requestedFrameAnimation(): number {
        return this._requestedFrameAnimation;
    }
    public set requestedFrameAnimation(value: number) {
        this._requestedFrameAnimation = value;
    }
    private stroke(lineWidth: number = 1, strokeStyle: string = "red"): void {
        //outline
        this.ctxMainCanvas.lineWidth = lineWidth;
        this.ctxMainCanvas.strokeStyle = strokeStyle;
        this.ctxMainCanvas.stroke();
    }

    private fill(fillStyle: string = "yellow"): void {
        //fill color
        this.ctxMainCanvas.fillStyle = fillStyle;
        this.ctxMainCanvas.fill();
    }

    draw(target: Drawable, points: Drawable[]) {
        this.ctxMainCanvas.fillText("hello World", 100, 100);
        //save ctx
        this.ctxMainCanvas.save();

       // this.drawTriangle(new Point(20, 20), 30);
        const shape = 'square';
       let drawingMethod = this.selectDrawingShapeMethod(shape);
        
        points.forEach(point=> {
            drawingMethod(this.ctxMainCanvas, point.currentPosition, point.currentSize.w);
        });

        //outline
        this.stroke();
        //fill
        this.fill();
        //restore
        this.ctxMainCanvas.restore();
    }


    calculateTriangleCoordinates(initialPosition: Point, sideSize: number): Point[] {

        const a: Point = new Point(Math.round(initialPosition.x + sideSize / 2),
            Math.round(initialPosition.x + sideSize / 2) * Math.cos(Math.PI / 6));
        const b: Point = new Point(initialPosition.x, initialPosition.y + sideSize);
        const c: Point = new Point(initialPosition.x + sideSize, initialPosition.y + sideSize);

        return [a, b, c];
    }

    drawTriangle(ctx:CanvasRenderingContext2D, position: Point, sideSize: number): void {
        const triangleCoordinates: Point[] = this.calculateTriangleCoordinates(position, sideSize);

        ctx.beginPath();
        ctx.moveTo(triangleCoordinates[0].x, triangleCoordinates[0].y);
        ctx.lineTo(triangleCoordinates[1].x, triangleCoordinates[1].y);
        ctx.lineTo(triangleCoordinates[2].x, triangleCoordinates[2].y);
        ctx.closePath();
    }
    drawSquare(ctx:CanvasRenderingContext2D, position: Point, side: number):void{
        const x1 = position.x;
        const y1 = position.y;
        const x2 = x1 + side;
        const y2 = y1 + side;

        ctx.beginPath();
        ctx.rect(x1, y1, x2, y2);
        ctx.closePath();
        console.log("drawing square..", x1, y1, x2, y2);
    }

    drawLine(ctx:CanvasRenderingContext2D, position: Point, side: number):void{
        const x1 = position.x;
        const y1 = position.y;
        const x2 = x1 + side;
        const y2 = y1 + side;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.closePath();
    }

    //context.arc(x,y,r,sAngle,eAngle,counterclockwise);
    drawCircle(ctx:CanvasRenderingContext2D, position: Point, side: number):void{
        const radius = Math.round(side/2);
        const x = position.x+radius;
        const y = position.y+radius;

        ctx.beginPath();
        ctx.arc(x, y,radius,0,2*Math.PI);
        ctx.closePath();
    }

    selectDrawingShapeMethod(shape:string){
        switch(shape){
            case 'circle':
                return this.drawCircle;
            case 'square':
                return this.drawSquare;
            case 'line':
                return this.drawLine;
            case 'triangle':
                return this.drawTriangle;
            default:
                return null;
        }
    }
}
