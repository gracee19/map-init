import React from "react";
// import 'semantic-ui-css/semantic.min.css'
import {Container,  Grid} from 'semantic-ui-react';
import BasicMap from "../Map/basic-map";

const ContainerBox = () => (
  <Container>
    <Grid columns="two" divided>
        <Grid.Row>
        <Grid.Column width={2}></Grid.Column>
        <Grid.Column width={10}><BasicMap/></Grid.Column>
        </Grid.Row>
    </Grid>
  </Container>
);

export default ContainerBox;
