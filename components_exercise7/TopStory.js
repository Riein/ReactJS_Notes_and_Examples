var React = require('react');

var TopStory = React.createClass({
  render: function () {
    return <h1>Rudolph the Rednose Reindeer was ran over by, {this.props.name}!</h1>;
  }
});

module.exports = TopStory;