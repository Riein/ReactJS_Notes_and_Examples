var React = require('react');

var Child = React.createClass({
  handleChange: function (e) {
    var name = e.target.value;
    this.props.onChange(name);
  },
  
  render: function () {
    return (
      <div>
        <select 
          id="great-names" 
          onChange={this.handleChange}>
          
          <option value="Jeff">Jeff</option>
          <option value="Rubeus">Rubeus</option>
          <option value="Shaqwon">Shaqwon</option>
        </select>
      </div>
    );
  }
});

module.exports = Child;