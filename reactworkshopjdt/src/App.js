import React from 'react'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    } 

    this.changeState = this.changeState.bind(this);
  }


  changeState() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  // componentDidMount(){
  //   alert("Component has mounted")
  // }

  // componentDidUpdate(){
  //   alert("Component has updated");
  // }

  render(){
    return (
      <div>
        <h1>Welcome {this.state.count}</h1>
        <button onClick = {this.changeState}>Change Button</button>
        <Title title = {"green"}></Title>
      </div>
    )
  }

}


class Title extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      title: this.props.title
    }
  }

    render(){
      return (
        <div>
          <h1>{this.state.title}</h1>
        </div>
      )
    }
  }





export default App

