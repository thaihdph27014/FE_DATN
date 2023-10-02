import React from 'react';
import logo from './img/logo.jpg'
import bner from './img/banner.png'
import bnr from './img/bnnn.png'


const rounded = {
  borderRadius: '25px',
};
const HomePage = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      imagePath: {bner},
      price: 99.99,
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies ante at aliquam tincidunt. Vivamus vel hendrerit lectus.',
    },
    {
      id: 2,
      name: 'Product 2',
      imagePath: './img/product2.jpg',
      price: 149.99,
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies ante at aliquam tincidunt. Vivamus vel hendrerit lectus.',
    },
    {
      id: 3,
      name: 'Product 3',
      imagePath: './img/product3.jpg',
      price: 199.99,
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies ante at aliquam tincidunt. Vivamus vel hendrerit lectus.',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="banner">
        <h1 className="text-2xl text-center font-bold mb-4">Welcome to PolyTour</h1>
      </div>

      <div className="menu flex items-center justify-between">
        <div className="logo">
          <img style={rounded} src={logo} alt="Logo" className=" w-18 h-12 " />
        </div>
        <ul className="flex">
          <li className="mr-4">
            <a href="/">Du lịch</a>
          </li>
          <li className="mr-4">
            <a href="/about">Vận Chuyển</a>
          </li>
          <li className="mr-4">
            <a href="/contact">Vietravel MICE</a>
          </li>
          <li className="mr-4">
            <a href="/about">VietravelPlus </a>
          </li>
          <li className="mr-4">
            <a href="/contact">Tin tức</a>
          </li>
          <li className="mr-4">
            <a href="/contact">Liên hệ</a>
          </li>
        </ul>
        <div className="search flex items-center">
          <input type="text" placeholder="Search..." className="border border-gray-400 px-2 py-1 rounded" />
          <button className="bg-blue-500 text-white py-1 px-3 rounded ml-2">Search</button>
        </div>
      </div>

<div className='mt-5 mb-5'>
<img  src={bnr} alt="" />
</div>
<h2 className='mt-5 mb-5 '>ƯU ĐÃI TPUR GIỜ CHÓT!</h2>
      <div className="content">
        <div className="product-list grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
             
             <img
    className="mt-4 rounded-lg w-full h-40 object-cover"
    src={bner}
    alt={product.name}
  />
              <div className="product-details mt-4">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <p>{product.details}</p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="mt-8 text-center text-gray-500">
        &copy; 2023 Your Website. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;