import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import GsdService from "../Services/GsdService";

function Updatestatus() {
    const[id1,setId1]=useState(0);
    // const[buttonvalue,setButtonvalue]=useState({status:""});
    const[comment,setComment]=useState(0);
    const{id}=useParams();
    const navigate=useNavigate();
    let status1;

    useEffect(()=>{
        setId1(id);
    },[]);
    
    const commenthandler =(event)=>{
        const comm=event.target.value;
        // console.log(comm);
        setComment(comm);
    }

    const buttonhandler =(event)=>{
        console.log(id1);
        status1=event.target.value;
        console.log(status1);
        GsdService.sendMail();
        GsdService.saveStatus(id1,status1);
        GsdService.saveComment(id1,comment);
        console.log(comment);
        navigate('/viewform');
    }

    return ( 
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset md-3 mt-5 rounded shadow p-3 mb-5 bg-white">
                    <Form>
                        <Form.Group as={Row} className="mb-3" >
                            <Col sm={12}>
                            <Form.Label><h4>Comment</h4></Form.Label>
                            <Form.Control as="textarea" rows={3} maxLength={100} onChange={commenthandler} required/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Col sm={{ span: 4}}>
                            <Button variant="outline-info"  value={"closed"}
                             onClick={(event) => { 
                                const confirm=window.confirm("Confirm to close request")
                                 if(confirm===true){
                                    buttonhandler(event);
                                 }}}
                            >Close Request</Button></Col>
                            <Col sm={{ span: 4}}> 
                            <Button variant="outline-danger" value={"cancelled"}
                            onClick={(event) => { 
                                const confirm=window.confirm("Confirm to cancel the request")
                                 if(confirm===true){
                                    buttonhandler(event);
                                 }}}
                            >Cancel Request</Button></Col>
                            <Col sm={{ span: 4}}> 
                            <Button variant="outline-success" value={"Inprogress"}
                            onClick={(event) => { 
                                const confirm=window.confirm("Confirm to approve the request")
                                 if(confirm===true){
                                    buttonhandler(event);
                                }}}
                            >Approve Request</Button></Col>
                            <Col sm={{ span: 4}}> 
                            <Button variant="outline-success" value={"NeedApproval"}
                            onClick={(event) => { 
                                const confirm=window.confirm("Confirm to send approval")
                                 if(confirm===true){
                                    buttonhandler(event);
                                }}}
                            >Request Approval</Button></Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 15}}> 
                            <Button variant="outline-primary"
                             onClick={() => {navigate('/viewform')}}
                            > Back </Button>
                        </Col>
                        </Form.Group>

                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Updatestatus;