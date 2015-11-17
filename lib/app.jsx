'use strict';

var React = require('react');

var boxStyle = {
    height: 100,
    width: 100
};

var Box = React.createClass({
    /*
    * Step 4 - Render the button with an initial state
    */
    getInitialState: function() {
        /*
        * MISTAKE 1: Assignment is ":", not "="
        * MISTAKE 2: Cannot use "this.state.value" neither "this.value"
        */
        return {value: this.props.initialValue};
    },
    /*
    * Step 5 - Change state alternating between X and O

    tick: function() {
        this.setState({value: this.state.value === 'X' ? 'O' : 'X'});
    },
    componentDidMount: function() {
        this.interval = setInterval(this.tick, 300);
    },
    componentWillUnmount: function() {
        clearInterval(this.interval);
    },
    */
    tick: function() {
        this.setState({value: this.state.value === 'X' ? 'O' : 'X'});
    },
    /**
    * Render a HTML button
    * @return {ReactElement}
    */
    'render': function onRender () {
        return (
            <button style={boxStyle} onClick={this.tick}>{this.state.value}</button>
        );
    }
});

var Row = React.createClass({
    getInitialState: function() {
        return {
            list: [1,2,3]
        };
    },
    tick: function() {
        var indexofRow;
        this.setState({indexofRow: 1});
    },
    /**
    * Render a HTML button
    * @return {ReactElement}
    */
    'render': function onRender () {
        var results = this.state.list;
        return (
            <div onClick={this.tick}>
                {results.map(function(result) {
                        return <Box key={result.id} initialValue='-'/>;
                })}
            </div>
        );
    }
});

var Grid = React.createClass({
    getInitialState: function() {
        return {
            list: [1,2,3]
        };
    },

    /**
    * Render a HTML button
    * @return {ReactElement}
    */
    'render': function onRender () {
        var results = this.state.list;
        return (
            <div onClick={this.tick}>
                {results.map(function(result) {
                    return <Row key={result.id}/>;
                })}
            </div>
        );
    }
});

React.render(<Grid />, document.body);
