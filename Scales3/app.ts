interface IstorageEngine{
    addItem(item:Product):void;
    getItem(index:number):Product;
    getCount():number;
}

class Product{
    scale:number;
    name:string;
    constructor(_scale:number,_name:string){
        this.scale=_scale;
        this.name=_name;
    }

    getScale():number{
        return this.scale;
    }

    getName():string{
        return this.name;
    }
}
class ScalesStorageEngineLocalStorage implements IstorageEngine{
    
    count:number;
    constructor(){
        window.localStorage.clear();
    }
    addItem(item:Product):void{
        window.localStorage.setItem(String(window.localStorage.length),JSON.stringify(item));

    }
    getItem(index:number):Product{
        let obj=JSON.parse(window.localStorage.getItem(String(index)));
        return new Product(Number(obj.scale),obj.name);
    }
    getCount():number{
        return window.localStorage.length;
    }

}
class ScalesStorageEngineArray implements IstorageEngine{
    storage:Product[];
    constructor(){
        this.storage=[];
    }

    addItem(item:Product):void{
        this.storage.push(item);
    }
    getItem(index:number):Product{
        return this.storage[index];
    }
    getCount():number{
        return this.storage.length;
    }

}
class Scales<StorageEngine extends IstorageEngine>{

    storage:StorageEngine;

    constructor(_storage:StorageEngine){
        this.storage=_storage;
    }

    add(product:Product):void{
        this.storage.addItem(product);
    }

    getSumScale():number{
        let sumScale:number=0;
        let count:number=this.storage.getCount();

        for (let i=0;i<count;i++){
             sumScale+=this.storage.getItem(i).getScale();
        }
        return sumScale;
    }

    getNameList():string[]{
        let nameList:string[]=[];
        let count:number=this.storage.getCount();
        for (let i=0;i<count;i++){
            nameList.push(this.storage.getItem(i).getName());
        }
        return nameList;
    }

}
let arrStorage = new ScalesStorageEngineArray();
let localStor=new ScalesStorageEngineLocalStorage();
let scaleArr=new Scales(arrStorage);
let scaleStor =new Scales(localStor);


let apple1:Product = new Product(7, "Яблоки Штрифель");
let apple2:Product = new Product(3.8, "Яблоки Антей");

let orange1:Product = new Product(4.2, "Апельсины Марокканские");
let orange2:Product = new Product(2.7, "Апельсины Испанские");

let tomato1:Product = new Product(8.4, "Помидоры Жёлтые");
let tomato2:Product = new Product(8.4, "Помидоры Красные");
let tomato3:Product = new Product(8.4, "Помидоры Оранжевые");

scaleArr.add(apple1);
scaleArr.add(apple2);

scaleArr.add(orange1);
scaleStor.add(orange2);

scaleStor.add(tomato1);
scaleStor.add(tomato2);
scaleStor.add(tomato3);

console.log(scaleArr.getNameList());
console.log(scaleArr.getSumScale());

console.log(scaleStor.getNameList());
console.log(scaleStor.getSumScale());