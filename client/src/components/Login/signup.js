import React, { Component } from "react";
import { Grid, Header, Form, Image, Segment } from "semantic-ui-react";
// import { Link } from "react-router-dom";
export default class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    submittedName: "",
    submittedEmail: "",
    submittedPassword: "",
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { username, email, password } = this.state;

    this.setState({
      submittedName: username,
      submittedEmail: email,
      submittedPassword: password,
    });
    console.log("form submitted");
  };
  // console.log(this.state.email);
  // console.log(this.state.password);

  // if (email && password) {
  //   const response = fetch("/signup", {
  //     method: "POST",
  //     body: JSON.stringify({ email, password }),
  //     headers: { "Content-Type": "application/json" },
  //   });
  //   if (response.ok) {
  //     // If successful, redirect the browser to the profile page
  //     document.location.replace("/map");
  //   } else {
  //     alert(response.statusText);
  //   }
  // }

  render() {
    const {
      username,
      email,
      password,
      submittedName,
      submittedEmail,
      submittedPassword,
    } = this.state;

    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src="/mapinit1.logo" /> Create Your Account
          </Header>
          <Form size="x-large" onSubmit={this.handleSubmit}>
            <Segment stacked>
                <Form.Input
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={this.handleChange}
                  required
                />
                <Form.Input
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  required
                />
                <Form.Input
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  required
                />
                <Form.Button content="Submit" type="submit" />
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}