import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LargeCard from "../components/large_card/LargeCard";
import MiniCard from "../components/mini_card/miniCard";
import Card from "../components/card/Card";

const Books = () => {
    const [books, setBooks] = useState([]);

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
        <div className="mt-16 z-20 mb-12">
            <LargeCard />
            <h1 className="mb-6 text-2xl">Popular books</h1>
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <MiniCard />
            <div className="flex flex-wrap items-center justify-between">
                {books.map((book) => (
                    <Card book={book} key={book.id} />
                ))}
            </div>
            <button>
                <Link to="/add">Añadir</Link>
            </button>
        </div>
    );
};

export default Books;
