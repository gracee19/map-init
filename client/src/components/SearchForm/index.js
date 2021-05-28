import React from "react";
import {Grid, Search } from "semantic-ui-react";

const SearchForm = (props) => (
  <Grid>
    <Grid.Column width={3}>
      <Search
      // className="search"
        // placeholder="Search Country"
        // loading={loading}
        // onResultSelect={(e, data) =>
        //   dispatch({ type: "UPDATE_SELECTION", selection: data.result.title })
        // }
        // onSearchChange={data.handleSearchChange}
        // results={results}
        // value={value}
        // onSearchChange={(e, data)=> console.log(data.value)}
      />
    </Grid.Column>
  </Grid>
);

export default SearchForm;
