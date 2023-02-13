import React from "react";
import { Link } from "react-router-dom";

const UpdateButton = ({ id }) => {
    return (
        <>
            <button>
                <Link to={`/update/${id}`}>Update</Link>
            </button>
        </>
    );
};

export default UpdateButton;
