import React from 'react'
import { Route, Redirect } from 'react-router-dom'

//Requirements
//It has to have the same API as <Route/> (same props as Route)
//It renders a <Route/> and passes all the props through it
//It checks if the user is authenticated, it they are,it renders-
//-the "component" prop. If not, it redirects the user to /login.

const PrivateRoute = ({component: Component, ...rest}) => {//make use of REST PROPERTY

    return(

        <Route {...rest} render={()=>{
            if(localStorage.getItem('token')){
                //push to component 
                return <Component/>
            }else{
                return <Redirect to="/login"/>
            }
            
        }}/>
    )
}

export default PrivateRoute;