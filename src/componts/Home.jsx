import React, { useEffect, useState } from 'react'
import { db } from '../firebase-config';
import  {getDocs, collection , deleteDoc , doc} from "firebase/firestore";

const Home = () => {
  const [postList , setPostList] = useState([]);
  const  postCollection = collection(db,"posts");

  useEffect(()=>{
    const getpost = async () =>{
      const data = await getDocs(postCollection);
      setPostList(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
      console.log(data);
    }
    getpost();
  },[]);

    const deletePost = async (id) =>{
      const postDoc = doc(db, "posts", id);
      await deleteDoc(postDoc);
      alert("Are You Sure Delete This Post", +  id)
    }

  return (
    <>

    <div className="Homepage">
      {
        postList.map((posts, index)=>{
          return(
            <div className="posts" key={index}>
              <h1>
             {posts.title}
              </h1>
              <div className="delete_icon">
                <button onClick={()=>deletePost(posts.id)}>X </button>
              </div>
            </div>
          );
        })
      }
    </div>
    </>
  )
}

export default Home