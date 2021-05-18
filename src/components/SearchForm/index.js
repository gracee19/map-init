import React from "react";
import {Grid, Search } from "semantic-ui-react";

const SearchForm = () => (
  <Grid>
    <Grid.Column width={3}>
      <Search
        placeholder="Search Country" 
        // loading={loading}
        // onResultSelect={(e, data) =>
        //   dispatch({ type: "UPDATE_SELECTION", selection: data.result.title })
        // }
        // onSearchChange={handleSearchChange}
        // results={results}
        // value={value}
      />
    </Grid.Column>
  </Grid>
);

export default SearchForm;
