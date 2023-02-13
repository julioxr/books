import axios from "axios";
import React from "react";

const DeleteButton = ({ id }) => {
    const deleteBook = async (id) => {
        try {
            await axios
                .delete(`http://192.168.1.106:3000/books/${id}`)
                .then(({ data }) => {
                    console.log(data.status);
                    if (data.status == 404) {
                    } else {
                        window.location.reload();
                    }
                });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <button onClick={() => deleteBook(id)}>Delete</button>
        </>
    );
};

export default DeleteButton;
