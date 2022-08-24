// import Button from "./Button";
// import styles from "./App.module.css";
// import { useState, useEffect } from "react";

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue((prev) => prev+1);
//   const onChange = (event) => setKeyword(event.target.value);
//   // const iRunOnlyOnce = () => {
//   //   console.log("i run only once.");
//   // };
//   useEffect(() => {
//     console.log("I run only once.")
//   }, []);
//   useEffect(() => {
//     console.log("I run when 'keyword' changes.");
//   }, [keyword]);
//   useEffect(()=>{
//     console.log("I run when 'counter' changes");
//   }, [counter]);
//   useEffect(()=>{
//     console.log("I run when keyword & counter change")
//   }, [keyword, counter]);
//   return (
//     <div>
//       {/* <h1 className={styles.title}>Welcome back!</h1> */}
//       {/* <Button text={"Continue"}/> */}
//       <input 
//       value={keyword}
//       onChange={onChange} 
//       type="text" 
//       placeholder="Search here.." />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { useEffect, useState } from 'react';
function Hello(){
  // function byFn(){
  //   console.log("bye :(");
  // }
  // function hiFn(){
  //   console.log("create :)");
  //   return byFn;
  // }
  // useEffect(hiFn, []);
  useEffect(function (){
    console.log("hi :)");
    return function () {
      console.log("bye :(");
    };
  },[]);
  useEffect(()=>{
    console.log("hi :)");
    return () => console.log("bye :(");
  },[]);
  return <h1>Hello</h1>
}

function App(){
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);
  return (
    <div>
      {showing ? <Hello />:null}
      <button onClick={onClick}>{showing ? "Hide":"Show"}</button>
    </div>
  );
}

export default App;
