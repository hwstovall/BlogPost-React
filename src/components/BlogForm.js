import React, { Fragment,useState } from "react"
import { Card, Form, Button} from "react-bootstrap"

const BlogForm = (props) => {

  const initialFiledValues = { 
      title: '',
      description: ''
  }
let [ values, setValues ] = useState(initialFiledValues)

const handleInputChange = e => {
   let { name, value } = e.target
   setValues({
     ...values,
     [name]: value
   })
}
const handleFormSubmit = e => {
    e.preventDefault();
    props.addOrUpdateBlog(values)
    
}

  return (
    <Fragment>
    <div className="container" data-spy="scroll">
        {/* {error && <Alert variant="danger">{error}</Alert>}  */}
        <h1 className="text-center">Create Your New Blog</h1>
      <Card className="article-card">
          <Card.Body>
            <Form  onSubmit={handleFormSubmit}>
                <Form.File.Input />
                <Form.Control className="card-image-top" 
                        width="100%"
                        src=""
                        alt="Card Image"/>
                  <Form.Group>
                      <Form.Label>Title</Form.Label>
                      <Form.Control type="text" value={values.title} placeholder="title" 
                            name="title" onChange={handleInputChange}/>
                  </Form.Group>
                   <Form.Group>
                      <Form.Label>Description</Form.Label>
                        <Form.Control type="text" value={values.description} placeholder="description" 
                            name="description" onChange={handleInputChange}
                         />
                  </Form.Group> 
                  <Form.Group>
                  </Form.Group>             
                  <Button className="w-100" type="submit"
                      style={{backgroundColor: "#00cc00", borderRadius: "15px"}}>
                      Publish
                  </Button>
              </Form>
        </Card.Body>
      </Card>
     
  </div>
    </Fragment>
  )
}
export default BlogForm;