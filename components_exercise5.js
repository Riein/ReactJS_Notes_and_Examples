var React = require('react');
var ReactDOM = require('react-dom');

var fiftyFifty = Math.random() < 0.5;

// React.createClass call begins here:
var TonightsPlan = React.createClass({
  render: function() {
    var task;
    if (!fiftyFifty)
      task = "Tonight I'm going to bed WOOO";
    else
      task = "Tonight I'm going out WOOO";
    
    return (
    	<h1>
      	{task}
      </h1>
    );
  }
});

ReactDOM.render(<TonightsPlan />, document.getElementById('app'));