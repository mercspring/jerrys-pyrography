import React from 'react'

export default function Arrow({direction, onClick, style}) {
	console.log("rendering left arrow");
	if(direction === "left"){
	return (
		<div onClick={onClick} style={{position: "fixed", left:0, fontSize:"30pt", width:"100px",backgroundColor:"red"}}>
		❮ 	
		</div>
	)

	} else {
	return (
		<div onClick={onClick} style={[style, {position: "fixed", left:0, fontSize:"30"}]}>
		❯ 	
		</div>
	)

	}
}
