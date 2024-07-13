import React from "react";


// const Card = (props) => {
//     const {name, greet, id} = props;
//     return (
//      <div className="bg-light-black dib br3 pa3 ma2 grow shadow-5 ">
//         <img alt="robots" src={`https://robohash.org/set_set4/bgset_bg1/${id}?size=200x200`} />
//      	<div>
//      		<h2 className="bg-light-blue br2 pa1 i tc white grow">{name}</h2>
//      		<p className="bg-green tc white b pa1 br2">{greet}</p>
//      	</div>b
//      </div>
// 	)
// }

// or 

const Card = ({name, greet, id}) => {
    return (
     <div className="bg-light-yellow dib br3 pa3 ma2 grow shadow-5">
        <img alt="robots" src={`https://robohash.org/set_set4/bgset_bg1/${id}?size=200x200`} />
        <div>
            <h2 className="bg-light-purple br2 pa1 i tc white grow">{name}</h2>
            <p className="bg-orange tc white b pa1 br2">{greet}</p>
        </div>
     </div>
    )
}

export default Card;