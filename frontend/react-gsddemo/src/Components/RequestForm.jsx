import { useState } from "react";
import { useEffect } from "react";
import {Form, FormGroup, FormLabel, Col, Row, FloatingLabel, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import GsdService from "../Services/GsdService";

function RequestForm() {
    const[userName,setuserName]=useState([]);
    const[form,setForm]=useState([]);
    const [validated, setValidated] = useState(false);
    const navigate=useNavigate();

    useEffect (()=>{
        const getuserName= async ()=>{
            const{data}=await GsdService.getUser();
            console.log(data);
            setuserName(data);
        }
        getuserName();
    },[]);
    
    const submitform =(event)=>{
        if(form.request_type===null){
            event.preventDefault();
        }else{
        event.preventDefault();
        setForm(form.requestingfor);
        console.log(form.requestingfor);
        setForm(form.description);
        setForm(form.requesttype);
        setForm(form.status);
        }}

    const reqforhandler =(event)=>{
        const reqfor=event.target.value;
        form.requestingfor=reqfor;
    }
    const deschandler =(event)=>{
        const desc=event.target.value;
        form.description=desc;
    }  
    const typehandler =(event)=>{
        const reqtyp=event.target.value;
        const stat="Open";
        form.status=stat;
        form.requesttype=reqtyp;
        // console.log(form.request_type);
    } 
    
    const tonewlap=(event)=>{
            if(form.requesttype==="NewLaptop"){
                navigate('/newlap',{state:{form}});
            }
            else{
                navigate('/repairlap',{state:{form}});
            }   
        }


    return (  
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset md-3 mt-5 rounded shadow p-3 mb-5 bg-white">
                <h3 className='text-center mt-3 mb-5'>Request Form</h3>
                    <Form noValidate validated={validated}>
                        <FormGroup as={Row} className="mb-3">
                            <FormLabel column sm={3}>Request Type  </FormLabel>
                            <Col sm={9}>
                            <FloatingLabel controlId="reqtype" label="Select from dropdown " onChange={typehandler}>
                                <Form.Select required>
                                    <option value={null}></option>
                                    <option value="RepairLaptop">RepairLaptop</option>
                                    <option value="NewLaptop">NewLaptop</option>
                                </Form.Select>
                            </FloatingLabel>
                            </Col>
                        </FormGroup>
                        <FormGroup as={Row} className="mb-3">
                            <FormLabel column sm={3}>Request For</FormLabel>
                            <Col sm={7}>
                            <Form.Select aria-label="Default select example" onChange={reqforhandler}>
                                <option>select user</option>
                                <option value="Self">Self</option>
                                {userName.map(use=>(<option key={use.id} value={use.userName}>{use.userName}</option>))
                                }
                             </Form.Select>
                             </Col>
                        </FormGroup>
                        <FormGroup as={Row} className="mb-3">
                            <FormLabel className="text-center">Description</FormLabel>
                            <Col sm={12}>
                            <Form.Control required as="textarea" rows={3} maxLength={255} onChange={deschandler}/>
                            </Col>
                        </FormGroup>
                        <Form.Group as={Row} className="mb-3">
                            <Col sm={{ span: 10, offset: 1 }}>
                            <Button type="submit" 
                            onSubmit={submitform}
                            onClick={()=>{tonewlap(form.request_type)}}
                            >Next</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default RequestForm;