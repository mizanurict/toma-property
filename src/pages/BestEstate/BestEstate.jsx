/** @format */

import { Helmet } from "react-helmet-async";

const BestEstate = () => {
  return (
    <div>
      <Helmet>
        <title>Home|Best Estate</title>
          </Helmet>
          <h1 className="my-6 font-bold text-3xl text-center">Best Property for you</h1>
      <div className="card card-side bg-base-100 shadow-xl grid lg:grid-cols-5  ">
        <div className="card-body bg-slate-50 rounded-l-lg grid lg:col-span-3 order-last md:order-last lg:order-none">
          <h2 className="card-title text-2xl font-bold">Spacious Villa with Mountain Retreat</h2>

          <p className="opacity-70">
            Expansive villa nestled in the mountains, offering tranquility and luxury. Features lush gardens, private pool, and panoramic views.
          </p>
          <hr />
          <div>
            {" "}
            Facilities:{" "}
            <span className="mr-2 text-sm">
              <span className=" font-semibold mx-1 text-orange-900">#living room</span>
              <span className=" font-semibold mx-1 text-orange-900">#swimming pool</span>
              <span className=" font-semibold mx-1 text-orange-900">#garden</span>
              <span className=" font-semibold mx-1 text-orange-900">#game room</span>
            </span>
          </div>

          <div className="flex my-2">
            <p>
              Status: <span className="font-bold"> sale </span>
            </p>
            <p>
              Area: <span className="font-bold"> 5000 sq ft </span>
            </p>
            <p>
              Price: <span className="font-bold text-red-600"> $1,500,000 </span>
            </p>
          </div>
          <p className="my-4">
            Address: <span className="font-semibold"> Mountain Valley Estates </span>
          </p>

        </div>
        <div className="grid lg:col-span-2">
          <img className="w-screen h-full rounded-r-lg" src="https://i.ibb.co/M9VYgDs/Image.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default BestEstate;
