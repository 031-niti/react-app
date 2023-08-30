import React, {Component} from 'react'
import "../post.css"

export default class StateInClass extends Component {
  constructor(props){
    super(props);
    this.state = {
        id : "1",
        name : "Niti Surakongka",
        counter:0
    }
  }

    clickPlus = () => {
        this.setState({
        counter: this.state.counter + 1,
      });
  };

    clickMinus = () => {
        this.setState({
          counter: this.state.counter - 1,
      });
  };
  render() {
    return(
        <div>
            <h3>Name</h3>
            {this.state.name}
            <h3 className="Counter">Counter</h3>
            {this.state.counter}
            <div className="btn">
                <button onClick={this.clickPlus}>+</button>
                <button onClick={this.clickMinus}>-</button>
            </div>
            
        </div>
    )
  }
}
