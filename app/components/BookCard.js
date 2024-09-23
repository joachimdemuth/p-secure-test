export default function BookCard({ book, authorName }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      <h2 className="text-lg font-bold">{book.title}</h2>
      <p>Author: {authorName}</p>
      <p>Publication Year: {book.publicationYear}</p>
      <p>ISBN: {book.isbn}</p>
      <p>Genre: {book.genre}</p>
    </div>
  );
}
