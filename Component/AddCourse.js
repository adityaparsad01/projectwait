import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';

const AddCourse = ()=>{
  return(
    <>
    <h1 className="text-center my-3">Fill Course Details</h1>
    <Form >
    <FormGroup>
        <Label for="userId">Course Id</Label>
        <Input type="text" name="userId" id="userId" placeholder="Enter Here" />
      </FormGroup>

        <FormGroup>
        <Label for="Subtitle">Course Title</Label>
        <Input type="text" name="userId" id="Subtitle" placeholder="Enter Title Here" />
      </FormGroup>
    <FormGroup>
        <Label for="discription">Discription</Label>
        <Input type="textarea" name="text" id="text" style={{height:100}}/>
      </FormGroup>
      <Container className="text-center ">
      <Button color="success">Add Course</Button>
      <Button color="warning ml-3">Clear</Button>
      </Container>
    </Form>
    </>
  )
}
export default AddCourse