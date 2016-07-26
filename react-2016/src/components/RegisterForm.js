"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Input = require('./common/textInput');

var RegisterForm = React.createClass({
	render: function() {
        document.body.style.backgroundImage = "url('bla3.jpg')";
		return (
			<form>
                <h1>Register</h1>
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
                
                <Input name = "Email"
                       label = "Email"
                       onChange = {this.props.onChange}
                       value = {this.props.Email} />
                <br />


                <input type = "submit" value = "Register" className = "btn btn-default" />
               <Link to = "Login">
                   <label htmlFor = "Login">Go back to Login</label>
                   </Link>
            </form>
		);
	}
});

module.exports = RegisterForm;