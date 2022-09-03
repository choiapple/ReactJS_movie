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

// import React from 'react';
// import { useEffect, useState } from 'react';
// function Hello(){
//   // function byFn(){
//   //   console.log("bye :(");
//   // }
//   // function hiFn(){
//   //   console.log("create :)");
//   //   return byFn;
//   // }
//   // useEffect(hiFn, []);
//   useEffect(function (){
//     console.log("hi :)");
//     return function () {
//       console.log("bye :(");
//     };
//   },[]);
//   useEffect(()=>{
//     console.log("hi :)");
//     return () => console.log("bye :(");
//   },[]);
//   return <h1>Hello</h1>
// }

// function App(){
//   const [showing, setShowing] = useState(false);
//   const onClick = () => setShowing(prev => !prev);
//   return (
//     <div>
//       {showing ? <Hello />:null}
//       <button onClick={onClick}>{showing ? "Hide":"Show"}</button>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';

// function App() {
//   const [toDo, setToDo] = useState("");
//   const [toDos, setToDos] = useState([]);
//   const onChange = (event) => setToDo(event.target.value);
//   const onSubmit = (event) => {
//     event.preventDefault()
//     if(toDo === ""){
//       return;
//     }
//     setToDos((currentArray) => [toDo, ...currentArray]);
//     setToDo("");
//   };
//   return (
//     <div>
//       <h1>My To Dos({toDos.length})</h1>
//       <form onSubmit={onSubmit}>
//       <input 
//       onChange={onChange}
//       value={toDo} 
//       type="text" 
//       placeholder="Write your to do..." 
//       />
//       <button>Add To Do</button>
//       </form>
//       <hr />
//       <ul>
//       {toDos.map((item, index)=>(
//       <li key={index}>{item}</li>
//       ))}
//       </ul>
     
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <h1>The Coins!</h1>
      {loading ? <strong>Loading...</strong>: null}
    </div>
  );
}

export default App;
