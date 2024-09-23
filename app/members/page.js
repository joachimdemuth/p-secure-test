"use client";

import { useState, useEffect } from "react";
import MemberCard from "../components/MemberCard";
import Header from "../components/Header";
import { fetchFromAPI } from "../utils/fetchData";
import ErrorMessage from "../components/ErrorMessage";

export default function MembersPage() {
  const [members, setMembers] = useState([]);
  const [loans, setLoans] = useState([]);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const membersData = await fetchFromAPI("members");
        const loansData = await fetchFromAPI("loans");
        const booksData = await fetchFromAPI("books");

        setMembers(membersData);
        setLoans(loansData || []);
        setBooks(booksData);

        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load members, loans, or books data.");
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const getBookTitlesForMember = (memberId) => {
    const memberLoans = loans.filter((loan) => loan.memberId === memberId);
    return memberLoans.map((loan) => {
      const book = books.find((b) => b.id === loan.bookId);
      return book ? book.title : "Unknown Book";
    });
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
        <h1 className="text-3xl font-bold mb-6 text-center">
          Members Overview
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => {
            const bookTitles = getBookTitlesForMember(member.id);
            return (
              <MemberCard
                key={member.id}
                member={member}
                borrowedBooks={bookTitles || []}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
