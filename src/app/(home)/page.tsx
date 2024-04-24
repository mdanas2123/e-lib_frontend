import Banner from "@/app/(home)/components/Banner";
import BookList from "./components/BookList";

export default async function Home() {
  try {
    const response = await fetch(`${process.env.Backend_URL}/books`);
    if (!response.ok) {
      throw new Error('Error occurred while fetching books');
    }
    const books = await response.json();
    // console.log("books", books);
    return (
      <>
        <Banner />
        <BookList books={books}/>
      </>
    );
  } catch (error) {
    console.error("Error fetching books:", error);
    // You might want to handle the error here, e.g., show an error message to the user
  }
}
