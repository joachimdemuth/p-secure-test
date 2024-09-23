"use client";

import { useState, useEffect } from "react";
import LoanCard from "../components/LoanCard";
import Header from "../components/Header";
import { fetchFromAPI } from "../utils/fetchData";
import ErrorMessage from "../components/ErrorMessage";

export default function LoansPage() {
  const [loans, setLoans] = useState([]);
  const [members, setMembers] = useState([]);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const loansData = await fetchFromAPI("loans");
        const membersData = await fetchFromAPI("members");
        const booksData = await fetchFromAPI("books");

        setLoans(loansData || []);
        setMembers(membersData || []);
        setBooks(booksData || []);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load loans, members, or books data.");
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const getMember = (memberId) => {
    return Array.isArray(members)
      ? members.find((m) => m.id === memberId)
      : null;
  };

  const getBook = (bookId) => {
    return Array.isArray(books) ? books.find((b) => b.id === bookId) : null;
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
        <h1 className="text-3xl font-bold mb-6 text-center">Loans Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loans.map((loan) => {
            const member = getMember(loan.memberId);
            const book = getBook(loan.bookId);
            return (
              <LoanCard key={loan.id} loan={loan} member={member} book={book} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
