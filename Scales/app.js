var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_scale, _name) {
        return _super.call(this, _scale, _name) || this;
    }
    return Apple;
}(Product));
var Orange = /** @class */ (function (_super) {
    __extends(Orange, _super);
    function Orange(_scale, _name) {
        return _super.call(this, _scale, _name) || this;
    }
    return Orange;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(_scale, _name) {
        return _super.call(this, _scale, _name) || this;
    }
    return Tomato;
}(Product));
var Scales = /** @class */ (function () {
    function Scales() {
        this.productArr = [];
    }
    Scales.prototype.add = function (product) {
        this.productArr.push(product);
    };
    Scales.prototype.getSumScale = function () {
        var sumScale;
        sumScale = this.productArr.reduce(function (sum, el) { return sum + el.getScale(); }, 0);
        return sumScale;
    };
    Scales.prototype.getNameList = function () {
        var nameList;
        nameList = this.productArr.map(function (el) { return el.name; });
        return nameList;
    };
    return Scales;
}());
var scales = new Scales;
var apple1 = new Apple(7, "Яблоки Штрифель");
var apple2 = new Apple(3.8, "Яблоки Антей");
var orange1 = new Orange(4.2, "Апельсины Марокканские");
var orange2 = new Orange(2.7, "Апельсины Испанские");
var tomato1 = new Tomato(8.4, "Помидоры Жёлтые");
var tomato2 = new Tomato(8.4, "Помидоры Красные");
var tomato3 = new Tomato(8.4, "Помидоры Оранжевые");
scales.add(apple1);
scales.add(apple2);
scales.add(orange1);
scales.add(orange2);
scales.add(tomato1);
scales.add(tomato2);
scales.add(tomato3);
console.log(scales.getNameList());
console.log(scales.getSumScale());
//# sourceMappingURL=app.js.map