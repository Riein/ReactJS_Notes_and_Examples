var React = require('react');
var ReactDOM = require('react-dom');

var MyComponent = React.createClass({
  render: function() {
    return (
    	<blockquote>
        <p>
          What is important now is to recover our senses.
        </p>
        <cite> 
          <a target="_blank" href="http://bit.ly/1LvSLUA">
            Susan Sontag
          </a>
        </cite>
      </blockquote>  
    );
  }
  
});

ReactDOM.render(<MyComponent />, document.getElementById('app'));