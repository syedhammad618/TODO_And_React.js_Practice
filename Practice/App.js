// import React, { Component } from "react";

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h1>Hello</h1>
//         <h1>love you</h1>
//       </React.Fragment>
//     );
//   }
// }
// export default App;
// import React from "react";

// function App(props){
//   return(

//     <h1>hello {props.name}</h1>
//   )
// }

// ==========props use in function=========
// const App = props => {
//   return <h1>Hello {props.name}</h1>;
// };
// export default App;

// =====props use in class=======
// import React, { Component } from "react";

// class Student extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello {this.props.name}</h1>
//       </div>
//     );
//   }
// }
// export default Student;
// ==========composing components=========
// import React from "react";
// import Student from "./Student";
// const App = () => {
//   return (
//     <div>
//       <Student name="Hammad"/>
//       <Student name="Maadi"/>
//     </div>
//   );
// };
// export default App;

// ========JSX=====
// import React from "react";

// //function call in JSX
// // function show(name) {
// //   return name;
// // }

// // const el = <h1>Hello {show("hammad")}</h1>;

// import "./App.css";

// let user={
//   firstname:"maadi"
// }
// const el = <h1 className="bg">Hello {user.firstname}</h1>

// export default el;

// ===========proptypes=======
// import React, { Component } from "react";
// import pt from "prop-types";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>hello{this.props.name}</h1>
//         <h2>age is {this.props.age}</h2>
//       </div>
//     );
//   }
// }
// App.propTypes = {
//   name: pt.string,
//   age: pt.number
// };
// App.defaultProps={
//   name:"Maadi"
// }
// export default App;

// ====States=====
// it is private and fully controlled by the component.
// we can create state only in class component.
// it is possible to update the state
// import React, { Component } from "react";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: {
//         name: "hammad",
//         age: "21"
//       }
//     };
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello,{this.state.user["name"]}</h1>
//         <h2>My Age Is:{this.state.user["age"]}</h2>
//       </div>
//     );
//   }
// }
// export default App;

// =============STATE CONTINUE=========
// import React, { Component } from "react";
// class App extends Component {
//   constructor(props) {
//     super(props);
//     {
//       this.state = {
//         name: "MAADi",
//         age:this.props.age
//       };
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>
//           My name is{this.state.name}, And my age is {this.props.age}
//         </h1>
//       </div>
//     );
//   }
// }
// export default App;

// import React, { Component } from "react";
// class App extends Component {
//   constructor(props) {
//     super(props);
//     {
//       this.state = {
//         name: "MAADi",
//         age:this.props.age
//       };
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>
//           My name is{this.state.name}, And my age is {this.state.age}
//         </h1>
//       </div>
//     );
//   }
// }
// export default App;

// ===========handler using regular function
// import React, { Component } from "react";
// class App extends Component {
//   constructor(props) {
//     super(props);

//     {
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     console.log("Button clicked", this);
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>click me</button>
//       </div>
//     );
//   }
// }
// export default App;

// ==========Function HANDLER ==========
// import React from "react";
// function App() {
//   const handleClick = () => {
//     console.log("clicked");
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>click here</button>
//     </div>
//   );
// }
// export default App;

// ===========event handler========
// import React from "react";
// let App = () => {
//   const handleClick = e => {
//     e.preventDefault();
//     console.log("Button Clicked");
//   };
//   return (
//     <a href="http://www.Google.com" onClick={handleClick}>
//       click here
//     </a>
//   );
// };
// export default App;

// =========setState==========

// import React, { Component } from "react";
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "MAADI",
//       age: this.props.age
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState({
//       name:"hammad",
//       age:"20"
//     })
//     console.log("BUTTON CLICK");
//   }
//   render() {
//     return (
//       <div>
//         <h1>
//           My name is {this.state.name}, And my age is {this.state.age}
//         </h1>
//         <button onClick={this.handleClick}>click me</button>
//       </div>
//     );
//   }
// }

// export default App;

// ======SETSTATE 2ND SYNTEX
// import React, { Component } from "react";
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "MAADI",
//       age: this.props.age
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState(function(state,props){
//       return  state.name="hammad",
//               state.age="twenty_one"

//     })
//     console.log("BUTTON CLICK");
//   }
//   render() {
//     return (
//       <div>
//         <h1>
//           My name is {this.state.name}, And my age is {this.state.age}
//         </h1>
//         <button onClick={this.handleClick}>click me</button>
//       </div>
//     );
//   }
// }

// export default App;

// import React, { Component } from "react";
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: 2,
//       name: "hammad"
//     };
//   }
//   handleClick(id) {
//     console.log(id);
//   }

// handleClickArg() {
//   this.handleClick(this.state.id);
// }

//   render() {
//     return (
//       <div>
//         <h1>HEllo</h1>
//         <button onClick={this.handleClick.bind(this, this.state.id)}>
//           click me
//         </button>
//       </div>
//     );
//   }
// }
// export default App;

// =======USESTATE================

// import React, { useState } from "react";

// function App() {
//   const name = useState("Hammad");
//   const firstname = name[0];
//   console.log(firstname);
//   const handleClick = () => {
//     const secondname = name[1]("MAADI");
//     console.log(secondname);
//   };

//   return (
//     <React.Fragment>
//       <h1>Hello, {firstname}</h1>
//       <button type="button" onClick={handleClick}>
//         click me
//       </button>
//     </React.Fragment>
//   );
// }
// export default App;

// ==========USEEFFECT===========
// import React, { useState } from "react";
// function App() {
//   const count = useState(0);
//   const init = count[0];

//   function handleClick() {

//     count[1](1 + init);
//   }
//   return (
//     <React.Fragment>
//       <h1>count up {count}</h1>
//       <button type="button" onClick={handleClick}>
//         increment
//       </button>
//     </React.Fragment>
//   );
// }
// export default App;

// ========hooks using SHort syntex============

// import React, { useState } from "react";
// function App() {
//   const [count, setCount] = useState(0);
//   const [count_1, setCount_1] = useState(10);
//   function increment() {
//     setCount(1 + count);
//   }
//   function decrement() {
//     setCount_1(count_1-1)
//   }
//   return (
//     <React.Fragment>
//       <h1>count up {count}</h1>
//       <button type="button" onClick={increment}>
//         increment
//       </button>

//       <h1>count up {count_1}</h1>
//       <button type="button" onClick={decrement}>
//         decrement
//       </button>
//     </React.Fragment>
//   );
// }
// export default App;

// ===========useState and UseEffect===========
// import React, { useState, useEffect } from "react";
// function App() {
//   const [count, setCount] = useState(0);
//   const [count_1, setCount_1] = useState(10);
//   function increment() {
//     setCount(1 + count);
//   }
//   function decrement() {
//     setCount_1(count_1 - 1);
//   }

//   return (
//     <React.Fragment>
//       <h1>count up {count}</h1>
//       <button type="button" onClick={increment}>
//         increment
//       </button>

//       <h1>count up {count_1}</h1>
//       <button type="button" onClick={decrement}>
//         decrement
//       </button>
//     </React.Fragment>
//   );
// }
// export default App;

// import React from "react";
// import Usecustomcounter from "./custom";
// import Changename from './Namechange'

// function App() {
//   let info=Changename()
//   const data = Usecustomcounter();
//   return (
//     <React.Fragment>
//       <h1>my name is : {info.name}</h1>
//       <button type="button" onClick={info.Usenamechanger}>changer</button>
//       <h1>count up: {data.count}</h1>
//       <button type="button" onClick={data.handleincrement}>
//         click here
//       </button>
//     </React.Fragment>
//   );
// }
// export default App;
// ==============webpage=========
// import React, { Component } from "react";
// import Guest from "./Guest";
// import User from "./User";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Islogin: true
//     };
//   }

//   render() {
//     const Islogin = this.state.Islogin ? (
//       <Guest
//         ClickData={e => {
//           this.setState({
//             Islogin: false
//           });
//         }}
//       ></Guest>
//     ) : (
//       <User
//         ClickData={e => {
//           this.setState({ Islogin: true });
//         }}
//       ></User>
//     );
//     return <div>{Islogin}</div>;
//   }
// }

// export default App;

// ==========ARRAY using props=======

// import React, { Component } from "react";

// export default class App extends Component {
//   render() {
//     let arr = this.props.number;

//     let newarr = arr.map(num => {
//       return <li>{num * 2}</li>;
//     });
//     console.log("Oldest Array", arr);
//     console.log("new Array", newarr);

//     return (
//       <React.Fragment>
//         <ul>{newarr}</ul>
//       </React.Fragment>
//     );
//   }
// }

// array using state
// import React, { Component } from "react";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [
//         { id: 101, name: "Hammad", password: "217" },
//         { id: 102, name: "Huzaifa", password: "219" },
//         { id: 103, name: "Fahim", password: "2109" }
//       ]
//     };
//   }
//   render() {
//     const info = this.state.users.map(user => {
//       return (
//         <div key={user.id}>
//           ID: {user.id},,NAME:{user.name},,PASSWORD: {user.password}
//         </div>
//       );
//     });
//     return <React.Fragment>{info}</React.Fragment>;
//   }
// }

// ==========CSS IN LINE+++++++++++++++
// import React, { Component } from "react";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       change: false
//     };
//   }

//   render() {
//     const btnStyle = {
//       color: "yellow",
//       backgroundColor: "blue"
//     };
//     const change = this.state.change;

//     if (change) {
//       btnStyle.backgroundColor = "pink";
//     }
//     return (
//       <div>
//         <button
//           style={btnStyle}
//           onClick={e => {
//             this.setState({
//               change: true
//             });
//           }}
//         >
//           button
//         </button>
//       </div>
//     );
//   }
// }

// =================HOW TO HANDLE VALUE IN FORM======================
//     import React, { Component } from "react";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "hammad",
//       password: "password"
//     };
//     this.handlechange = this.handlechange.bind(this);
//   }
//   handlechange(e) {
//     // this.setState({ [e.target.name]: e.target.value });
//     // console.log(e.target.name)
//     const value =
//       e.target.name === "password"
//         ? e.target.value.toUpperCase()
//         : e.target.value;
//     this.setState({ [e.target.name]: value});
//   }

//   render() {
//     return (
//       <div>
//         <form>
//           <label>
//             Name:
//             <input
//               type="text"
//               name="name"
//               value={this.state.name}
//               onChange={this.handlechange}
//             />
//           </label>
//           <br />
//           <br />
//           <label>
//             Password:
//             <input
//               type="text"
//               name="password"
//               value={this.state.password}
//               onChange={this.handlechange}
//             ></input>
//           </label>
//         </form>
//       </div>
//     );
//   }
// }

// ==========HOW TO HANDLE SUBMIT BUTTON IN FORM===========
// import React, { Component } from "react";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       password: ""
//     };
//     this.handlechange = this.handlechange.bind(this);
//     this.handlesubmit = this.handlesubmit.bind(this);
//   }
//   handlechange(e) {
//     this.setState({ [e.target.name]: e.target.value });
//   }
//   handlesubmit(e) {
//     e.preventDefault();
//     //   console.log(e.target[1].value);
//     console.log(this.state.name);
//     console.log(this.state.password);
//     // this.setState({[e.target.value]:null})
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handlesubmit}>
//           <label>
//             Name:
//             <input
//               type="text"
//               name="name"
//               value={this.state.name}
//               onChange={this.handlechange}
//             />
//           </label>
//           <br />
//           <br />
//           <label>
//             Password:
//             <input
//               type="text"
//               name="password"
//               value={this.state.password}
//               onChange={this.handlechange}
//             ></input>
//           </label>
//           <input type="submit" value="submit" />
//         </form>
//       </div>
//     );
//   }
// }

// import React, { Component } from "react";

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: ""
//     };
//     this.textinput = React.createRef();
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleSubmit(e) {
//     e.preventDefault();
//     console.log(this.textinput.current.value);
//     this.setState({ value: this.textinput.current.value });
//     this.textinput.current.value = "";
//   }
//   componentDidMount() {
//     this.textinput.current.focus();
//   }

//   render() {
//     return (
//       <div>
//         <h1>You type:{this.state.value}</h1>
//         <form onSubmit={this.handleSubmit}>
//           <input type="text" ref={this.textinput} name="value" />
//           <input type="submit" value="submit" />
//         </form>
//       </div>
//     );
//   }
// }
