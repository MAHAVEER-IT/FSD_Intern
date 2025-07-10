import React,{useState,useEffect} from 'react'
import Card from './Card';


export default function InputToCard() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [content, setContent] = useState({title, desc});

  const handleClick = () => {
    setContent({title, desc});
    setTitle('');
    setDesc('');
  }

  useEffect(()=>{
    console.log("This will run only once when the component mounts");
  },[]);

  return (
    <div>
      <label htmlFor='title'>Title: </label>
      <input type="text" placeholder="Enter Title" id='title' name='title' value={title} onChange={e => setTitle(e.target.value)}/>
      <label htmlFor='desc'>Description: </label>
      <input type ="text" placeholder="Enter Desc" id='desc'  name='desc' value={desc} onChange={e => setDesc(e.target.value)} />
      <button onClick={()=>handleClick()}>Add</button>
      <Card title = {content.title} desc = {content.desc}/>
    </div>
  )
}

