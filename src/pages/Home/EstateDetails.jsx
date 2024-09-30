/** @format */

import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
const EstateDetails = () => {
  const estates = useLoaderData();
  const estateId = useParams();

  const estate = estates.find((estate) => estate.id === Number(estateId.id));

  const { estate_title, segment_name, description, price, status, image,area, facilities, location } = estate;

  return (
    <div>
      <Helmet> <title>Home|View Details</title> </Helmet>
          <h2 className="text-center font-bold text-3xl">View Details</h2>
      <div className="card card-side bg-base-100 shadow-xl grid lg:grid-cols-5  ">
        <div className="card-body bg-slate-50 rounded-l-lg grid lg:col-span-3 order-last md:order-last lg:order-none">
                  <h2 className="card-title text-2xl font-bold">{ estate_title }</h2>
                  <h3>Segment: <span>{ segment_name}</span></h3>
                  <p className="opacity-70">{ description }</p>
                  <hr />
                  <div> Facilities: 
                      {
                          facilities.map((facility, index) => {
                              return (
                                  <span className='mr-2 text-sm' key={index}>
                                      <span className=" font-semibold mx-1 text-orange-900">#{facility}</span>
                                  </span>
                              )
                          })
                      }
                  </div>
                  
                  <div className="flex my-2">
                      <p>Status: <span className="font-bold"> { status } </span></p>
                      <p>Area: <span className="font-bold"> { area } </span></p>
                      <p>Price: <span className="font-bold text-red-600"> {price} </span></p>
                  </div>
                  <p className="my-4">Address: <span className="font-semibold">{ location } </span> </p>
                  
                  <button className="btn btn-secondary font-bold text-2xl">Book Now</button>
          
        </div>
        <div className="grid lg:col-span-2">
          <img className="w-screen h-full rounded-r-lg" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
