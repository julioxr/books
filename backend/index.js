import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "test",
});

app.use(express.json());
app.use(cors());

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books";
    db.query(q, (error, data) => {
        if (error) {
            return res.json(error);
        }
        return res.json(data);
    });
});

app.get("/book/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "SELECT * FROM books WHERE id = ?";
    db.query(q, [bookId], (error, data) => {
        try {
            return res.json(data);
        } catch (error) {
            console.log(error);
        }
    });
});

// No enviar toda la data, el id no debe ser modificado
app.get("/update/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "SELECT * FROM books WHERE id = ?";
    db.query(q, [bookId], (error, data) => {
        try {
            return res.json(data);
        } catch (error) {
            console.log(error);
        }
    });
});

app.post("/books", (req, res) => {
    const q =
        "INSERT INTO books (`title`, `desc`, `cover`, `price`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.desc,
        req.body.cover,
        req.body.price,
    ];
    console.log(values);

    db.query(q, [values], (error, data) => {
        if (error) {
            return res.json(error);
        }
        return res.json({
            status: "ok",
            message: "Libro agregado",
        });
    });
});

app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id = ?";

    db.query(q, [bookId], (error, data) => {
        if (error) {
            return res.json(error);
        }
        return res.json({
            status: "200",
            message: "book deleted",
        });
    });
});

app.listen(3000, () => {
    console.log("escuchando en el puerto 3000");
});
