'use strict';

var React = require('react');

var boxStyle = {
    height: 100,
    width: 100
};

var Box = React.createClass({
  /**
   * Render a HTML button
   * @return {ReactElement}
   */
  'render': function onRender () {
    return (
        <button style={boxStyle}>{this.props.value}</button>
    );
  }
});

React.render(<Box value='X'/>, document.body);
