import axios from "axios";
import React from "react";

const DeleteButton = ({ id }) => {
    const deleteBook = async (id) => {
        try {
            await axios.delete(`http://192.168.1.106:3000/books/${id}`);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div onClick={() => deleteBook(id)}>Delete</div>
        </>
    );
};

export default DeleteButton;
