import { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Row, Container, Form } from "react-bootstrap";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import GsdService from "../Services/GsdService";

const Viewnewlaptop =()=> {
    const[newlap,setNewlap]=useState({});
    const{id}=useParams();
    const navigate=useNavigate();

    useEffect(() =>{
        const getNewlap =async(id)=>{
            const{data}=await GsdService.getNewlapid(id);
            setNewlap(data);
        }
        getNewlap(id);
    },[]);

    const Homehandler=()=>{
        navigate('/viewform');
    }
    return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset md-3 mt-5 rounded shadow p-3 mb-5 bg-white">
                        <Form>
                        <Form.Group as={Row} className="mb-3" controlId="name">
                            <Form.Label column sm={3}> ID </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="text" placeholder="Enter your name" 
                                        defaultValue={newlap.id} disabled/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="name">
                            <Form.Label column sm={3}> Model </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="text" placeholder="Enter your name" 
                                        defaultValue={newlap.model} disabled/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="name">
                            <Form.Label column sm={3}> OS </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="text" placeholder="Enter your name" 
                                        defaultValue={newlap.os} disabled/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="name">
                            <Form.Label column sm={3}> RAM </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="text" placeholder="Enter your name" 
                                        defaultValue={newlap.ramsize} disabled/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="name">
                            <Form.Label column sm={3}> Capacity </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="text" placeholder="Enter your name" 
                                        defaultValue={newlap.capacity} disabled/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="name">
                            <Form.Label column sm={3}> Location to be Shipped </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="text" placeholder="Enter your name" 
                                        defaultValue={newlap.location} disabled/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                                <Col sm={{ span: 8, offset: 2 }}>
                                <Button onClick={Homehandler}>back</Button>
                                </Col>
                        </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
    );
}

export default Viewnewlaptop;