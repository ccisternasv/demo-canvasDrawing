import { Point } from './point';
import { Size } from './size';

export interface Drawable {
    drawingRequired:boolean;
    currentPosition:Point;
    currentSize:Size;
    shape:string;
}
