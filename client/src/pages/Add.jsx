import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Add = () => {
    const [book, setBook] = useState({
        title: "",
        desc: "",
        price: null,
        cover: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            postBook();
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    const postBook = async (e) => {
        await axios.post("http://192.168.1.106:3000/books", book);
    };

    return (
        <div className="mt-16">
            <form onSubmit={handleSubmit}>
                <h1>Add New Book</h1>
                <input
                    type="text"
                    placeholder="Title"
                    onChange={handleChange}
                    name="title"
                />
                <input
                    type="text"
                    placeholder="Desc"
                    onChange={handleChange}
                    name="desc"
                />
                <input
                    type="number"
                    placeholder="Price"
                    onChange={handleChange}
                    name="price"
                />
                <input
                    type="text"
                    placeholder="Cover"
                    onChange={handleChange}
                    name="number"
                />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
};

export default Add;
