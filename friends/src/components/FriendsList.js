import React from 'react'
// import moment from 'moment'
// import Loader  from 'react-loader-spinner';
import { axiosWithAuth } from '../utilities/axiosWithAuth'

class FriendsList extends React.Component {

    state = {
        friendInfo: []
    };

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        //fetch initial data - but it's protected! Use axiosWithAuth to send the token on the request
        axiosWithAuth()
            .get('/api/data')
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    //import {helper as help} from './helpers'

    // 
    render(){
        return(
            {
                this.friends.map(i => (
                    <Col lg="4">
                        <Card style={DivBack}>
                            <p>{i.id}</p>
                            <p>{i.name}</p>
                            <p>{i.age}</p>
                            <p>{i.email}</p>
                        </Card>
                    </Col>
                ))
            }
        )
    }

}

export default FriendsList;