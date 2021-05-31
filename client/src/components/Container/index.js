import React from "react";
// import 'semantic-ui-css/semantic.min.css'
import { Container, Divider, Grid } from "semantic-ui-react";
import BasicMap from "../Map/basic-map";
import SearchForm from "../SearchForm";
import Footer from "../Footer";
import Plan from "../Plan";

const ContainerBox = () => (
  <Container fluid>
    <Grid columns="two" divided>
      <Grid.Row>
        <Grid.Column width={3}>
          <SearchForm />
          <Divider horizontal></Divider>
          <Plan />
        </Grid.Column>
        <Grid.Column width={12}>
          <BasicMap />
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Footer />
  </Container>
);

export default ContainerBox;
