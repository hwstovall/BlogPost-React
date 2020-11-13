import React, { useState, useEffect} from "react";
import { postsDb } from '../firebase'
import BlogForm from "./BlogForm";

const NewBlogPage = () => {

  // const [currentBlogObjects, setCurrentBlogObjects] = useState({})

  // useEffect(() => {
  //     postsDb.ref().child('posts').on('value', snapshot =>{
  //         if (snapshot.val() != null)
  //          setCurrentBlogObjects({
  //               ...snapshot.val()
  //           })
  //     })
  // }, [])

 const addOrUpdateBlog = obj => {
      postsDb.ref().child('posts').push(
        obj, err => {
          if (err)
            console.log(err)
        } 
      )
  }

  return (
      <>
        <div className="container d-flex" data-spy="scroll">
            <div className="card col-5">
                <BlogForm  addOrUpdateBlog={addOrUpdateBlog}/>
            </div>
                 <hr/>
            <div className="card col-5">
                  <h1 className="text-center">New Blog Created!</h1>
                <div className="article-card mr-4"> 
                        <img className="card-image-top" 
                            width="100%"
                            src="https://placeimg.com/325/180/animals"
                            alt="post File"
                        />
                      <div className="card-body">
                            <h5 className="card-title">Title: </h5>
                            <p className="card-text">Description:</p>
                      </div> 
                          <button className="btn btn-primary ml-4">Update</button>
                          <button className="btn btn-danger ml-4">Delete</button>
                 </div>               
            </div>        
                {/* <div>           
                  {
                      Object.keys(currentBlogObjects).map(id => {
                        return <div>
                                  <div>{currentBlogObjects[id].title}</div>
                                  <div>{currentBlogObjects[id].description}</div>
                                  <button className="btn-primary">{currentBlogObjects[id]}Update</button>
                                  <button className="btn-danger">{currentBlogObjects[id]}Delete</button>
                            
                              </div>
                           })          
                  } 
            </div> */}
        </div>       
      </>   
  )
}
export default NewBlogPage