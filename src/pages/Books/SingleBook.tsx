/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  useAddReviewMutation,
  useDeleteBookMutation,
  useSingleBookQuery,
} from '@/redux/features/books/bookApi';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '@/redux/hook';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

interface BookData {
  data: {
    data: {
      _id: any;
      title: any;
      author: any;
      publicaitonDate: any;
      reviews: any;
      genre: any;
    };
    title: string;
    author: string;
    publicaitonDate: string;
    reviews: number;
    genre: string;
  };
}
const SingleBook = () => {
  const { handleSubmit, register, reset } = useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useSingleBookQuery(id);

  const [AddReview] = useAddReviewMutation();
  const [deleteBook] = useDeleteBookMutation();

  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  // const [allReview, setAllReview] = useState(data ? data.data.reviews : []);
  const [allReview, setAllReview] = useState<string[]>([]);
  useEffect(() => {
    if (data) {
      setAllReview(data.data.reviews);
    }
  }, [data]);

  if (!data) {
    return <p>Loading.......</p>;
  }

  const { title, author, publicaitonDate, genre, _id } = data.data;
  const handleDelete = () => {
    deleteBook(_id);
    toast('Delete Successfully');
    navigate('/');
  };

  const onSubmit = async (data: any) => {
    const review = data.review;
    await AddReview({
      _id,
      data: {
        reviews: [review],
      },
    });
    setAllReview([...allReview, review]);
    toast('Review Added Successfully');
    reset();
  };
  return (
    <div className="">
      <div className="container ">
        <div className=" flex container justify-evenly">
          <div>
            <img
              src="https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/4cf25a33d8a4_86392.gif "
              className="image-full h-72 rounded-xl"
              alt=""
            />
          </div>
          <div className="grid  items-center">
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
                Publication Date : {publicaitonDate ? publicaitonDate : 'N/A'}
              </h2>
              {/* <h2>Reviews : {reviews}</h2> */}

              <div className="">
                {isAuthenticated ? (
                  <>
                    <div className="flex">
                      <button
                        className="btn-primary rounded px-4 py-1 mr-5"
                        onClick={() => navigate(`/editbook/${id}`)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn-error rounded px-4 py-1"
                        onClick={() =>
                          document.getElementById(_id)?.showModal()
                        }
                      >
                        Delete
                      </button>

                      <dialog id={_id} className="modal">
                        <form method="dialog" className="modal-box">
                          <h3 className="font-bold text-lg">Hello!</h3>
                          <p>Are you sure you want to delete this book?</p>
                          <div className="modal-action">
                            <button
                              className="btn btn-primary mr-2"
                              onClick={handleDelete}
                            >
                              Delete
                            </button>
                            <button className="btn">Cancel</button>
                          </div>
                        </form>
                      </dialog>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
              {isAuthenticated ? (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mt-2">
                    <textarea
                      {...register('review')}
                      placeholder="Plase Give a Review"
                      className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                    ></textarea>
                    <button className="btn btn-neutral" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              ) : (
                <></>
              )}
              <p className="mt-2 text-sm font-semibold">Last 3 Reviews</p>
              {allReview ? (
                allReview
                  .slice(-3)
                  .reverse()
                  .map((review: any) => (
                    <>
                      <p className="text-sm " key={review}>
                        {review}
                      </p>
                    </>
                  ))
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
