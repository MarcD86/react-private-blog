import React from 'react';
import './Blogpost.css';
import posts from '../../data/posts.json';
import {useParams} from "react-router-dom";

function Blogpost() {

// id destructuren uit het paramas object

    const {id} = useParams();

    // id met asynchrone functie zie hieronder met test URI (posts)
    //met daarin : const response = await axios.get(URI + ID)


    return (
        <>
            <div>
                <h1>{posts[id - 1].title} </h1>
                <p>{posts[id - 1].date}</p>
                <p>{posts[id - 1].content}</p>
            </div>
        </>
    );
}

export default Blogpost;