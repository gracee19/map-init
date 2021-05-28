import React, { useState } from "react";
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";
// import { Link } from "react-router-dom";

function SignUp() {
  const [name, userName] = useState();
  const [email, userMail] = useState();
  const [password, userPass] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);

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
  }


  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="/logo.png" /> Create Your Account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              placeholder="First Name"
              onChange={e => userName(e.target.name)}
            />
            <Form.Input
              fluid
              placeholder="Last Name"
            />
            <Form.Input
              fluid
              icon="at"
              iconPosition="left"
              placeholder="E-mail address"
              onChange={e => userMail(e.target.email)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={e => userPass(e.target.password)}
            />

            <Button color="teal" fluid size="large" onClick={handleSubmit}>
              Sign Up
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
}

export default SignUp;
