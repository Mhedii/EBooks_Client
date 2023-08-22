const BookCard = (book: any) => {
  const { title, author, genre, publicaitonDate } = book.book;
  return (
    <div className="card  bg-base-100 shadow-2xl shadow-black  hover:scale-110">
      <div className="card-body">
        <img
          src="https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/4cf25a33d8a4_86392.gif "
          className="rounded-xl image-full h-40 w-40"
          alt=""
        />
        <h2 className="card-title lg:text-lg text-sm">{title}</h2>
        <div className="badge badge-secondary lg:text-sm text-xs">{author}</div>
        <p className="lg:text-sm text-xs">
          <span className="font-semibold">Genre:</span> {genre}
        </p>
        <p className="lg:text-sm text-xs">
          <span className="font-semibold">Publish Date:</span> {publicaitonDate}
        </p>
        <div className="card-actions justify-end">
          {/* <div className="badge badge-outline lg:text-sm text-xs">Finance</div> */}
          {/* <div className="badge badge-outline lg:text-sm text-xs">Fiction</div> */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
