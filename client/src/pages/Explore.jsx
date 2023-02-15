import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/card/Card";

const Explore = () => {
    const [books, setBooks] = useState([]);

    // este efecto aun no renderiza nada, solo renderiza hardcodeado,
    // Se deben colocar los parametros
    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://192.168.1.106:3000/books");
                setBooks(res.data);
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
            <div className="flex gap-8">
                <p>Trending</p>
                <p>Romance</p>
                <p>Children</p>
            </div>
            <br />
            <div>Explore</div>
            <div className="mt-16 z-20 mb-12">
                <div className="flex flex-wrap items-center justify-between">
                    {books.map((book) => (
                        <Card book={book} key={book.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Explore;
