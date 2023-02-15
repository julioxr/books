import React from "react";
import { Link } from "react-router-dom";
import DeleteButton from "../button/DeleteButton";
import UpdateButton from "../button/UpdateButton";

const Card = ({ book }) => {
    const { id, title, desc, price } = book;
    return (
        <div className="mb-10 text-center " id={id}>
            {/* {books.cover && ( */}
            <Link to={`/book/${id}`}>
                <img
                    className="h-60 rounded-lg shadow-md"
                    alt=""
                    src="https://d1wnwqwep8qkqc.cloudfront.net/uploads/stage/stage_image/37836/optimized_large_thumb_stage.jpg"
                />
            </Link>
            {/* )} */}
            <h2>{title}</h2>
            <p className="">{desc}</p>
            <span>{price}</span>
            <div className="flex gap-4">
                <DeleteButton id={id} />
                <UpdateButton id={id} />
            </div>
        </div>
    );
};

export default Card;
