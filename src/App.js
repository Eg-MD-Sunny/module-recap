import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
		{/* <Counter></Counter> */}
		<UserDataLoad></UserDataLoad>
    </div>
  );
}

// //Create Counter Component
// function Counter(){
// 	const [count, setCount] = useState(0)

// //Increase Handle	
// 	const handleIncrease = ()=>{
// 		let newValue = count + 1;
// 		setCount(newValue);
// 	}

// //Decrease Handle	
// 	const handleDecrease = ()=>{
// 		let newValue = count - 1;
// 		if(newValue>=0){
// 			setCount(newValue);
// 		} 
// 	}
// 	return (
// 		<div>
// 			<h1>Counter: {count}</h1>
// 			<button onClick={handleIncrease}>Increase</button>
// 			<button onClick={handleDecrease}>Decrease</button>
// 		</div>
// 	)
// }
function UserDataLoad(){
	const [userData, setUserData] = useState([])
	useEffect(()=>{
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(res=>res.json())
		.then(data=>setUserData(data))
	},[])
	return (
		<div>
			<h1>Data Load: {userData.length}</h1>
			{
				userData.map(uData=><Display name={uData.name}></Display>)
			}
		</div>
	)
}
function Display(props){
	return(
		<div>
			<h3>Name: {props.name}</h3>
		</div>
	)
}

export default App;
