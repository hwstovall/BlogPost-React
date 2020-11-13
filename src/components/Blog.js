import React, {Component, Fragment} from 'react';
import { Button } from 'react-bootstrap';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Badge} from "reactstrap";
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
    // componentWillUnmount(){
    //     postsDb.ref().posts().off();
    // }

render(){
    return(
    <Fragment>
        <div className="container" data-spy="scroll">
            <h1 className="text-center">My Blogs</h1>
                {this.state.postsList.map(post =>(
                <Card className="article-card">  
                    <CardImg className="card-image" 
                        top
                        width="100%"
                        src="https://placeimg.com/325/180/animals"
                        alt="Card Image"
                    />
                <CardBody className="card-body">
                    <CardTitle className="card-title" key={post.title}>
                        Title: {post.title}
                    </CardTitle>
                    <CardSubtitle className="card-sub-title" key={post.description}>
                        <Badge className="article-label">
                            Topic: {post.description}
                        </Badge>
                        <Button>Read More...</Button>
                    </CardSubtitle>
                </CardBody>     
            </Card>
               ))}; 
        </div>
     </Fragment>
) 
  }
}
                
export default BlogPage;