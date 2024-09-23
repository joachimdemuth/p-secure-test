import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-yellow-300 to-yellow-600">
      <h1 className="text-4xl font-extrabold mb-8 tracking-tight">
        Library System Overview
      </h1>
      <div className="flex space-x-4">
        <a
          href="/books"
          className="btn bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition"
        >
          View Books
        </a>
        <a
          href="/members"
          className="btn bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition"
        >
          View Members
        </a>
        <a
          href="/loans"
          className="btn bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition"
        >
          View Loans
        </a>
      </div>
    </div>
  );
}
