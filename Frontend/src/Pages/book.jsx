import React from "react";
import Navbar from "../components/navbar.jsx"; // Import the Navbar
import Footer from "../components/footer.jsx"; // Import the Footer
import "./book.css"; // Your existing CSS

// Example eBooks data
const books = [
  {
    title: "JavaScript: The Good Parts",
    description: "An essential guide to learning JavaScript effectively.",
    image: "https://example.com/images/book1.jpg",
    link: "https://example.com/ebooks/js-the-good-parts",
  },
  {
    title: "HTML & CSS: Design and Build Websites",
    description: "Learn the basics of web design with HTML & CSS.",
    image: "https://example.com/images/book2.jpg",
    link: "https://example.com/ebooks/html-css",
  },
  {
    title: "Learning Python",
    description: "A beginner's guide to programming with Python.",
    image: "https://example.com/images/book3.jpg",
    link: "https://example.com/ebooks/learning-python",
  },
  {
    title: "The Pragmatic Programmer",
    description: "A classic book for software development best practices.",
    image: "https://example.com/images/book4.jpg",
    link: "https://example.com/ebooks/the-pragmatic-programmer",
  },
  {
    title: "JavaScript: The Good Parts",
    description: "An essential guide to learning JavaScript effectively.",
    image: "https://example.com/images/book1.jpg",
    link: "https://example.com/ebooks/js-the-good-parts",
  },
  {
    title: "HTML & CSS: Design and Build Websites",
    description: "Learn the basics of web design with HTML & CSS.",
    image: "https://example.com/images/book2.jpg",
    link: "https://example.com/ebooks/html-css",
  },
  {
    title: "Learning Python",
    description: "A beginner's guide to programming with Python.",
    image: "https://example.com/images/book3.jpg",
    link: "https://example.com/ebooks/learning-python",
  },
  {
    title: "The Pragmatic Programmer",
    description: "A classic book for software development best practices.",
    image: "https://example.com/images/book4.jpg",
    link: "https://example.com/ebooks/the-pragmatic-programmer",
  },
  {
    title: "JavaScript: The Good Parts",
    description: "An essential guide to learning JavaScript effectively.",
    image: "https://example.com/images/book1.jpg",
    link: "https://example.com/ebooks/js-the-good-parts",
  },
  {
    title: "HTML & CSS: Design and Build Websites",
    description: "Learn the basics of web design with HTML & CSS.",
    image: "https://example.com/images/book2.jpg",
    link: "https://example.com/ebooks/html-css",
  },
  {
    title: "Learning Python",
    description: "A beginner's guide to programming with Python.",
    image: "https://example.com/images/book3.jpg",
    link: "https://example.com/ebooks/learning-python",
  },
  {
    title: "The Pragmatic Programmer",
    description: "A classic book for software development best practices.",
    image: "https://example.com/images/book4.jpg",
    link: "https://example.com/ebooks/the-pragmatic-programmer",
  },
  // Add more books if needed
];

const BookPage = () => {
  return (
    <>
      <div className="book-page">
        <div className="books-section">
          <h1>Books Collection</h1>
          <div className="books-container">
            {books.map((book, index) => (
              <div className="book-card" key={index}>
                <img src={book.image} alt={book.title} />
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <a href={book.link} target="_blank" rel="noopener noreferrer">
                  Read Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookPage;
