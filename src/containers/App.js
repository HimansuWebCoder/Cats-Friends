import React, { Component } from "react";
import CardList from "../components/CardList";
// import { cats } from "./cats"
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";


// const state = {
// 	cats: cats,
// 	searchfield: ""
// }

class App extends Component {
	constructor() {
		super()
		this.state = {
			// cats: cats,
			cats: [],
			searchfield: ""
		}
		console.log("constructor");
	}

	componentDidMount() {
		// console.log("check");
		// this.setState({cats: cats});
		// console.log("componentDidMount");
		fetch("https://himansuwebcoder.github.io/api/cats.json")
		.then(response => {
			return response.json()
		})
		.then(cat => {
			this.setState({cats: cat});
		})
	}

   onSearchChange = (event) => {
   	this.setState({searchfield: event.target.value})
   	// const filterCats = this.state.cats.filter((cat) => {
   	// 	return cat.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
   	// })
     // console.log(event.target.value);
   	    // console.log(filterCats)
   }
   
   render() {
         // destructuring
   	   const {cats, searchfield} = this.state;
   	   const filterCats = cats.filter((cat) => {
   		      return cat.name.toLowerCase().includes(searchfield.toLowerCase());
       })

        // without destructuring
       //    	 const filterCats = this.state.cats.filter((cat) => {
   		 //      return cat.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
       // })
       console.log("render")
       // console.log(this.state.cats.length);
       // and instead this.state.cats.length using destructuring above
       // Usring If...else
       // if (!cats.length) {
       // 	return <h1>Loading </h1>
       // } else {
   	   //  return (
		   //   <div className="tc">
		   //   <h1 className="white sans-serif">Cats-Friends</h1>
		   //   <SearchBox searchChange={this.onSearchChange}/>
		   //   {/*<CardList cats={this.state.cats}/>*/}
		   //   <Scroll>
		   //   <CardList cats={filterCats}/>
		   //   </Scroll>
		   //   </div>
	     //    )
       // }
       // Using ternary operator ?
       return !cats.length? <h1>Loading</h1> : 
        (
        	<div className="tc">
		      <h1 className="white sans-serif">Cats-Friends</h1>
		      <SearchBox searchChange={this.onSearchChange}/>
		      {/*<CardList cats={this.state.cats}/>*/}
		      <Scroll>
		      <CardList cats={filterCats}/>
		      </Scroll>
		      </div>
        )
   }
}

// const App = () => {
// 	return (
// 		<div className="tc">
// 		<h1>Cats-Friends</h1>
// 		<SearchBox />
// 		<CardList cats={cats}/>
// 		</div>
// 	)
// }

// Then for optimized build run this command
// npm run build 

export default App;