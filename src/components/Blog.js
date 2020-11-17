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
            <div className="d-flex flex-wrap">
            {this.state.postsList.map(post =>(
                <Card className="article-card">  
                    <CardImg className="card-image-top" 
                        width="100%"
                        src={post.url}
                        alt="blogPicture"
                    />
                <Card.Body className="card-body">
                    <Card.Title className="card-title" key={post.title}>
                           <i>Title:</i>{post.title}
                    </Card.Title>
                    <Card.Text className="card-text" key={post.description}>
                            <i>Description:</i> {post.description}
                    </Card.Text>
                    <Card.Text className="card-text" key={post.author}>
                            <i>Author: </i>{post.author}
                    </Card.Text>
                    <Card.Text className="card-text" key={post.publish}>
                            <i>Date: </i>{post.date}
                    </Card.Text>
                </Card.Body>     
            </Card>
               ))}; 
        </div>
        </div>
     </Fragment>
) 
  }
}
                
export default BlogPage;