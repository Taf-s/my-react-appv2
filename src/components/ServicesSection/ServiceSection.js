import React from "react";

/**
 * Renders a component that displays a list of services.
 *
 * @return {JSX.Element} The rendered component.
 */
const Services = () => {
  return (
    // Outer container for the services section
    <div className="fixed top-80 left-40 max-w-lg h-96">
      {/* Heading for the services section */}
      <h1 className="services-title text-black text-3xl font-medium">
        Services
      </h1>
      {/* Section for software development services */}
      <h2 className="subtitle-1 text-black text-lg font-medium mt-6 mb-2 ">
        Software Development
      </h2>
      {/* Description for software development services */}
      <p className="text-base">
        I provide software development services encompassing a wide range of
        solutions tailored to meet your business needs. From custom application
        development to software integration and support. I focus on delivering
        high-quality, scalable, and efficient software. My expertise include
        front-end and back-end development, mobile app creation, and cloud-based
        solutions. By leveraging the latest technologies and industry best
        practices, I ensure your software is robust, secure, and aligned with
        your strategic goals, providing a seamless user experience and driving
        business growth.
      </p>
      {/* Section for brand consulting services */}
      <h3 className="subtitle-2 text-black text-lg font-medium mt-6 mb-2">
        Brand Consulting
      </h3>
      {/* Description for brand consulting services */}
      <p className="text-base">
        I offer expert brand consulting services designed to elevate your
        business identity and drive growth. My approach involves analyzing your
        current brand positioning, understanding your target audience, and
        crafting strategies to enhance your brand’s presence and effectiveness.
        From developing a compelling brand narrative to refining visual elements
        and optimizing market strategies, I work to ensure your brand stands out
        and resonates with your audience. My goal is to help you build a strong,
        cohesive brand that fosters recognition, loyalty, and success.
      </p>
    </div>
  );
};

export default Services;
