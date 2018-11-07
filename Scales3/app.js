var Product = /** @class */ (function () {
    function Product(_scale, _name) {
        this.scale = _scale;
        this.name = _name;
    }
    Product.prototype.getScale = function () {
        return this.scale;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        window.localStorage.clear();
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        window.localStorage.setItem(String(window.localStorage.length), JSON.stringify(item));
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var obj = JSON.parse(window.localStorage.getItem(String(index)));
        return new Product(Number(obj.scale), obj.name);
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        return window.localStorage.length;
    };
    return ScalesStorageEngineLocalStorage;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.storage = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.storage.push(item);
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.storage[index];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.storage.length;
    };
    return ScalesStorageEngineArray;
}());
var Scales = /** @class */ (function () {
    function Scales(_storage) {
        this.storage = _storage;
    }
    Scales.prototype.add = function (product) {
        this.storage.addItem(product);
    };
    Scales.prototype.getSumScale = function () {
        var sumScale = 0;
        var count = this.storage.getCount();
        for (var i = 0; i < count; i++) {
            sumScale += this.storage.getItem(i).getScale();
        }
        return sumScale;
    };
    Scales.prototype.getNameList = function () {
        var nameList = [];
        var count = this.storage.getCount();
        for (var i = 0; i < count; i++) {
            nameList.push(this.storage.getItem(i).getName());
        }
        return nameList;
    };
    return Scales;
}());
var arrStorage = new ScalesStorageEngineArray();
var localStor = new ScalesStorageEngineLocalStorage();
var scaleArr = new Scales(arrStorage);
var scaleStor = new Scales(localStor);
var apple1 = new Product(7, "Яблоки Штрифель");
var apple2 = new Product(3.8, "Яблоки Антей");
var orange1 = new Product(4.2, "Апельсины Марокканские");
var orange2 = new Product(2.7, "Апельсины Испанские");
var tomato1 = new Product(8.4, "Помидоры Жёлтые");
var tomato2 = new Product(8.4, "Помидоры Красные");
var tomato3 = new Product(8.4, "Помидоры Оранжевые");
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
//# sourceMappingURL=app.js.map