import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LargeCard from "../components/large_card/LargeCard";
import MiniCard from "../components/mini_card/miniCard";

const Books = () => {
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
            <div className="h-12"></div>
            <div className="">
                <LargeCard />
                <h1 className="mb-6 text-2xl">Popular books</h1>
                {/* <Card book={book} key={book.id} /> */}
                <div className="flex flex-wrap items-center justify-between">
                    {books.map((book) => (
                        <MiniCard book={book} key={book.id} />
                    ))}
                </div>
                <button>
                    <Link to="/add">Añadir</Link>
                </button>
            </div>
            <div className="h-16"></div>
        </>
    );
};

export default Books;
