import React from "react";
import Card from "./Card";

const CardList = ({ cats }) => {
	// const cardComponent = cats.map((cat, i) => {
	// 	return <Card 
	// 	           key={i}  
	// 	           id={cat.id} 
	// 	           name={cat.name} 
	// 	           greet={cat.greet}/>
	// })

	// return (
	// 	<div>
	// 		{cardComponent}
	// 	</div>
	// )

	// or 
       
       return (
       	  <div>
       	  	{
       	  	cats.map((cat, i) => {
		        return (
		        <Card
		           key={i}  
		           id={cat.id} 
		           name={cat.name} 
		           greet={cat.greet}
		           />
		           )
	           })
       	  	}
       	  </div>
      )

	// return (
    //   <div>
    //     <Card id={cats[0].id} name={cats[0].name} greet={cats[0].greet}/>
    //     <Card id={cats[1].id} name={cats[1].name} greet={cats[1].greet}/>
    //     <Card id={cats[2].id} name={cats[2].name} greet={cats[2].greet}/>
    //     <Card id={cats[3].id} name={cats[3].name} greet={cats[3].greet}/>
    //     <Card id={cats[4].id} name={cats[4].name} greet={cats[4].greet}/>
    //     <Card id={cats[5].id} name={cats[5].name} greet={cats[5].greet}/>
    // </div>
	// );
}

export default CardList;