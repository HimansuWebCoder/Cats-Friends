import React from "react";

// we have learned about
// props
// state
// children
const Scroll = (props) => {
	// return <h1>hi</h1>
	// console.log(props);
	// return props.children;
	return (
	<div style={{overflowY: "scroll", border: "5px solid white", height: "500px"}}>
		{props.children}
	</div>
    )
};

export default Scroll;