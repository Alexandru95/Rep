"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var LoginForm = require('./LoginForm');
var RegisterForm = require('./RegisterForm');

var Register = React.createClass({
   getInitialState: function() {
       return {
           user: { Username: '', Password: '', Email: ''}
       };
   },

    setUserState: function(event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.user [field] = value;
        return this.setState({ user: this.state.user});
    },

	render: function() {
        var styles = {
            backgroundImage: 'none',
            color: '#000099',
            fontSize: 20,
            width: "250px"
        };
		return (
            <center>
			<div className = "Login Form" style = {styles}>
				<RegisterForm
                user = {this.state.user}
                onChange = {this.setUserState} />
			</div>
            </center>
		);
	}
});

module.exports = Register;

