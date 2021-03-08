import React, { Component } from "react";
import "./App.css";
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  /* other custom settings */
});
class App extends Component {
  state = {
    hello: null,
  };

  componentDidMount() {
    // axiosInstance
    //   .get("/posts")
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));

    this.asynfunction()
  }

   asynfunction =async()=>{
    const  res= await fetch("https://jsonplaceholder.typicode.com/posts")
   const data= await res.json();
   console.log(data) 

  }
  render() {
    return (
      <div>{this.state.hello ? <div>{this.state.hello} </div> : null}</div>
    );
  }
}

export default App;
