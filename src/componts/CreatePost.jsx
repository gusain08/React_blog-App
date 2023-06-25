import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addDoc } from 'firebase/firestore'
import { collection } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
const CreatePost = ({isAuth}) => {
  const [title , setTitle] = useState("");
  const [postText , setPostText] = useState("");

  const  postCollection = collection(db,"post");
  let navigate = useNavigate();
  const createPostREf =  async ()=>{
    await addDoc(postCollection, {title, postText, author:{ name:auth.currentUser.displayName , id:auth.currentUser.uid} });
    navigate('/');
  }

  useEffect(()=>{
    if(!isAuth){
       navigate('/');
    }
  },[])
  return (
   <>
    <div className="post_page">
      <div className="create_post">
        <h5>Create Post</h5>
        <div className="inputGp">
      <label>Title :    </label>
        <input type="text"  placeholder='Title......' onChange={(e)=>{setTitle(e.target.value)}}/>
        </div>
        <div className="inputGp">
        <label>Post :</label>
        <textarea name="" id="" cols="30" rows="10" placeholder='Post....' onChange={(e)=>{setPostText(e.target.value)}}></textarea>
        </div>
        <button onClick={createPostREf}>Submit Post</button>
      </div>
    </div>
   </>
  )
}

export default CreatePost