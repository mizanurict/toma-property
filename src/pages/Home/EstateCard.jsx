/** @format */
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const EstateCard = ({ estate }) => {
    const { id, estate_title, description,status,image,location} = estate;
  return (
    <div>
      <div className="card flex-wrap w-full bg-base-100 shadow-xl">
        <figure className="h-60" >
          <img className="w-full h-full" src={image} alt={estate_title} />
        </figure>
        <div className="card-body">
                  <h2 className="card-title">{ estate_title }</h2>
                  <p className="opacity-70">{ description }</p>
                  
                  <div><h3 className='my-2'> <span className="font-semibold">Status:</span> { status } </h3>
                  <h4>Location: <span  className="font-semibold">{ location}</span> </h4></div>
          <div className="card-actions justify-center">
            <Link to={`/estate/${id}`}><button className="btn btn-secondary">View Property</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateCard;

EstateCard.propTypes = {
  estate:PropTypes.object
}
