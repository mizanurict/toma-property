/** @format */
import 'animate.css';
import { Helmet } from "react-helmet-async";

const Service = () => {
  return (
    <div>
      <Helmet>
        <title>Home|Service</title>
      </Helmet>
      <div className="p-2 space-y-4 text-center">
          <div className="space-y-2">
          <h2 className="font-bold text-2xl animate__animated animate__backInDown ">Home Loan</h2> 
          <div className=' animate__animated animate__fadeIn animate__delay-1s'>
          <h3 className="font-semibold">How Home Loans Benefit You?</h3>
                  <p className="opacity-90">A loan is an amount of money borrowed for a set period within an agreed repayment schedule. The repayment amount will depend on the size and duration of the loan and the rate of interest. Loans are generally most suitable for: paying for assets - eg vehicles and computers. start-up capital.</p>
                  </div>
        </div>
        <div className="space-y-2">
          <h2 className="font-bold text-2xl animate__animated animate__lightSpeedInLeft animate__delay-2s">Property Buying</h2>
          <p className=' animate__animated animate__fadeIn animate__delay-3s'>Find your perfect home or investment with our comprehensive buying support services.</p>
        </div>
        <div className="space-y-2">
          <h2 className="font-bold text-2xl animate__animated animate__lightSpeedInRight animate__delay-4s">Property Selling</h2>
          <p className=' animate__animated animate__fadeIn animate__delay-5s'>Maximize your property value with professional listing services and expert negotiations.</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
