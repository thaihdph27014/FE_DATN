import React from "react";
import { FaStar } from "react-icons/fa";
type Props = {};

const BookTour = (props: Props) => {
  return (
    <div className="container mx-auto">
      {/* header trên thôn tin dưới */}
      <div className="info mx-auto w-10/12 ">
        <div className="max-h-300px hh gap-4 flex bg-[#f9f9f9]">
          <div className="img-book w-1/3">
            <img
              className="rounded-image"
              src="https://media.travel.com.vn/tour/tfd_220701022713_187185.jpg"
              alt=""
            />
          </div>
          <div className="infoo">
            <div className="h-[230px] w-[530]  rounded-md mt-3  py-5 px-5">
            <div className="rate   flex gap-2">
            <h2 className="text-yellow-300 text-[20px]">
              <FaStar />
            </h2>
            <h2 className="text-yellow-300 text-[20px]">
              <FaStar />
            </h2>
            <h2 className="text-yellow-300 text-[20px]">
              <FaStar />
            </h2>
            <h2 className="text-yellow-300 text-[20px]">
              <FaStar />
            </h2>
            <h2 className="text-yellow-300 text-[20px]">
              <FaStar />
            </h2>
          </div>    
            <div className=" font-bold text-[#2D4271] text-[25px] py-5">
       
              <h2>Phú Quốc - Thiên đường giải trí VinWonders - Vinpearl Safari</h2>
            </div>
              <p className="mt-1 text-[#2D4271] text-[18px] font-medium">
                Khởi hành 04/10/2023 - Giờ đi: 06:00
              </p>
              <p className="mt-1 text-[#2D4271] text-[18px] font-medium">
                Tập trung 05:30 ngày 04/10/2023
              </p>
              <p className="mt-1 text-[#2D4271] text-[18px] font-medium">
                Thời gian 3 ngày
              </p>
              <p className="mt-1 text-[#2D4271] text-[18px] font-medium">
                {" "}
                Nơi khởi hành TP. Hồ Chí Minh
              </p>
              <p className="mt-1   text-[#2D4271] text-[18px] font-medium">
                {" "}
                Số chỗ còn nhận 4
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTour;
