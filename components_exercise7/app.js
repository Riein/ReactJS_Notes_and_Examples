var React = require('react');
var ReactDOM = require('react-dom');
var TopStory = require('./TopStory');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>
          Welcome to 6 o'clock news at 8PM! Today's top story:
        </h1>
        <TopStory name="Grandma"/>
        <article>
          In other news: Beverly Hills: 90210, Cleveland Browns: 0.
        </article>
      </div>
    );
  }
});

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);