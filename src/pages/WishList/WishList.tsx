import { useAppSelector } from '@/redux/hook';
import WishlistCard from './WishlistCard';

const WishList = () => {
  const isReading = useAppSelector((state) => state.books.readingList);

  return (
    <div className=" mx-[5rem]">
      <table className="table ">
        <thead>
          <tr className="grid grid-cols-8 text-left ">
            <th className=""></th>
            <th className="col-start-2  col-span-2">Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Publication Date</th>
            <th>Publication Year</th>
          </tr>
        </thead>
      </table>
      {isReading.map((wishlist) => (
        <WishlistCard wishlist={wishlist} key={wishlist._id} />
      ))}
    </div>
  );
};

export default WishList;
