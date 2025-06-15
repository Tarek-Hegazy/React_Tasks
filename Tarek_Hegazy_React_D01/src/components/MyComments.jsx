import React, { useEffect, useState } from "react";
import { fetchComments } from "./APICommnts";
import "./../App.css";

const Comments = ({ videoId }) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchComments(videoId).then((data) => {
            setComments(data);
            setLoading(false);
        });
    }, [videoId]);

    if (loading) return <p>Loading comments...</p>;

    return (
        <div style={{ marginTop: "10px", paddingLeft: "20px" }}>
            <h4>Comments:</h4>
            {comments.length === 0 ? (
                <p>No comments yet.</p>
            ) : (
                <ul>
                    {comments.map((comment, idx) => (
                        <li key={idx}>{comment}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Comments;
