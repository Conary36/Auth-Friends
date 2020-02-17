import React, {useState, useEffect } from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
// import { trackPromise } from 'react-promise-tracker';
import LoadingIndicator from '../components/bars';


const FriendsList = () => {

        const [friendInfo, setFriendInfo] = useState([]);
    
   
    

    
        useEffect(() => {
        //fetch initial data - but it's protected! Use axiosWithAuth to send the token on the request
        setTimeout(() => {
        axiosWithAuth()
             .post('/api/login', {
                    username: 'Lambda School',
                    password: 'i<3Lambd4'
                    
                })
             .then(res => {
                    localStorage.setItem("token", res.data.token);
                });

        
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log(res.data)
                setFriendInfo(res.data);

            })
            .catch(err => console.log(err));
      }, [3000]);

    }, []);
    
    
    return(
        
           

                <div>
                     <div><LoadingIndicator /></div>
                    {friendInfo.map(subj => 
                        <div>
                            <p>{subj.name}</p>
                            <p>{subj.age}</p>
                            <p>{subj.email}</p>
                        </div>
                        )}
                </div>
        
        )
    

}

export default FriendsList;




