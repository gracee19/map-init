import React, {  useState } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
// import API from "../../utils/API"
import { useHistory } from "react-router-dom";
// 

function Login(){
  const [email, loginMail] = useState();
  const [password, loginPass] = useState();
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(email);
    // console.log(password);
    if(email && password){
      const response = await fetch('/api/user/login',{
        method:'POST',
        body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        history.push('/map');
      } else {
        console.log(response);
      }
    }
    
  }
  // useEffect(()=> {
  //   API.getloginMail.then((res) => {
  //     loginMail(res);
  //   })
  // }, []);
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='blue' textAlign='center'>
        <Image src='/mapinit-logo2.png' /> Please log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' onChange={e => loginMail(e.target.value)}/>
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            onChange={e => loginPass(e.target.value)}
          />

          <Button color='teal' fluid size='large' onClick={handleLogin}>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='/signup'>Sign Up</a>
      </Message>
    </Grid.Column>
    </Grid>
  )
  
}

export default Login;