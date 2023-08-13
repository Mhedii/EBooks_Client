

const BookCard = (book: any) => {
  const { title, author, genre, publicationDate } = book.book;
  return (
    <div className="card w-72 bg-base-100 shadow-2xl  hover:scale-110">
      <div className="card-body">
        <img
          src="https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/4cf25a33d8a4_86392.gif "
          className="image-full h-72"
          alt=""
        />
        <h2 className="card-title">{title}</h2>
        <div className="badge badge-secondary">{author}</div>
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
