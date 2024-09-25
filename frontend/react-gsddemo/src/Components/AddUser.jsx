import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import GsdService from "../Services/GsdService";

const AddUser = ()=>{
    const[role,setRole]=useState({});
    const[user,setUser]=useState(
        {active:"",
        createdOn: "",
        name : "",
        userName : "",
        role:{
            id:"",
            name:"",
            active:""
        }
    });
    const{id}=useParams();
    const navigate=useNavigate();

    useEffect (() =>{
        const getRole= async (id)=>{
            const {data}= await GsdService.getRoleId(id);
            const {active:active,id:id1,name:name}=data;
            console.log(name);
            console.log(active);
            console.log(id1);
            setRole(data);
            user.role.name=name;
            user.role.active=active;
            console.log(user.role.name);
            console.log(user.role.active);
            console.log(data);
            var today = new Date();
            // const createdOn = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        }
        getRole(id);
    },[]);

    const ToHomeHandler =()=>{
        navigate('/home');
    }

    // console.log(role.user[0].role);
    const addUser = (event) => {
        event.preventDefault();
        // setUser(user.splice(0,4));
        console.log(user);
        setUser(user.name);
        console.log(user.name);
        setUser(user.active);
        console.log(user.active);   
        setUser(user.userName);
        console.log(user.userName);
        setUser(user.createdOn);
        console.log(user.createdOn);
        user.role.id=id;
        setUser(user.role.id);
        console.log(user.role.id);
        setUser(user.role.name);
        console.log(user.role.name);
        setUser(user.role.active);
        console.log(user.role.active);
        GsdService.addRole(id,user);
        navigate("/home");
    };

    
    const onNameHandler = (event) => {
        const name = event.target.value;
        const active="true";
        user.name = name;
        user.active=active;

    };
    const onuserNameHandler = (event) => {
        const userName = event.target.value;
        // console.log(userName);
        user.userName = userName;

    };
    const oncreatedOnHandler = (event) => {
        const date=event.target.value;
        user.createdOn = date;

    };
 
    return(
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset md-3 mt-5 rounded shadow p-3 mb-5 bg-white">
                    <h3 className='text-center'>Add User</h3>
                    <Form onSubmit={addUser}>
                        <Form.Group as={Row} className="mb-3" controlId="role">
                            <Form.Label column sm={3}> Role </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="text" defaultValue={role.name} disabled/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="name">
                            <Form.Label column sm={3}> Name </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="text" placeholder="Enter your name" 
                                         onChange={onNameHandler} required/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="userName">
                            <Form.Label column sm={3}> UserName </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="text" placeholder="Eg:sam008" onChange={onuserNameHandler} required/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="createdOn">
                            <Form.Label column sm={3}> Date </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="date" id="datepicker" onChange={oncreatedOnHandler} required/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Col sm={{ span: 9, offset: 2 }}>
                            <Button type="submit" >Save</Button>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Col sm={{ span: 9, offset: 2 }}>
                            <Button onClick={ToHomeHandler} >Cancel</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
    );
}
export default AddUser;