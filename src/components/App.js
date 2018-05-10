import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from '../sample-fishes';

class App extends React.Component {

  state = {
    fishes: {},
    order: {}
  };

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    })
  }

  addFish = fish => {
    // Get state
    const fishes = { ...this.state.fishes };
    // Add new fish to state
    fishes[`fish${Date.now()}`] = fish;
    // Set the new fishes obj to state
    this.setState({
      fishes
      // OR => 'fishes: fishes'
    });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
      </div>
    );
  }
}

export default App;
