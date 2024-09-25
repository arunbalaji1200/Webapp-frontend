import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import GsdService from "../Services/GsdService";

const UpdateUser = ()=>{
    const[user,setUser]=useState([]);
    const[role,setRole]=useState([]);
    const{id}=useParams();
    const navigate=useNavigate();

    useEffect (() =>{
        const getUser= async (id)=>{
            const {data}= await GsdService.getUserId(id);
            console.log(data);
            setUser(data);
            setRole(data.role);
            console.log(data.role);
        }
        getUser(id);
    },[]);

    const ToHomeHandler =()=>{
        navigate('/home');
    }

    // console.log(role.user[0].role);
    const updateUser = (event) => {
        // event.preventDefault();
        setUser(user.id);
        setUser(user.name);
        setUser(user.userName);
        setUser(user.active);    
        setUser(user.createdOn);
        setUser(role.id);
        setUser(role.active);
        setUser(role.name);
        console.log(user.name);
        console.log(role.name);
        console.log(user.userName);
        console.log(user.active);
        GsdService.updateUser(id,user);
        navigate('/home')
    };

    const onNameHandler = (event) => {
        const name = event.target.value;
        user.name = name;

    };
    const onuserNameHandler = (event) => {
        const userName = event.target.value;
        user.userName = userName;

    };
    const oncreatedOnHandler = (event) => {
        const createdOn = event.target.value;
        user.createdOn = createdOn;

    };

    console.log(user.name);
    console.log(role.id);
    console.log(role.name);
    console.log(user.userName);
    console.log(user.active);

    return(
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset md-3 mt-5 rounded shadow p-3 mb-5 bg-white">
                    <h3 className='text-center'>Update User</h3>
                    <Form onSubmit={updateUser}>
                        {/* <Form.Group as={Row} className="mb-3" controlId="role">
                            <Form.Label column sm={2}> Role </Form.Label>
                            <Col sm={10}>
                            <Form.Control type="text" placeholder="Enter your name" defaultValue={user.name} 
                                        onChange={onRoleHandler}   disabled/>
                            </Col>
                        </Form.Group> */}
                        <Form.Group as={Row} className="mb-3" controlId="name">
                            <Form.Label column sm={3}> Name </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="text" placeholder="Enter your name" 
                                        defaultValue={user.name} onChange={onNameHandler}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="userName">
                            <Form.Label column sm={3}> UserName </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="text" placeholder="Eg:sam008" 
                                        defaultValue={user.userName} onChange={onuserNameHandler}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="createdOn">
                            <Form.Label column sm={3}> Date </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="date" id="datepicker" 
                                        defaultValue={user.createdOn}  onChange={oncreatedOnHandler} disabled/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Col sm={{ span: 8, offset: 2 }}>
                            <Button type="submit" >Save</Button>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Col sm={{ span: 8, offset: 2 }}>
                            <Button onClick={ToHomeHandler} >Cancel</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
    );
}
export default UpdateUser;