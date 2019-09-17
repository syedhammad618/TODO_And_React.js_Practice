// import React, { Component } from "react";
// import List from "./List";
// import { isNull } from "util";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: "",
//       str: "",
//       items: []
//     };
//     this.list_handler = this.list_handler.bind(this);
//     this.value_handler = this.value_handler.bind(this);
//   }

//   value_handler(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }
//   list_handler(e) {
//     if (this.state.str == "") {
//       alert("write something please");
//     } else {
//       var str = this.state.str;
//       const items = this.state.items;
//       items.push(str);

//       this.setState({ items });
//       // this.setState({[this.state.value]:""
//       // })

//       console.log(items);
//     }
//   }

//   render() {
//     return (
//       <div>
//         <input type="text" name="str" onChange={this.value_handler} />
//         <button onClick={this.list_handler}>Add</button>
//         <br />
//         <br />
//         <List lit={this.state.items} />
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import List from "./List";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.textinput = React.createRef();
    this.value_handler = this.value_handler.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  value_handler(e) {
    e.preventDefault();
    if (
      this.textinput.current.value == "" ||
      this.textinput.current.value == " "
    ) {
      alert("please type something");
    } else {
      e.preventDefault();
      this.setState({
        items: [
          ...this.state.items,
          { id: Math.random(), todo: this.textinput.current.value }
        ]
      });
      this.textinput.current.value = "";
    }
  }
  handleDelete(id) {
    const newTodo = this.state.items.filter(todo => {
      return todo.id !== id;
    });
    // console.log(id);

    this.setState({
      items: newTodo
    });
  }
  componentDidMount() {
    this.textinput.current.focus();
  }

  render() {
    return (
      <div>
        <form className="formedit" onSubmit={this.value_handler}>
          <div>
            <input
              type="text"
              name="str"
              ref={this.textinput}
              id={this.state.id}
            />
            <input className="button" type="submit" value="Add" />
          </div>
        </form>
        <List lit={this.state.items} handleDelete={this.handleDelete} />
      </div>
    );
  }
}
