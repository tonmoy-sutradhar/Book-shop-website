import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreReadList } from "../../utilits/addToDB";
const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);

  const data = useLoaderData();

  const book = data.find((b) => b.bookId === id);
  const { image, bookId: currentID, bookName } = book;

  const handleMarkAsRead = (id) => {
    /**
     * 1. understand what to store or save: => bookId
     * 2. where to store: database
     * 3. array,list, collection
     * 4. check: if the book is already in the readList.
     * 5. if not, then add the book to the list
     * 6. if yes, do not add the list
     */

    addToStoreReadList(id);
  };
  return (
    <div className="my-8">
      <img className="w-36 mb-1" src={image} alt="" />
      <h1>ID: {currentID}</h1>
      <h1 className="text-xl font-thin mb-2">{bookName}</h1>
      <div className="flex gap-3">
        <button
          onClick={() => handleMarkAsRead(bookId)}
          className="btn btn-outline btn-accent"
        >
          Mark As Read
        </button>
        <button className="btn btn-active btn-accent">Add to Wish list</button>
      </div>
    </div>
  );
};

export default BookDetails;
