const WishlistCard = (wishlist: any) => {
  const { title, author, genre, publicaitonDate, publicaitonYear } =
    wishlist.wishlist;

  console.log('a', wishlist);

  return (
    <div className="">
      <div className="">
        <div>
          <div className="">
            <table className="table">
              <tbody className="">
                <tr className="grid grid-cols-8">
                  <td className="">
                    <img
                      className="rounded-full h-12 w-12"
                      src="https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/4cf25a33d8a4_86392.gif"
                      alt=""
                    />
                  </td>
                  <td className="col-start-2 col-span-2 ">{title}</td>
                  <td>{author}</td>
                  <td>{genre}</td>
                  <td> {publicaitonDate}</td>
                  <td>{publicaitonYear}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
