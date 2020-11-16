import React, {Component, Fragment} from 'react';
import { Card, CardImg } from "react-bootstrap";
import '../App.css';
import {postsDb} from '../firebase'

class BlogPage extends Component {

        state = {
            postsList: []
        }

    componentDidMount(){
       postsDb.ref('posts').on("value", snapshot => {
            let postlist = [];
            snapshot.forEach(snap =>{
                postlist.push(snap.val());
            })
            this.setState({postsList: postlist})
        })
    }

render(){
    return(
    <Fragment>
        <div className="container">
            <h1 className="text-center">My Blogs</h1>
            {this.state.postsList.map(post =>(
                <Card className="article-card">  
                    <CardImg className="card-image-top" 
                        width="100%"
                        src={post.url}
                        alt="blogPicture"
                    />
                <Card.Body className="card-body">
                    <Card.Title className="card-title" key={post.title}>
                           Title: {post.title}
                    </Card.Title>
                    <Card.Text className="card-text" key={post.description}>
                            Description: {post.description}
                    </Card.Text>
                    <Card.Text className="card-text" key={post.author}>
                            Author: {post.author}
                    </Card.Text>
                    <Card.Text className="card-text" key={post.publish}>
                            Publish: {post.publish}
                    </Card.Text>
                </Card.Body>     
            </Card>
               ))}; 
        </div>
     </Fragment>
) 
  }
}
                
export default BlogPage;