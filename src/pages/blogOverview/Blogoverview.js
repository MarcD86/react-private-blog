import React from 'react';
import posts from "../../data/posts.json";
import {Link} from "react-router-dom";
import "./Blogoverview.css";

const Blogoverview = () => {

    return (
        <>
            <div className="blogposts">
                <h1>Blog overzichtspagina</h1>
                <h2>Aantal blogposts: {posts.length}</h2>
                <ol> {posts.map((post) => {
                    return (<li key={post.id}><Link to={"/blogpost/" + post.id}>{post.title}</Link></li>);
                })}
                </ol>
            </div>

        </>);
}


export default Blogoverview;