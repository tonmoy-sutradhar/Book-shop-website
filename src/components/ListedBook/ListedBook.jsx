import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreReadList } from "../../utilits/addToDB";
import Book from "../Book/Book";
const ListedBook = () => {
  const [readList, setReadList] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoreReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    // worst way
    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, []);
  return (
    <div>
      <h1 className="text-3xl my-7">Listed Book</h1>

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl font-bold text-center">
            Books I read: {readList.length}
          </h2>
          <h2>
            {readList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </h2>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl font-bold text-center">My wish list</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBook;
