
var words = [
    "авиаметеослужба",
    "взрывоопасность",
    "демонополизация",
    "жизнеустройство",
    "изолированность",
    "киновидеопрокат",
    "завоевательница",
    "единодержавство",
    "газонокосильщик",
    "бессмысленность",    
];


var FilterWords =React.createClass({
    displayName: "FilterWords",
    propTypes: {
        words: React.PropTypes.arrayOf(
            React.PropTypes.string.isRequired
        )
    },
    getInitialState: function () {
        return {
            "filteredWords": this.props.data,
            "filter": "",
            "sorted": false,
            
        }
    },
    useFilter: function (EO) {
        this.setState({filter: event.target.value}, this.useFilterAndSort);
    },
    useSort: function (EO) {            
        this.setState({sorted : EO.target.checked}, this.useFilterAndSort);
    },
    useFilterAndSort: function () {
        var words = this.props.data.slice();
        if (this.state.sorted){
            words = words.sort();
        }
        if (this.state.filter) {
            words = words.filter(
                letters => letters.search(this.state.filter)
            );
        }
        this.setState({"filteredWords": words})
    },
    render: function () {
        var wordsList = this.state.filteredWords.map (
            (word) => React.DOM.span( {className: ""}, word)
        );
        
        return (
            React.DOM.div({className:""},
            React.DOM.input({type:"checkbox", checked: this.state.sorted, onChange:this.useSort}),
            React.DOM.input({type:"text", value: this.state.filter, onChange:this.this.useFilter}),
            React.DOM.div( {className:""}, wordsList),
            
        ))
    },

});

ReactDOM.render(React.createElement(FilterWords, {words: words}),document.getElementById('container'));
