import React from "react";
import { IoAddCircle } from "react-icons/io5";

const Card = ({ name, half, full, onePiece, twoPiece, price, category }) => {
  return (
    <div className="relative flex justify-around m-6 hover:border-2 p-3 rounded-md gap-2 hover:border-white bg-secondary hover:bg-primary text-bgColor group/select select-none">
      <img
        className="w-[50%] group-hover/select:scale-110"
        src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt={category}
      />
      <div className="w-[50%] flex flex-col text-nowrap justify-center items-end font-bold">
        <h1 className="w-full text-wrap">{name}</h1>
        {half && full ? (
          <>
            <p>
              Half <span className="text-emerald-700">₹ {half} /-</span>
            </p>
            <p>
              Full <span className="text-emerald-700">₹ {full} /-</span>
            </p>
          </>
        ) : (
          <>
            {onePiece && twoPiece ? (
              <>
                <p>
                  1 Piece{" "}
                  <span className="text-emerald-700">₹ {onePiece} /-</span>
                </p>
                <p>
                  2 Pieces{" "}
                  <span className="text-emerald-700">₹ {twoPiece} /-</span>
                </p>
              </>
            ) : (
              <p>
                Price <span className="text-emerald-700">₹ {price} /-</span>
              </p>
            )}
          </>
        )}
      </div>
      {/* <h6>{category}</h6> */}
    {/*  <IoAddCircle className="absolute flex bottom-0 right-0 text-3xl text-[#001D3D]" /> */}
    </div>
  );
};

export default Card;
