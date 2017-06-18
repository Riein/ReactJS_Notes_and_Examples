var React = require('react');

var Button = React.createClass({
	render: function() {
		return (
			<button onClick={this.props.onClick}>Button</button>
		);
	}
});

modules.export = Button;