import React,{useState} from 'react'
import {Form,Button,Alert,Card,Container} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'

export default function Login(){
    const [error, setError] = useState('')
    return(
        <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
        <div className="w-100" style={{maxWidth: "400px",paddingTop:"2rem"}}>
          <Card>
              <Card.Body>
                  <h2 className="text-center mb-4">Log In</h2>
                  { error && <Alert variant="danger">{error}</Alert>}
                  <Form>
                      <Form.Group id="email">
                          <Form.Label>Email</Form.Label>
                          <Form.Control type="email"  required />
                      </Form.Group>
                      <Form.Group id="password">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" required />
                      </Form.Group>
                      <Button className=" btn btn-dark w-100" type="submit">Log In</Button>
                  </Form>
                  <div className="w-100 text-center mt-3">
                      <Link to="/forgot-password">Forgot Password?</Link>
                  </div>
              </Card.Body>
          </Card> 
          <div className="w-100 text-center mt-2">
              Need an account? <Link to="/signup">Sign Up</Link>
         </div> 
         </div>
        </Container>
    )
}