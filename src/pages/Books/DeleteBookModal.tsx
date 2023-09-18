import { useDeleteBookMutation } from '@/redux/features/books/bookApi';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function DeleteBookModal({ onClose, id }: any) {
  const [deleteBook] = useDeleteBookMutation();
  const navigate = useNavigate();
  const handleDelete = () => {
    deleteBook(id);

    toast('Delete Successfully');
    onClose();
    navigate('/');
  };

  return (
    <>
      <dialog id="id" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p>Are you sure you want to delete this book?</p>
          <div className="modal-action">
            <button className="btn btn-primary mr-2" onClick={handleDelete}>
              Delete
            </button>
            <button className="btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default DeleteBookModal;
