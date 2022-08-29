import React from "react";

// export default function App(props) {
//     return (
//         <h1>{props.type} component</h1>
//     )
// }

export default class App extends React.Component {
  render() {
    return <h1>{this.props.type} component</h1>;
  }
}

/**
 * Hooks are a new addition to React 16.8. They let you use state and other React features without writing a class.
If you write a function component and realise you need to add some state to it, previously you had to convert it to 
a class component. Now you can use a Hook inside the existing function component to manage the state and no need to 
convert it into the Class component. Instead of Classes, one can use Hooks in the Functional component as this is a 
much easier way of managing the state. Hooks can only be used in functional components, not in-class components.
 */
