'use Client';
import { BiSolidShoppingBag } from 'react-icons/bi';
import { IoMdBookmark } from 'react-icons/io';
import { IoPersonSharp, IoSearch } from 'react-icons/io5';
import handbag from '../assests/Frame 20.png';
import searchIcon from '../assests/searchIcon.png';
import personicon from '../assests/Frame 52.png';
import bookmarkicon from '../assests/Frame 53.png';
import bagicon from '../assests/Frame 54.png';
import toteicon from '../assests/Group 300.png';
import duffleicon from '../assests/Group 301.png';
import laptopicon from '../assests/Group 302.png';
import messangericon from '../assests/Group 303.png';
import Slingsicon from '../assests/Group 304.png';
import Bucketicon from '../assests/Group 306.png';
import Vanityicon from '../assests/Group 307.png';
import bagPLusicon from '../assests/Group 450.png';
import allbagicon from '../assests/Group 475.png';
import Tann from '../assests/TANN TRIM.png';
import icon from '../assests/Bookmark.png';
import { useEffect, useState } from 'react';

const Header = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      await fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((data) => setData(data?.products));
    } catch (err) {
      console.error(err);
    }
  };
  console.log(data);
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <header className="bg-black h-[105px] ">
        <div className="xl:w-[1536px] xl:mx-auto px-8 flex justify-between p-4">
          <div className="">
            <img src={Tann.src} alt="check" />
          </div>
          <div className="basis-[10%]">
            <ul className="flex justify-between list-none text-white w-full">
              <li>
                <img src={searchIcon.src} alt="check" />
              </li>
              <li>
                <img src={personicon.src} alt="check" />
              </li>
              <li>
                <img src={bookmarkicon.src} alt="check" />
              </li>
              <li>
                <img src={bagicon.src} alt="check" />
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <ul className="w-[35%] mx-auto flex justify-between text-white list-none">
            <li>Bags</li>
            <li>Travel</li>
            <li>Accesories</li>
            <li>Gifting</li>
            <li>Jewelery</li>
          </ul>
        </div>
      </header>
      <div className="bg-black flex justify-between pt-4 px-4">
        <div>
          <img src={allbagicon.src} alt="check" />
        </div>
        <div>
          <img src={Vanityicon.src} alt="check" />
        </div>
        <div>
          <img src={toteicon.src} alt="check" />
        </div>
        <div>
          <img src={duffleicon.src} alt="check" />
        </div>
        <div>
          <img src={laptopicon.src} alt="check" />
        </div>
        <div>
          <img src={messangericon.src} alt="check" />
        </div>
        <div>
          <img src={Slingsicon.src} alt="check" />
        </div>
      </div>

      <div className="bg-black text-white flex justify-between p-6">
        <div className="flex gap-5 ">
          Bags
          <ul>
            <li>Backpacks</li>
          </ul>
        </div>
        <div>
          <span>13 products</span>
          <span></span>
        </div>
      </div>
      <div
        className="bg-black grid grid-cols-4 gap-4 text-white justify-items-center 
      "
      >
        {data?.map((item, index) => (
          <div
            key={index}
            className="bg-white w-[240px]  rounded-lg flex gap-2 flex-col"
          >
            {/* ist con  */}
            <div className="relative">
              <div className="">
                {' '}
                <img
                  src={item?.images[0]}
                  alt="Product"
                  width={240}
                  height={300}
                />
              </div>

              <img
                src={icon.src}
                alt="check"
                width={25}
                height={30}
                className="absolute right-4 top-4"
              />
            </div>
            {/* second container  */}
            <div className="flex flex-col gap-2 text-white bg-gray-950 pt-2 h-full ">
              <div className="text-xl">{item?.title}</div>
              <div className="flex justify-between items-center">
                <span className="text-lg"> ${item.price}</span>
                <span>
                  <img src={bagPLusicon.src} alt="" check />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Header;
