import React from "react";

import Datamaps from "../Datamaps";
import Example from "../Examples";

export default class BasicMap extends React.Component {
  render() {
    return (
      <Example>
        <Datamaps
          responsive
          geographyConfig={{
            popupOnHover: true,
            highlightOnHover: true,
          }}
          fills={{
            defaultFill: "lightgreen",
          }}
        />
      </Example>
    );
  }
}
