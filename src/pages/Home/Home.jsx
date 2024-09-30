/** @format */
import { useLoaderData } from 'react-router-dom';
import SlideBanner from "../shared/SlideBanner";
import EstateCard from './EstateCard';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const estates = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
          <SlideBanner></SlideBanner>
      <h1 className='text-center text-3xl font-bold mt-16'>Residential Estates</h1>
      <p className='text-center opacity-90'>A housing estate is a group of homes and other buildings built together as a single development. The exact form may vary from country to country.Residential area means land used as a permanent residence or domicile, such as a house, apartment, nursing home, school, child care facility or prison, land. </p>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-16 justify-center items-center'>
              {
                  estates.map(estate=><EstateCard key={estate.id } estate={estate}></EstateCard>)
              }
      </div>
    </div>
  );
};

export default Home;
