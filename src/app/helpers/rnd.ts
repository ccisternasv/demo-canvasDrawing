import { Size } from './size';
import { Point } from './point';

export class Rnd {

    constructor(){
    }
    
    static rndInt(min:number, max:number){
        return Math.round(Math.random()*(max-min) + min);
    }

    static rndSize(minSize:Size, maxSize:Size):Size{
        const width = Rnd.rndInt(minSize.w, maxSize.w);
        const height = Rnd.rndInt(minSize.h, maxSize.h);
        return new Size(width, height);
    }

    static rndPosition(minPosition:Point, maxPosition:Point):Point{
        const width = Rnd.rndInt(minPosition.x, maxPosition.x);
        const height = Rnd.rndInt(minPosition.y, maxPosition.y);
        return new Point(width, height);
    }
}
