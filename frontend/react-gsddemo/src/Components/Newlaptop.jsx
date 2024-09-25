import { useEffect } from "react";
import { useState } from "react";
import {Form, FormGroup, FormLabel, Col, Row, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import GsdService from "../Services/GsdService";

function Newlaptop() {
    const[newlap,setNewlap]=useState(
        {
            requesttype: "",
            requestingfor: "",
            description: "",
            status: "",
            newlaptop: {
                model: "",
                ramsize:"",
                capacity:"",
                os: "",
                location: "",
            }
        }
    );
    const location = useLocation();
    const navigate=useNavigate();
    console.log(location.state);

    useEffect(()=>{
        const getNewlap = async ()=>{
            const data=await location.state;
            newlap.requesttype=data.form.requesttype;
            newlap.requestingfor=data.form.requestingfor;
            newlap.description=data.form.description;
            newlap.status=data.form.status;
        }
        getNewlap();
    });

    const oshandler=(event)=>{
        const os=event.target.value;
        newlap.newlaptop.os=os;
        console.log(os);
    }
    const modelhandler=(event)=>{
        const model=event.target.value;
        newlap.newlaptop.model=model;
    }

    const ramhandler=(event)=>{
        const ram=event.target.value;
        newlap.newlaptop.ramsize=ram;
    }

    const spacehandler=(event)=>{
        const space=event.target.value;
        newlap.newlaptop.capacity=space;
    }

    const locationhandler=(event)=>{
        const loc=event.target.value;
        newlap.newlaptop.location=loc;
    }

    const submithandler=(event)=>{
        event.preventDefault();
        setNewlap(newlap.requestingfor);
        console.log(newlap.requestingfor);
        setNewlap(newlap.description);
        console.log(newlap.description);
        setNewlap(newlap.requesttype);
        console.log(newlap.requesttype);
        setNewlap(newlap.status);
        console.log(newlap.status);

        setNewlap(newlap.newlaptop.model);
        console.log(newlap.newlaptop.model);
        setNewlap(newlap.newlaptop.ramsize);
        console.log(newlap.newlaptop.ramsize);
        setNewlap(newlap.newlaptop.capacity);
        console.log(newlap.newlaptop.capacity);
        setNewlap(newlap.newlaptop.os);
        console.log(newlap.newlaptop.os);
        setNewlap(newlap.newlaptop.location);
        console.log(newlap.newlaptop.location);
        console.log(newlap);
        GsdService.saveForm(newlap);
        navigate("/form");
    }

    return ( 
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset md-3 mt-5 rounded shadow p-3 mb-5 bg-white">
                <h3 className='text-center mt-3 mb-5'>Newlaptop Form</h3>
                    <Form>
                         <FormGroup as={Row} className="mb-3">
                            <FormLabel className="text-center" column sm={3}>Laptop_model</FormLabel>
                            <Col>
                            <Form.Control type="text" maxLength={10} onChange={modelhandler} required/>
                            </Col>
                        </FormGroup>
                        <FormGroup as={Row} className="mb-3">
                            <FormLabel column sm={3}>OS</FormLabel>
                            <Col >
                            <Form.Select aria-label="Default select example" onChange={oshandler}>
                                <option>SELECT</option>
                                <option value="windows">windows</option>
                                <option value="linux">linux</option>
                                <option value="ubuntu">ubuntu</option>
                                <option value="ios">ios</option>
                             </Form.Select>
                            </Col>
                        </FormGroup>
                        <FormGroup as={Row} className="mb-3">
                            <Col xs="6">
                                <FormLabel Row>RAM size</FormLabel>
                                    <Form.Select onChange={ramhandler}>
                                        <option>SELECT</option>
                                        <option value="4 GB">4</option>
                                        <option value="8 GB">8</option>
                                        <option value="16 GB">16</option>
                                        <option value="32 GB">32</option>
                                    </Form.Select>
                            </Col>
                            <Col xs="6">
                                <FormLabel className="text-center">storage space</FormLabel>
                                <Form.Select aria-label="Default select example" onChange={spacehandler}>
                                    <option>SELECT</option>
                                    <option value="128 GB">128 GB</option>
                                    <option value="256 GB">256 GB</option>
                                    <option value="512 GB">512 GB</option>
                                    <option value="1000 GB">1 TB</option>
                                </Form.Select>
                             </Col>
                        </FormGroup>
                        <FormGroup as={Row} className="mb-3">
                            <FormLabel className="text-center" column sm={3}>Location</FormLabel>
                            <Col sm={9}>
                            <Form.Control type="text" maxLength={15} placeholder="location to be shipped" 
                             onChange={locationhandler} required/>
                            </Col>
                        </FormGroup>
                        <Form.Group as={Row} className="mb-3">
                            <Col sm={{ span: 10, offset: 1 }}>
                            <Button type="submit" onClick={submithandler}>Submit</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
     );
}

export default Newlaptop;