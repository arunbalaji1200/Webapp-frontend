import axios from "axios";

class GsdService{
    getRole(){
        return axios.get('http://localhost:8080/service/getrole');
    }
    getUser(){
        return axios.get('http://localhost:8080/service/getuser');
    }
    getRoleId(id){
        // console.log("Roleservice");
        // console.log(id);
        return axios.get('http://localhost:8080/service/getidrole/'+id);
    }
    addRole(id,user){
        console.log("serviceclass");
        console.log(user);
        return axios.post('http://localhost:8080/service/adduser/'+id,user);
    }
    getUserId(id){
        console.log("UserService");
        console.log(id);
        return axios.get('http://localhost:8080/service/getiduser/'+id);
    }
    updateUser(id,data){
        console.log(data);
        return axios.patch('http://localhost:8080/service/updateuser/'+id,data);
    }
    deleteUsers(id){
        return axios.delete('http://localhost:8080/service/deleteuser/'+id)
    }
    saveForm(newlap){
        return axios.post('http://localhost:8080/service/saveform',newlap);
    }
    getForm(page,size){
        console.log(page,size);
        return axios.get('http://localhost:8080/service/getform?pageNo='+page+'&pageSize='+size);
    }
    getNewlap(){
        return axios.get('http://localhost:8080/service/getnewlap');
    }
    getNewlapid(id){
        console.log(id);
        return axios.get('http://localhost:8080/service/getnewid/'+id);
    }
    getRepairlapid(id){
        return axios.get('http://localhost:8080/service/getrepairid/'+id);
    }
    saveStatus(id,status){
        console.log(id);
        console.log(status);
        return axios.post('http://localhost:8080/service/update/status/'+id,status,
        {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        );
    }
    saveComment(id,comment){
        console.log(comment);
        return axios.post('http://localhost:8080/service/update/comment/'+id,comment,
        {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        );
    }
    sendMail(){
        return axios.get('http://localhost:8080/service/sendmail');
    }
}
export default new GsdService()