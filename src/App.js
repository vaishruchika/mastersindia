import { useEffect, useRef, useState } from 'react';
import './App.css';
import CodeSnippet from './CodeSnippet';
import data1 from './data.json';


function App() {
  const [search, setSearch]=useState ('');
  const [data, setData]=useState(data1);
  const field= useRef();

  const handleSubmit=()=>{
    setSearch(field.current.value.toLowerCase());
  }

  const filter=(search)=>{
    if (search==='') setData(data1);
    else{
    const newarr=data1.filter((item)=>item.name.toLowerCase().includes(search));
    setData(newarr);}
  }

  useEffect(()=>{
    filter(search);
  }
  ,[search])
  
  return (
    <div class='container'>
      <span></span><input type="text" ref={field} placeholder='Search for Javascript code'/><button type="submit" onClick={handleSubmit}>Submit</button>
    <div className="App">
    {data.length===0 && <h4 style={{color: "red"}}>No matching results found</h4>}
    {data.length!==0 && data.map((item )=> 
      <CodeSnippet key={item.id} name={item.name} snip={item.codeSnip}/>)}
    </div>
    </div>
  );
}

export default App;
