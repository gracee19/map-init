import React from "react";
// import 'semantic-ui-css/semantic.min.css'
import {Container,  Grid} from 'semantic-ui-react';
import BasicMap from "../Map/basic-map";
import Search from "../SearchForm";

const ContainerBox = () => (
  <Container>
    <Grid columns="two" divided>
        <Grid.Row columns="two" divided>
        <Grid.Column width={3}><Search/></Grid.Column>
        <Grid.Column width={13}><BasicMap/></Grid.Column>
        </Grid.Row>
    </Grid>
  </Container>
);

export default ContainerBox;
