import React from 'react' 
import { Jumbotron, Container, Button} from 'reactstrap';

function Home(){
  return(
    <div>
    <Jumbotron className="text-center ">
      <h1 className="display-3">Learn Code With Aditya</h1>
      <p>this is Code class with Me</p>
      <Container>
      <Button color="primary" outline>Start Learning</Button>
      </Container>
    </Jumbotron>
    </div>
  )
}

export default Home;