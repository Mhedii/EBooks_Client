import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Header = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg"
            alt=""
            className=" w-full "
            style={{ height: '80vh' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://basecamplive.com/wp-content/uploads/2023/02/books.jpeg"
            alt=""
            className=" w-full "
            style={{ height: '80vh' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.nea.org/sites/default/files/styles/1920wide/public/2021-01/Free-Book.jpg?itok=A0UCklYk"
            alt=""
            className=" w-full "
            style={{ height: '80vh' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.realsimple.com/thmb/KrGb42aamhHKaMzWt1Om7U42QsY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/great-books-for-anytime-2000-4ff4221eb1e54b659689fef7d5e265d5.jpg"
            alt=""
            className=" w-full "
            style={{ height: '80vh' }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://schoolreadinglist.co.uk/wp-content/uploads/2022/12/books-for-year-6-l.jpg"
            alt=""
            className=" w-full "
            style={{ height: '80vh' }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
