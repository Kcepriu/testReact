import React, { Component } from "react";

class Counter extends Component {
  static defaultProps = {
    initialValue: 33,
  };

  static propTypes = {
    //
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = (event) => {
    console.log("Click Increment");
    //Якщо треба зробити асинхронний виклик, то треба зберегти значення  event
    // const { target } = target;

    console.log(event.target);

    // this.setState({
    //   value: 10,
    // });

    this.setState((prevState) => ({ value: prevState.value + 1 }));
  };

  handleDecriment = (event) => {
    console.log("Cleck Decrement");
    console.log(event.target);

    this.setState((prevState) => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>

        <div className="Counter_controls">
          <button type="button" onClick={this.handleIncrement}>
            Incr 1
          </button>
          <button type="button" onClick={this.handleDecriment}>
            Decr 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
