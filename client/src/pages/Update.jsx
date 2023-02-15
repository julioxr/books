import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Update = () => {
    const location = useLocation();
    const bookId = location.pathname.split("/")[2];

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get(
                    `http://192.168.1.106:3000/update/${bookId}`
                );
                console.log("El libro que queres actualizar es el ");
                console.log(res.data[0].title);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAllBooks();
    }, []);
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <h1>Pagina de update</h1>
            <span>Vas actualizar el id</span>
        </>
    );
};

export default Update;
