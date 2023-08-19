import { useSingleBookQuery } from '@/redux/features/books/bookApi';

const SingleBook = () => {
  const { data } = useSingleBookQuery(id);

  if (!data) {
    return;
  }
  const { title, author, publicationDate, reviews, genre } = data.data;

  return (
    <div className="">
      <div className="container ">
        <div className=" flex">
          <div>
            <img
              src="https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/4cf25a33d8a4_86392.gif "
              className="image-full h-72"
              alt=""
            />
          </div>
          <div className="grid grid-cols-2 items-center">
            <div className="text-lg col-start-2 ">
              <h1 className="">
                Name Of The Book:{' '}
                <span className="font-semibold text-2xl">{title}</span>{' '}
              </h1>
              <h2>
                Author :{' '}
                <span className="text-white bg-blue-900 rounded-xl px-2 py-1">
                  {author}
                </span>
              </h2>
              <h2>Genre : {genre}</h2>
              <h2>
                Publication Date : {publicationDate ? publicationDate : 'N/A'}
              </h2>
              <h2>Reviews : {reviews}</h2>
              <div className="">
                <button className="btn-primary rounded px-4 py-1 mr-5">
                  Edit
                </button>
                <button className="btn-error rounded px-4 py-1">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
