import { useEffect, useState } from "react";
import Book from "../Book/Book";
const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Books</h1>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 mb-5">
        {books.map((b, indx) => (
          <Book key={indx} book={b}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
