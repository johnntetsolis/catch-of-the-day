import React from "react";
import { render } from "react-dom";
import { getFunName} from '../helpers';

class Storepicker extends React.Component {

  myInput = React.createRef();
  goToStore = (event) => {
    event.preventDefault();
    const storeName = this.myInput.value.value;
    this.props.history.push(`/store/${storeName}`);
  }

  render() {
    return (
      <React.Fragment>
        <form
            action=""
            className="store-selector"
            onSubmit={this.goToStore}>
          <h2>Please enter a store name</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}/>
          <button type="submit">Visit Store -></button>
        </form>
      </React.Fragment>
    );
  }
}

export default Storepicker;
