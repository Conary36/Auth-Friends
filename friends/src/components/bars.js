import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from "react-loader-spinner";




const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker();
    return (
        <div>
            {promiseInProgress && (
                <h1>Hey an async call in progress !</h1>
            
            )
            }

            <div
                style={{
                    width: "100%",
                    height: "100",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Loader timeout={2000} type="Bars" color="#47F7FF" height={80} width={80} />
            </div>
        </div>
    );
}

export default LoadingIndicator;