import { useEffect } from "react";
import { useState } from "react";
import {Form, FormGroup, FormLabel, Col, Row, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import GsdService from "../Services/GsdService";
function Repairlaptop() {
    const[repair,setRepair]=useState(
        {
            requesttype: "",
            requestingfor: "",
            description: "",
            status: "",
            repairlaptop: {
                    model: "",
                    warranty: "",
                    repairloc: "",
                    slot: ""
                }
        }
    );

    const location = useLocation();
    const navigate=useNavigate();
    console.log(location.state);

    useEffect(()=>{
        const getRepair = async ()=>{
            const data=await location.state;
            repair.requesttype=data.form.requesttype;
            repair.requestingfor=data.form.requestingfor;
            repair.description=data.form.description;
            repair.status=data.form.status;
        }
        getRepair();
    });

    const timehandler=(event)=>{
        const time=event.target.value;
        var sec=time+":00";
        console.log(sec);
        repair.repairlaptop.slot=sec;
    }

    const warrantyhandler=(event)=>{
        const warr=event.target.value;
        repair.repairlaptop.warranty=warr;
        console.log();
    }

    const modelhandler=(event)=>{
        const model=event.target.value;
        repair.repairlaptop.model=model;
        console.log();
    }

    const lochandler=(event)=>{
        const loc=event.target.value;
        repair.repairlaptop.repairloc=loc;
    }

    const submithandler=(event)=>{
        event.preventDefault();
        setRepair(repair.requestingfor);
        console.log(repair.requestingfor);
        setRepair(repair.description);
        console.log(repair.description);
        setRepair(repair.requesttype);
        console.log(repair.requesttype);
        setRepair(repair.status);
        console.log(repair.status);

        setRepair(repair.repairlaptop.model);
        console.log(repair.repairlaptop.model);
        setRepair(repair.repairlaptop.warranty);
        console.log(repair.repairlaptop.warranty);
        setRepair(repair.repairlaptop.repairloc);
        console.log(repair.repairlaptop.repairloc);
        setRepair(repair.repairlaptop.slot);
        console.log(repair.repairlaptop.slot);
        GsdService.saveForm(repair);
        navigate("/form");
    }

    return ( 
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset md-3 mt-5 rounded shadow p-3 mb-5 bg-white">
                <h3 className='text-center mt-3 mb-5'>Request RepairLaptop</h3>
                    <Form>
                         <FormGroup as={Row} className="mb-3">
                            <FormLabel className="text-center" column sm={3}>Laptop_model</FormLabel>
                            <Col sm={9}>
                            <Form.Control type="text" maxLength={10} required onChange={modelhandler}/>
                            </Col>
                        </FormGroup>
                        <FormGroup as={Row} className="mb-3">
                            <FormLabel className="text-center" column sm={3}>Warranty date</FormLabel>
                            <Col sm={9}>
                            <Form.Control type="date" required onChange={warrantyhandler}/>
                            </Col>
                        </FormGroup>
                        <FormGroup as={Row} className="mb-3">
                            <FormLabel className="text-center" column sm={3}>Slot Time</FormLabel>
                            <Col sm={9}>
                            <Form.Control type="Time" required onChange={timehandler}/>
                            </Col>
                        </FormGroup>
                        <FormGroup as={Row} className="mb-3">
                            <FormLabel className="text-center" column sm={3}>Repair Location</FormLabel>
                            <Col sm={9}>
                            <Form.Control type="text" maxLength={15} required onChange={lochandler}/>
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

export default Repairlaptop;