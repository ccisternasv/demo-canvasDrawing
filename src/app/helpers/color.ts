export class Color {
    //#RRGGBB
    public static createRandomColor(){
        return '#'+Math.random().toString(16).substr(-6);
    }

    //RR==GG==BB
    public static createRandomGrayscale(){
        const base = Math.random().toString(-2);
        return `#${base}${base}${base}`;
    }
}
