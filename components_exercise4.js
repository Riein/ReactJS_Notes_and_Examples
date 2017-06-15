var React = require('react');
var ReactDOM = require('react-dom');


var friends = [
  {
    title: "Yummmmmmm",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
  }
];

// New component class starts here:
var Friend = React.createClass({
  render: function() {
    var friend1 = friends[0];
	var friend2 = friends[1];
	var friend3 = friends[2];
    
    return (
    	<div>
        <h1>
          {friend1.title}
        </h1>
        <img src={friend1.src}/>
		<h1>
          {friend2.title}
        </h1>
        <img src={friend2.src}/>
		<h1>
          {friend3.title}
        </h1>
        <img src={friend3.src}/>
      </div>
    );
  }
  
});

ReactDOM.render(<Friend />, document.getElementById('app'));