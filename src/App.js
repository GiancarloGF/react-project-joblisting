import React, {useState,useEffect} from 'react';

import HeaderSearch from './components/HeaderSearch'
import JobItem from './components/JobItem'
import './css/App.css';
import data from './data.js'

function App() {

  let [display, setDisplay]=useState(data);
  let [tags, setTags]=useState([]);
  console.log(tags)
  useEffect(() => {
    // console.log('hola')
    if(tags.length!==0){
      let copyTags=[...tags];
      // let copyDisplay=[...display];
      let arrToDisplay=[];
  
      for(let i of copyTags){
        let arrToFilter=arrToDisplay.length===0?[...display]:arrToDisplay;
        arrToDisplay=[...arrToFilter.filter(obj=>{
          let arrOfTags=[obj.role, obj.level, ...obj.languages, ...obj.tools]
          return arrOfTags.includes(i)
        })]
      }
      setDisplay(arrToDisplay)
    }else{
      setDisplay(data)
    }
  
    // return () => {
    //   // cleanup
    // }
  }, [tags]);

  let addTag = (e) => {
    // console.log(e.target.innerHTML)
    setTags([...tags, e.target.innerHTML])
    // tags=[...tags, e.target.innerHTML]
    // console.log(tags)
  }

  let clear=()=>{
    setTags([]);
    // setDisplay(display)
  }

  let removeTag= (e) => {
    let tagToClose=e.target.parentElement.parentElement.childNodes[0].innerText;
    // console.log(tagToClose)
    // let currTags=tags.filter(i=>!i===tagToClose);
    // console.log(tags.filter(i=>i!==tagToClose))
    setTags([...tags.filter(i=>i!==tagToClose)]);
    setDisplay(data)
  }

  return (
    <div className="App">

      <HeaderSearch removeTag={removeTag} clear={clear} tags={tags}/>

      <div className="jobItems__container">
        {
        display.map(i=>{
          return <JobItem key={i.id} item={i} addTag={addTag} />
        })}
      </div>

    </div>
  );
}

export default App;
