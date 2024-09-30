/** @format */

import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>Home|About</title>
      </Helmet>
      <h1 className="font-bold text-3xl my-8 text-center">Why choose us?</h1>

      <div className="p-2 text-justify space-y-4">
        <p  data-aos="zoom-in" data-aos-delay="500" data-aos-duration="2000" >
          Toma realty (formerly Expat Property Brokers) is built on the ethos of service beyond expectations. Our focus has always been on quality
          service and working together to achieve an ideal outcome for our valued clients. We aim to build our brand and positively redefine the real
          estate market with personal and exceptional service.
        </p>
        <p data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="2000">
          Toma realty was established in 2016 by experienced international estate agent Bridgette Ball and her husband Jason Ball. We wanted to
          establish a brand that we felt best represented our values. Over the years the business has shown a natural growth in the expat property
          market as we have an understanding of having walked in the shoes of our clients being expats ourselves.{" "}
        </p>

        <p data-aos="zoom-in" data-aos-delay="1500" data-aos-duration="2000">
          That is why, for a period, the company was renamed Expat Property Brokers and began focusing primarily on expat property. With this success,
          more expat agencies began targeting the expat market, positioning themselves as expat specialists, and the name “Expat Property Brokers”
          became diluted, becoming as “an” rather than “the” expat property brokerage. Hence, in 2023 we decided to change our name back to Toma
          realty.
        </p>

        <p data-aos="zoom-in" data-aos-delay="2000" data-aos-duration="2000">
          “Our mission at Toma realty remains the same to provide comprehensive real estate services tailored specifically for expats in the
          Netherlands. Our goal is to help you find your next home easily and confidently. We are Your Expat Property Broker, an experienced team that
          understands how to handle your real estate needs as an expat.”
        </p>

        <p data-aos="zoom-in" data-aos-delay="2500" data-aos-duration="1000">
          Our keen understanding of the market and our clients needs allow us to craft the best estate solutions that offer exceptional service to
          clients at affordable rates.
        </p>
          </div>
          <div></div>
    </div>
  );
};

export default About;
