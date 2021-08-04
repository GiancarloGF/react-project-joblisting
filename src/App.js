import React, {useState,useEffect} from 'react';
import HeaderSearch from './components/HeaderSearch'
import JobItem from './components/JobItem'
import './css/App.css';
import data from './data.js'

function App() {

  let [display, setDisplay]=useState(data);
  let [tags, setTags]=useState([]);
  
  useEffect(() => {

    if(tags.length!==0){

      let copyTags=[...tags];

      let arrToDisplay=[];
  
      for(let i of copyTags){ //1️⃣
        let arrToFilter=arrToDisplay.length===0?[...display]:arrToDisplay;
        arrToDisplay=arrToFilter.filter(obj=>{
          let arrOfTags=[obj.role, obj.level, ...obj.languages, ...obj.tools];
          return arrOfTags.includes(i)
        })
      }
      setDisplay(arrToDisplay)
    }
  
    // return () => {

    // }
  }, [tags]);

  let addTag = (e) => {
    if(!tags.includes(e.target.innerHTML)) setTags([...tags, e.target.innerHTML])
  }

  let clear=()=>{
    setTags([])
    setDisplay(data)
  };

  let removeTag= (e) => {          //2️⃣
    let tagToClose=e.target.parentElement.parentElement.childNodes[0].innerText; 
    setTags([...tags.filter(i=>i!==tagToClose)]); 
    setDisplay(data);
  }

  return (
    <div className="app">

      <HeaderSearch removeTag={removeTag} clear={clear} tags={tags}/>

      <div className="jobItems__container">
        {
        display.map(i=>{
          return <JobItem key={i.id} item={i} addTag={addTag} />
        })}
      </div>
      <h5>by: Giancarlo Guerra 2021 <span className="heart">♥</span> </h5>

    </div>
  );
}

export default App;
