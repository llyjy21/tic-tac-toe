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
    'getInitialState': function() {
        return {this.state.value = this.props.initialValue};
    },
    /**
    * Render a HTML button
    * @return {ReactElement}
    */
    'render': function onRender () {
        return (
            <button style={boxStyle}>{this.state.value}</button>
        );
    }
});

React.render(<Box initialValue='X'/>, document.body);
