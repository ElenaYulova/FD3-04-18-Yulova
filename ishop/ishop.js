//массив каталога
var header = "Учебники по Javascript";
var books = [
    {
        isbn: "978-5-8459-2036-2",
        bookName: "JavaScript для чайников",
        cover: "https://s4-goods.ozstatic.by/2000/356/102/102356_0.jpg",
        price: 35.56,
        stock: 27,
        pages: 	320,
    },
    {
        isbn: "978-5-93286-208-7",
        bookName: "JavaScript. Шаблоны",
        cover: "https://s3-goods.ozstatic.by/2000/164/193/10/10193164_0.jpg",
        price: 65.99,
        stock: 42,
        pages: 272,
    },
    {
        isbn: "978-5-93286-213-1",
        bookName: "JavaScript. Оптимизация производительности",
        cover: "https://s2-goods.ozstatic.by/2000/792/261/10/10261792_0.jpg",
        price: 79.94,
        stock: 11,
        pages: 256,
    },
    {
        isbn: "978-5-8459-2054-6",
        bookName: "JavaScript для профессионалов",
        cover: "https://s1-goods.ozstatic.by/2000/610/534/10/10534610_0.jpg",
        price: 65.95,
        stock: 8,
        pages: 240,
    },
    {
        isbn: "	978-5-699-79119-4",
        bookName: "JavaScript и jQuery. Исчерпывающее руководство",
        cover: "https://s2-goods.ozstatic.by/2000/563/336/10/10336563_0.jpg",
        price: 45.41,
        stock: 27,
        pages: 880,
    },
];

var BooksCatalog = React.createClass ({
    displayName: "BooksCatalog",
    propTypes:{
        header: React.PropTypes.string.isRequired,
        booksList: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                isbn: React.PropTypes.string.isRequired,
                bookName: React.PropTypes.string.isRequired,
                cover: React.PropTypes.string.isRequired,
                price: React.PropTypes.number.isRequired,
                stock: React.PropTypes.number.isRequired,
                pages: React.PropTypes.number.isRequired,               
            }),
        )
    }, 
    render: function(){
        var allBooks = this.props.books.map(book =>
            React.DOM.div ( {key:book.isbn, className:"books_book"},
            React.DOM.img ( {src:book.cover, alt:book.bookName, title:book.bookName}),
            React.DOM.span ( {className: ""}, ("Название книги: " + book.bookName)),
            React.DOM.span ( {className: ""}, ("ISBN: " + book.isbn)),
            React.DOM.span ( {className: ""}, ("Цена: " + book.price)),
            React.DOM.span ( {className: ""}, ("Страниц: " + book.pages)),
            React.DOM.span ( {className: ""}, ("На складе: " + book.stock)),
        )
        );
        return React.DOM.div({className:"books"},
        React.DOM.h1( {className:"header"}, this.props.header),
        React.DOM.div( {className:""}, allBooks),
    );
    },
});



  