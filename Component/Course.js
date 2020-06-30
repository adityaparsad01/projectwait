import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  CardText,
  CardFooter,
  Container,
} from 'reactstrap';

const Course=({course})=>{
return(
  <Card className="text-center">
  <CardBody>
  <CardSubtitle className="font-weight-bold">{course.Subtitle}</CardSubtitle>
  <CardText>{course.Text}</CardText>
  <Container >
  <Button color="danger">Delete</Button>
  <Button color="warning ml-3">Update</Button>
  </Container>
  </CardBody>
  </Card>
)
}
export default Course