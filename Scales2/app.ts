interface IScalable{
    getScale():number;
    getName():string;
}

class Apple implements IScalable {
    name:string;
    scale:number;
    constructor(_scale: number, _name: string){
        this.scale = _scale;
        this.name = _name;
    }
    getScale():number{
        return this.scale;
    }

    getName():string{
        return this.name;
    }

}

class Orange implements IScalable {
    name:string;
    scale:number;
    constructor(_scale: number, _name: string){
        this.scale = _scale;
        this.name = _name;
    }
    getScale():number{
        return this.scale;
    }

    getName():string{
        return this.name;
    }
}

class Tomato implements IScalable {
    name:string;
    scale:number;
    constructor(_scale: number, _name: string){
        this.scale = _scale;
        this.name = _name;
    }
    getScale():number{
        return this.scale;
    }

    getName():string{
        return this.name;
    }
}

class Scales {
    productArr:IScalable[];

    constructor(){
        this.productArr =[];
    }

    add(product:IScalable):void{
        this.productArr.push(product);
    }

    getSumScale():number{
        let sumScale:number = 0;
        for (let i:number = 0; i < this.productArr.length; i++) {
            sumScale+=this.productArr[i].getScale();
        }
        return sumScale;

    }

    getNameList():string[]{
        let nameList:string[];
        nameList = this.productArr.map((el:IScalable):string=>el.getName());
        return nameList;
    }
}

let scales:Scales = new Scales;

let apple1:Apple = new Apple(7, "Яблоки Штрифель");
let apple2:Apple = new Apple(3.8, "Яблоки Антей");

let orange1:Orange = new Orange(4.2, "Апельсины Марокканские");
let orange2:Orange = new Orange(2.7, "Апельсины Испанские");

let tomato1:Tomato = new Tomato(8.4, "Помидоры Жёлтые");
let tomato2:Tomato = new Tomato(8.4, "Помидоры Красные");
let tomato3:Tomato = new Tomato(8.4, "Помидоры Оранжевые");

scales.add(apple1);
scales.add(apple2);

scales.add(orange1);
scales.add(orange2);

scales.add(tomato1);
scales.add(tomato2);
scales.add(tomato3);

console.log(scales.getNameList());
console.log(scales.getSumScale());