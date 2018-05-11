import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

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

  addToOrder = key => {
    // Copy state
    const order = { ...this.state.order };
    // Add to order or update
    order[key] = order[key] + 1 || 1;
    // Update state
    this.setState({ order });
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
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)}
          </ul>
        </div>

        <Order />

        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>

      </div>
    );
  }
}

export default App;
