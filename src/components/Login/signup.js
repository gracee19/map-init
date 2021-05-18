import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Segment,
} from "semantic-ui-react";

const SignUp = () => (
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
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Button color="teal" fluid size="large">
            Sign Up
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
);

export default SignUp;
