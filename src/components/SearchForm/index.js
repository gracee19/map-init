import React from "react";
// import Search from 'semantic-ui-react';

const Search = () => (
    <div className="ui search">
        <div className="ui icon input">
            <input className="prompt" type="text" placeholder="Search countries..."/>
            <i className="search icon">
            </i>
        </div>
        <div className="results"></div>
    </div>
);

export default Search;