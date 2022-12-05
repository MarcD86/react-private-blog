import React from "react";
import {useNavigate} from "react-router-dom";

const NotFound = () => {

    //useNavigate methode om door te linken
    const navigate = useNavigate();

    setTimeout(() => {
        navigate("/")
    }, 3000)

    return (
        <>
            <h1>Page not found | 400</h1>
            <p>You will be redirected in 3 sec.</p>
        </>
    );
}

export default NotFound;