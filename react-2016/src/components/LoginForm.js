"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RegisterForm = require('./RegisterForm');
var Input = require('./common/textInput');

var LoginForm = React.createClass({
	render: function() {
         document.body.style.backgroundImage = "url('bla3.jpg')";
		return (
			<form>
                <h1>Login</h1>
                <Input
                    name = "Username"
                    label = "Username"
                onChange = {this.props.onChange}
                value = {this.props.Username} />
                <br />

                <Input type = "password"
                       name = "Password"
                       label = "Password"
                       onChange = {this.props.onChange}
                       value = {this.props.Password} />
                <br />

                <input type="submit" value = "Login" className = "btn btn-default" />
               <Link to = "Register">
                   <label htmlFor = "Register" >Don't have an account? Register Now</label>
                   </Link>
            </form>
		);
	}
});

module.exports = LoginForm;