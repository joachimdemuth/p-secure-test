export default function LoanCard({ loan, member, book }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      <h2 className="text-lg font-bold">Loan Information</h2>
      <p>
        Member:{" "}
        {member ? `${member.firstName} ${member.lastName}` : "Unknown Member"}
      </p>
      <p>Book: {book ? book.title : "Unknown Book"}</p>
      <p>Loan Date: {new Date(loan.loanDate).toLocaleDateString()}</p>
      <p>
        Return Date:{" "}
        {loan.returnDate
          ? new Date(loan.returnDate).toLocaleDateString()
          : "Not returned yet"}
      </p>
    </div>
  );
}
