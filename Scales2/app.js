var Apple = /** @class */ (function () {
    function Apple(_scale, _name) {
        this.scale = _scale;
        this.name = _name;
    }
    Apple.prototype.getScale = function () {
        return this.scale;
    };
    Apple.prototype.getName = function () {
        return this.name;
    };
    return Apple;
}());
var Orange = /** @class */ (function () {
    function Orange(_scale, _name) {
        this.scale = _scale;
        this.name = _name;
    }
    Orange.prototype.getScale = function () {
        return this.scale;
    };
    Orange.prototype.getName = function () {
        return this.name;
    };
    return Orange;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_scale, _name) {
        this.scale = _scale;
        this.name = _name;
    }
    Tomato.prototype.getScale = function () {
        return this.scale;
    };
    Tomato.prototype.getName = function () {
        return this.name;
    };
    return Tomato;
}());
var Scales = /** @class */ (function () {
    function Scales() {
        this.productArr = [];
    }
    Scales.prototype.add = function (product) {
        this.productArr.push(product);
    };
    Scales.prototype.getSumScale = function () {
        var sumScale = 0;
        for (var i = 0; i < this.productArr.length; i++) {
            sumScale += this.productArr[i].getScale();
        }
        return sumScale;
    };
    Scales.prototype.getNameList = function () {
        var nameList;
        nameList = this.productArr.map(function (el) { return el.getName(); });
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