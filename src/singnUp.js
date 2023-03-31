import React, { useState } from 'react';
    // this is link of react-bootstrap 
import {Button,Col,Form,InputGroup,Row} from 'react-bootstrap';
    // this my svg link from unDraw
import Singup from "./singn up.svg";


    // In this part, I mixed bootstrap with  react-bootstrap
function Sing() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    
      <div className=" text-ligth "style={{width: '100%',background:'#CB10D4'}} id='singup'>
        <div className="container col-xl-10 col-xxl-8 px-4 py-5  " >
          
          <div className="row align-items-center g-lg-5 py-5">
          <img src={Singup} alt="Your SVG" className="col-lg-5 text-center text-lg-start"/>


            <div className="col-md-10 mx-auto col-lg-7  p-4 p-md-5 border rounded-3 bg-light shadow p-3 mb-5 bg-body-tertiary rounded">
            <Form noValidate validated={validated} onSubmit={handleSubmit}  className=''>
              <Row>
            <h2 className='text-center mb-2 py-2' style={{color:'#CB10D4'}}>Sign Up</h2>

              </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="First name"
                      defaultValue=""
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Last name"
                      defaultValue=""
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>Username</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please choose a username.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="date" placeholder="age" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid city.
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  <Form.Group as={Col} md="3" controlId="validationCustom05" >
                      <Form.Label>country</Form.Label>
                      <Form.Select aria-label="Default select example"  >
                          
                          <option value="1">Tunisie</option>
                          <option value="2">Algiria</option>
                          <option value="3">Egypt</option>
                        </Form.Select>

                  </Form.Group>
                </Row>


                <Form.Group as={Row} className="mb-3">
                    <Col >
                      <Form.Check
                        type="radio"
                        label="Male"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        required
                      />
                      </Col>
                      <Col >
                      <Form.Check
                        type="radio"
                        label="Female"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        required
                      />
                      </Col>
                  </Form.Group>

                  <Row className="mb-3">
                    <Form.Group as={Col}  className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" required />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                  
                    <Form.Group as={Col}  className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password"  required/>
                      <Form.Control.Feedback type="invalid">
                        Please choose a username.
                      </Form.Control.Feedback>
                    </Form.Group>
                  
                  

                  
                </Row>
                

                
                <Button type="submit"style={{background:'#CB10D4'}}  onClick={() => { console.log(Form.Check.value);}}>Sign Up</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>


  );
}


export default Sing;
