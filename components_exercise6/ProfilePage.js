var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./NavBar');

var ProfilePage = React.createClass({
  render: function () {
    return (
      <div>
				<NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and being awesome!</p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
});

ReactDOM.render(<ProfilePage />, document.getElementById('app'));