import { useEffect } from 'react'
import './App.css' 

function App() { 

  function checkEvenOdd(){
    useEffect(()=>{
      const num=12; 
    if(isNaN(num)){
      return -1;
    }else if(num%2==0){
      console.log("Even Number!")
      return 1;

    }else{
      console.log("Odd Number!")
      return 0;
    }
    },[num])
  }
//  const isEven = num%2==0;
  return (
    <>
       <h1>Hello world</h1> 

      {/* {isEven ? (<h1> The number is Even</h1> ):( <h1>The number is Odd</h1>)} */}
    </>
  )
}

export default App
