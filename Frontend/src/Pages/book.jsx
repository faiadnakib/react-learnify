import React from "react";
import "./book.css"; // Your existing CSS

// Example eBooks data
const books = [
  {
    title: "C ++ : The Good Parts",
    description: "An essential guide to learning JavaScript effectively.",
    image:
      "https://res.cloudinary.com/dteiugdcu/image/upload/v1741438625/book3_wmsde1.jpg",
    link: "https://example.com/ebooks/js-the-good-parts",
  },
  {
    title: "HTML & CSS: Design and Build Websites",
    description: "Learn the basics of web design with HTML & CSS.",
    image:
      "https://res.cloudinary.com/dteiugdcu/image/upload/v1741438625/book1_ct0xk6.jpg",
    link: "https://example.com/ebooks/html-css",
  },
  {
    title: "Learning Python",
    description: "A beginner's guide to programming with Python.",
    image:
      "https://res.cloudinary.com/dteiugdcu/image/upload/v1741438625/book2_mouydt.jpg",
    link: "https://example.com/ebooks/learning-python",
  },
  {
    title: "The Pragmatic Programmer",
    description: "A classic book for software development best practices.",
    image:
      "https://res.cloudinary.com/dteiugdcu/image/upload/v1741438809/book5_e3szte.jpg",
    link: "https://example.com/ebooks/the-pragmatic-programmer",
  },
  {
    title: "JavaScript: The Good Parts",
    description: "An essential guide to learning JavaScript effectively.",
    image:
      "https://res.cloudinary.com/dteiugdcu/image/upload/v1741464397/book5_xaifdi.jpg",
    link: "https://example.com/ebooks/js-the-good-parts",
  },
  {
    title: "Introduction to Algorithms",
    description:
      "The book is described by its publisher as the leading algorithms text in universities worldwide as well as the standard reference for professionals",
    image:
      "https://res.cloudinary.com/dteiugdcu/image/upload/v1741464397/book7_jsuky3.jpg",
    link: "https://example.com/ebooks/html-css",
  },
  {
    title: "Refactoring",
    description:
      "Refactoring is a technique for improving code design by applying small, behavior-preserving changes that are too minor to be worth doing individually.",
    image:
      "https://res.cloudinary.com/dteiugdcu/image/upload/v1741464397/book7_jsuky3.jpg",
    link: "https://example.com/ebooks/learning-python",
  },
  {
    title: "Blue Ocean Strategy",
    description:
      "Blue Ocean Strategy presents a systematic approach to making the competition irrelevant and capture their own blue oceans.",
    image:
      "https://res.cloudinary.com/dteiugdcu/image/upload/v1741464398/book8_h7gbtb.jpg",
    link: "https://example.com/ebooks/the-pragmatic-programmer",
  },
  {
    title: "Steal Like an Artist",
    description:
      "Steal Like an Artist by Austin Kleon inspires creativity by showing that true innovation comes from borrowing and reimagining ideas, not creating from scratch.",
    image:
      "https://res.cloudinary.com/dteiugdcu/image/upload/v1741464398/book9_tfflhu.jpg",
    link: "https://example.com/ebooks/js-the-good-parts",
  },
  {
    title: "Arts & Crafts Homes and the Revival",
    description:
      "This magazine celebrates the Arts and Crafts Movement's revival, featuring modern design, construction, and restoration, along with work from both past masters and today's artisans.",
    image:
      "https://res.cloudinary.com/dteiugdcu/image/upload/v1741464397/book10_kuxgjc.jpg",
    link: "https://example.com/ebooks/html-css",
  },
  {
    title: "Think and Grow Rich",
    description:
      "Think and Grow Rich by Napoleon Hill, released in 1937, is a personal development book inspired by Andrew Carnegie, focusing on self-improvement and achieving success.",
    image:
      "https://res.cloudinary.com/dteiugdcu/image/upload/v1741464397/book11_n5wz2a.jpg",
    link: "https://example.com/ebooks/learning-python",
  },
  {
    title: "Zero to One: Notes on Startups",
    description:
      "Zero to One: Notes on Startups, or How to Build the Future is a 2014 book by the American entrepreneur and investor Peter Thiel co-written with Blake Masters.",
    image:
      "https://res.cloudinary.com/dteiugdcu/image/upload/v1741464398/book12_hpo1ws.jpg",
    link: "https://example.com/ebooks/the-pragmatic-programmer",
  },
  // Add more books if needed
];

// BookPage JSX
const BookPage = () => {
  return (
    <>
      <div className="book-page">
        <div className="books-section">
          <h1>Books Collection</h1>
          <div className="books-container">
            {books.map((book, index) => (
              <div className="book-card" key={index}>
                <img src={book.image} alt={book.title} className="book-image" />
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
