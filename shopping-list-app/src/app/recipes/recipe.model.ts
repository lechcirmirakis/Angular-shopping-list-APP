export class Recipe {
    public name: string;
    public desctiption: string;
    public imagePath: string;
    
    constructor(name: string, desc: string, imagePath: string) {
        this.name = name;
        this.desctiption = desc;
        this.imagePath = imagePath;
    }
}