import React from "react";
import { FaBeer, FaFlag } from "react-icons/fa";
type Props = {};

const DetailPage = (props: Props) => {
  const radius = {
    borderRadius: "10px",
    height: "545px",
    width: "685px",
  };
  const radius1 = {
    borderRadius: "10px",
    height: "200px",
    width: "263px",
  };
  const radius2 = {
    borderRadius: "10px",
    height: "325px",
    width: "580px  ",
  };

  return (
    <div className="container mx-auto ">
      <div className="Menu  h-10 bg-black"></div>
      {/* Header trên ội dung dưới*/}
      <div className="Detail   bg-gray-200 h-[2000px]">
        <div className="container mx-auto">
          <div className="Title flex ml-[120px] justify-between py-10">
            <div className="title">
              <p className="text-[26px] text-[#2D4271] font-bold">
                Combo 3N2Đ Wyndham Grand Phú Quốc (Vinoasis) 5 sao
              </p>
            </div>

            <div className="price buy mr-40 flex gap-5 ">
              <p className="text-[26px] text-red-500 font-bold">1,990,000₫</p>
              <p className="mt-2">/khách</p>
              <button
                type="button"
                className="text-white bg-red-500 hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-3.5 h-3.5 mr-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 21"
                >
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
                Đặt ngay
              </button>
            </div>
          </div>
          <div className="Image ml-[120px] gap-5 flex">
            <div>
              <img
                src="https://media.travel.com.vn/Combo/img_07092023_293d942d-58ab-4d01-8fb4-26d014de51f9_Untitled.png"
                style={radius}
              />
            </div>
            <div>
              {" "}
              <div className="flex gap-5">
                {" "}
                <img
                  style={radius1}
                  src="https://media.travel.com.vn/Combo/Slides/slide_img_290420225b85494b-8707-4be6-9b7b-f09791503fca.jpg"
                  alt=""
                />
                <img
                  style={radius1}
                  src="https://media.travel.com.vn/Combo/Slides/slide_img_290420225b85494b-8707-4be6-9b7b-f09791503fca.jpg"
                  alt=""
                />{" "}
              </div>
              <div className="mt-5">
                <img
                  src="https://media.travel.com.vn/Combo/img_07092023_293d942d-58ab-4d01-8fb4-26d014de51f9_Untitled.png"
                  style={radius2}
                />
              </div>
            </div>
          </div>
          <div className="Description gap-28 flex ml-[120px] mt-5">
            <div className="Desc text-[#2D4271] text-[15px]">
              <p>
                Đà Lạt tinh khôi, trong lành giữa rừng thông cùng muôn <br />{" "}
                hoa đua nở dưới nắng xuân dịu dàng và những cảnh đẹp nao <br />{" "}
                lòng luôn hấp dẫn du khách thập phương. Đà Lạt luôn không ngừng
                đổi mới <br />
                và khiến người ta say đắm quên lối về với một sắc thái, một nét
                đẹp riêng vốn có.
              </p>
              <div className="h-[230px] w-[530] border rounded-md mt-3 bg-white py-5 px-5">
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
            <div className="grid grid-cols-4 gap-5">
              <div className="">
                <h2 className="text-blue-600">
                  <FaFlag />
                </h2>
                <p>Thời gian</p>
                <p>3 ngày 2 đêm</p>
              </div>
              <div className="">
                <h2 className="text-blue-600">
                  <FaFlag />
                </h2>
                <p>Thời gian</p>
                <p>3 ngày 2 đêm</p>
              </div>
              <div className="">
                <h2 className="text-blue-600">
                  <FaFlag />
                </h2>
                <p>Thời gian</p>
                <p>3 ngày 2 đêm</p>
              </div>
              <div className="">
                <h2 className="text-blue-600">
                  <FaFlag />
                </h2>
                <p>Thời gian</p>
                <p>3 ngày 2 đêm</p>
              </div>
              <div className="">
                <h2 className="text-blue-600">
                  <FaFlag />
                </h2>
                <p>Thời gian</p>
                <p>3 ngày 2 đêm</p>
              </div>
              <div className="">
                <h2 className="text-blue-600">
                  <FaFlag />
                </h2>
                <p>Thời gian</p>
                <p>3 ngày 2 đêm</p>
              </div>
              <div className="">
                <h2 className="text-blue-600">
                  <FaFlag />
                </h2>
                <p>Thời gian</p>
                <p>3 ngày 2 đêm</p>
              </div>
              <div className="">
                <h2 className="text-blue-600">
                  <FaFlag />
                </h2>
                <p>Thời gian</p>
                <p>3 ngày 2 đêm</p>
              </div>
            </div>
          </div>
          <div className="text-center font-bold text-[#2D4271] text-[25px] py-5"> <h2>Lịch trình</h2></div>
          <div className="ml-[120px] mr-[115px] lichtring h-[500px] bg-white border-[1px] rounded border-gray-400 ">

          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
