import React, {useState, useEffect } from 'react';
import { axiosWithAuth } from '../utilities/axiosWithAuth'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { trackPromise } from 'react-promise-tracker';

const FriendsList = () => {

        const [friendInfo, setFriendInfo] = useState([]);
    
    // componentDidMount(){
    //     this.getData();
    // }

    // trackPromise(
    useEffect(() => {
        //fetch initial data - but it's protected! Use axiosWithAuth to send the token on the request
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log(res.data)
                setFriendInfo(res.data);

            })
            .catch(err => console.log(err));
        }, [])
    //)

        return(
            
                <div>
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