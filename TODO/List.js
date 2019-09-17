import React, { Component } from "react";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.random()
    };
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo(id) {
    // console.log(id);
    this.props.handleDelete(id);
  }

  render() {
    const inserted = this.props.lit.map((item, index) => {
      return (
        <li
          className="list"
          key={index}
          onClick={() => {
            this.deleteTodo(item.id);
          }}
        >
          {item.todo}
        </li>
      );
    });

    return (
      <React.Fragment>
        <ul>{inserted}</ul>
      </React.Fragment>
    );
  }
}
