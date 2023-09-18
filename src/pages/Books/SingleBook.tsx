/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useSingleBookQuery } from '@/redux/features/books/bookApi';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteBookModal from './DeleteBookModal';
import { useState } from 'react';
import { useAppSelector } from '@/redux/hook';
interface BookData {
  data: {
    title: string;
    author: string;
    publicationDate: string;
    reviews: number;
    genre: string;
  };
}
const SingleBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useSingleBookQuery(id!) as BookData;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const handleModalOpen = (id: any) => {
    setIsModalOpen(true);
    window.id.showModal();
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  if (!data) {
    return;
  }
  const { title, author, publicationDate, reviews, genre } = data;

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
                        onClick={handleModalOpen}
                      >
                        Delete
                      </button>
                      {isModalOpen && (
                        <DeleteBookModal
                          isOpen={isModalOpen}
                          onClose={handleModalClose}
                          id={id}
                        />
                      )}
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
