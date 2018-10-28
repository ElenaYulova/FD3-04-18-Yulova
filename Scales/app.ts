class Product {
    scale: number;
    name: string;

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

class Apple extends Product {

    constructor(_scale:number,_name:string){
        super(_scale,_name);
    }
    

}

class Orange extends Product {

    constructor(_scale:number,_name:string){
        super(_scale,_name);
    }
   

}

class Tomato extends Product {

    constructor(_scale:number,_name:string){
        super(_scale,_name);
    }
   

}

class Scales {
    productArr: Product[];

    constructor(){
        this.productArr =[];
    }

    add(product:Product):void{
        this.productArr.push(product);
    }

    getSumScale():number{
        let sumScale:number;
        sumScale = this.productArr.reduce(
            (sum:number, el:Product) => sum+el.getScale()
            ,0
        );
        return sumScale;

    }

    getNameList():string[]{
        let nameList:string[];
        nameList = this.productArr.map((el:Product):string=>el.name);
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