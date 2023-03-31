import React, { useState } from 'react';
  // this is bootstrap link 
import 'bootstrap/dist/css/bootstrap.min.css';
    // this is react-bootstrap link
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
    // this my svg link from unDraw
import welcome from "./welcom.svg";

  function Home() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
          // this section from bootstrap
        <section className="py-5  container  vstack gap-2 col-md-5 mx-auto" id='home'>
          <img src={welcome} alt="Your SVG" className=" row py-lg-5"/>
          <div className="row py-lg-5">
            <div className="grid text-center">
            

              {/* this part is from react bootstrap : button + alert */}
                <Button  style={{background:'#CB10D4',color:'#fff',padding:'7%'}} onClick={handleShow} >
                Click me first
                  </Button>
        
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title style={{color:'#CB10D4'}}>HELLO</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                        For this checkpoint I have used the <span style={{color:'#CB10D4'}}>Bootstrap </span> and <span style={{color:'#CB10D4'}}>React Bootstrap . </span>
                        I didn't use the css file except some the style tag.
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button  style={{background:'#CB10D4',color:'#fff'}}>Understood</Button>
                  </Modal.Footer>
                </Modal>
            </div>
          </div>
      </section>
            
        
        
      
    );
  }
  
  export default Home;