import React,{useState,useEffect} from 'react';
import axios from "axios";
const UserList = () => {

    const [listOfUser,setListOfUser] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            setLoading(true);
            setListOfUser(response.data)
        })
        
        .then(error=>{setLoading(true)}
        )
    },[])
    return (
        <>
            <div className="container m-5">
                <h1 style={{textAlign:"center"}}>Liste Utilisateurs</h1>
                <div className="d-flex flex-column m-5">
                    {
                        (!loading) ? (<h2>Chargement....</h2>)

                        :(
                            listOfUser.map((user,index)=>(
                                <div className="col-lg-8 offset-lg-2 shadow card mb-2" key={index}>
                                    <div className="card-body">
                                        <h2>{user.title}</h2>
                                        <div className="panel">
                                            <p> <span className="font-weight">Username</span>:{user.name+' '+user.username} </p>
                                            <p> <span className="font-weight">Email</span>: {user.email} </p>
                                            <hr/>
                                            <p className='font-weight'>Address</p>
                                            <p>
                                                {user.address.street}, {user.address.city}, {user.address.suite}
                                            </p>
                                            <hr/>
                                            <p><span className='font-weight'>Phone:</span> {user.phone}</p>
                                            <p><span className='font-weight'>Website:</span>  {user.website}</p>
                                            <p><span className='font-weight'>Company:</span>  {user.company.name}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default UserList;