import React,{useState} from 'react'
import { Container,Form,Alert,Card,Button } from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'


export default function Signup() {
    const [error, setError] = useState('')

    return (<Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
    <div className="w-100" style={{maxWidth: "400px",paddingTop:"5rem"}}>
    <Card>
              <Card.Body>
                  <h2 className="text-center mb-4">Sign Up</h2>
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
                      <Form.Group id="password-confirm">
                          <Form.Label>Password Confirmation</Form.Label>
                          <Form.Control type="password" required />
                      </Form.Group>
                      <Button className="btn btn-dark w-100" type="submit">Sign Up</Button>
                  </Form>
              </Card.Body>
          </Card> 
          <div className="w-100 text-center mt-2">
              Already have an account? <Link to="/login">Log In</Link>
         </div> 
    </div>
    </Container>
    )
}