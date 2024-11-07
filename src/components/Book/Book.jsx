import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl p-6">
        <figure className="bg-gray-100 py-8 rounded-2xl">
          <img className="h-[166px] " src={image} alt={bookId} />
        </figure>
        <div className="card-body">
          <div className="flex  justify-start gap-3">
            {tags.map((t, indx) => (
              <button
                key={indx}
                className="btn btn-xs bg-green-100 text-green-600"
              >
                {t}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By: {author}</p>
          <div className="border-2 border-dashed"></div>
          <div className="card-actions justify-between">
            <div className="">{category}</div>
            <div className="flex justify-center items-center gap-2">
              <div className="badge badge-outline">{rating}</div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
