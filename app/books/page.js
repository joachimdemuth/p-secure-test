"use client";

import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import Header from "../components/Header";
import { fetchFromAPI } from "../utils/fetchData";
import ErrorMessage from "../components/ErrorMessage";

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const booksData = await fetchFromAPI("books");
        const authorsData = await fetchFromAPI("authors");

        setBooks(booksData);
        setAuthors(authorsData);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load book or author data. Please try again later.");
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const getAuthorName = (authorId) => {
    const author = authors.find((author) => author.id === authorId);
    return author ? `${author.firstName} ${author.lastName}` : "Unknown Author";
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error)
    return (
      <ErrorMessage message="Failed to load data. Please try again later." />
    );

  return (
    <div>
      <Header />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Books Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              authorName={getAuthorName(book.authorId)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
