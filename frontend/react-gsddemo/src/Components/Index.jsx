import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../App.css';
const Index =()=> {
    const navigate=useNavigate();
    return ( 
        <div className='indexback'>
            <div className='index'>
                <h1>Welcome To The Demo Project</h1>
                <Button className='indexbutton' onClick={()=>navigate('/home')}>User Management</Button>
                <Button className='indexbutton1'onClick={()=>navigate('/viewform')}>Form Services</Button>
            </div>
        </div>    
     );
}

export default Index;