import React from "react";
import { render } from "react-dom";

class Storepicker extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form action="" className="store-selector">
          <h2>Please enter a store name</h2>
          <input type="text" required placeholder="Store Name" />
          <button type="submit">Visit Store -></button>
        </form>
      </React.Fragment>
    );
  }
}

export default Storepicker;
