import React, { useState } from "react";
import BlogForm from "./BlogForm";
import { Card, Button } from "react-bootstrap";
import { postsDb } from '../firebase';
import {useAuth} from '../contexts/AuthContext';
import { useHistory } from "react-router-dom"



const NewBlogPage = () => {
  const initialFiledValues = { 
    title: '',
    description: '',
    author: '',
    date: '',
    url: ''
}
const [ values, setValues ] = useState({...initialFiledValues})
const [currentPostKey, setCurrentPostKey] = useState('')
const history = useHistory();

const deleteBlog =  () => {
  if(window.confirm("Are you sure to delete this record?")){
      postsDb.ref('posts').child(currentPostKey).remove()
      }     
  }
   
const [blogObject, setBlogObject] = useState({})
const {currentUser} = useAuth();

if (currentUser){
  return (
      <>
        <div className="container d-flex">
            <div className="col-6">
                <BlogForm 
                      values={values} setValues={setValues} 
                      initialFiledValues={initialFiledValues} 
                      setBlogObject={setBlogObject} 
                      currentPostKey={currentPostKey} 
                      setCurrentPostKey={setCurrentPostKey}
                />
            </div>
              <div className="col-5"> 
                         <Card className="article-card p-4">
                            <span style={{color: "#00cc00", fontSize: "1.1rem"}}>{currentPostKey ? "Blog Created Successfuly!!" : ""}</span> 
                                  <Card.Body>
                                      <Card.Img className="card-image-top" 
                                              width="100%"
                                              src= {blogObject.url}
                                              alt="blogPicture"
                                        />
                                        <Card.Title>Title: {blogObject.title}</Card.Title>
                                        <Card.Text>Description: {blogObject.description}</Card.Text>
                                        <Card.Text>Author: {blogObject.author}</Card.Text>
                                        <Card.Text>Date: {blogObject.date}</Card.Text>
                                        <Button className="btn-primary" onClick={() => setValues({...blogObject})}>Update</Button>
                                        <Button className="btn-danger ml-2" onClick={() => deleteBlog()}>Delete</Button>
                                  </Card.Body>
                             </Card> 
               </div>
        </div>       
      </>   
  )
} else{
  history.push('/signin')
    return <div></div>
}
}
export default NewBlogPage