import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-yellow-300 to-yellow-600 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <div>
          <h1 className="text-2xl font-bold">Library Admin Panel</h1>
        </div>
        <div className="space-x-4">
          <Link href="/" className="hover:bg-yellow-500 px-3 py-2 rounded-md">
            Home
          </Link>
          <Link
            href="/books"
            className="hover:bg-yellow-500 px-3 py-2 rounded-md"
          >
            Books
          </Link>
          <Link
            href="/members"
            className="hover:bg-yellow-500 px-3 py-2 rounded-md"
          >
            Members
          </Link>
          <Link
            href="/loans"
            className="hover:bg-yellow-500 px-3 py-2 rounded-md"
          >
            Loans
          </Link>
        </div>
      </nav>
    </header>
  );
}
