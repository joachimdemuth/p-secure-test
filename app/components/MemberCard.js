export default function MemberCard({ member, borrowedBooks }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      <h2 className="text-lg font-bold">
        {member.firstName} {member.lastName}
      </h2>
      <p>Email: {member.email}</p>
      <p>
        Membership Date: {new Date(member.membershipDate).toLocaleDateString()}
      </p>

      {borrowedBooks.length > 0 ? (
        <div>
          <h3 className="text-md font-bold mt-4">Borrowed Books:</h3>
          <ul className="list-disc list-inside">
            {borrowedBooks.map((title, index) => (
              <li key={index}>{title}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-gray-600 mt-4">No books borrowed.</p>
      )}
    </div>
  );
}
