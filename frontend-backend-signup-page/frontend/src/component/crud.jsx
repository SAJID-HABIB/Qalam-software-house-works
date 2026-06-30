import { useState } from "react";
// import './crud.css'
function Crud(){
const [users]=useState([
    {id:1, name:"Ali"},
    {id:2, name:"Hamza"},
    {id:3, name:"Fida"},
]);
return(
    <div>
        <h1>User list</h1>
        {users.map((user)=>(
            <p key={user.id}>{user.name}</p>
        ))}
    </div>
);
}export default Crud