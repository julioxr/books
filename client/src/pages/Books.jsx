import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LargeCard from "../components/large_card/LargeCard";
import Card from "../components/card/Card";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://192.168.1.106:3000/books");
                setBooks(res.data);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAllBooks();
    }, []);

    return (
        <div className="mt-16 z-20 mb-12">
            <LargeCard />
            <h1 className="mb-6 text-2xl">Popular books</h1>
            <div className="flex flex-wrap items-center justify-between">
                {books.map((book) => (
                    <Card book={book} />
                ))}
            </div>
            <button>
                <Link to="/add">Añadir</Link>
            </button>
        </div>
    );
};

export default Books;
