import React from 'react';
import Books from './Books';

const BookCard = (book) => {
  const { title, author, genre, publicationDate } = book.book;
  return (
    <div className="card w-96 bg-base-100 shadow-2xl ">
      {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{author}</div>
        </h2>
        <p>{genre}</p>
        <p>{publicationDate}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
