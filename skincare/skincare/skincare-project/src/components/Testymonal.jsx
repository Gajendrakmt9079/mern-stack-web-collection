import React from "react";

export const Testimonial = () => {
  const items = [
    {
      title: 'Pre & Post-Swim Solution',
      description: 'We\'re the pioneering company that revolutionized pre-swim care by offering both pre and post-swim solutions, providing comprehensive protection from chlorine, saltwater, sweat, and more.',
      image: 'https://www.trihard.co/cdn/shop/files/1_1_1_350x_cd0cd6b5-6534-4a9d-bf7b-f658b331868b_330x.webp?v=1727099870'
    },
    {
      title: 'Reliability & Endorsement',
      description: 'With over five thousand five-star customer reviews and recognition as editor\'s pick in leading sports magazines, our products are embraced and cherished by the largest roster of athletes in the swim and triathlon scene.',
      image: 'https://www.trihard.co/cdn/shop/files/2_1_350x_c749e5bc-a76e-4c2e-bdb2-491ed9e622ef_330x.webp?v=1727099886'
    },
    {
      title: 'Clean Ingredients',
      description: 'We take pride in our dermatologically tested clean formula, a result of in-house product development. Our products are free from parabens, SLS, alcohol, and cruelty. They are also vegan and non-GMO.',
      image: 'https://www.trihard.co/cdn/shop/files/4_1_1_350x_067d8d63-05bf-4b92-9a86-d6da809904c8_330x.webp?v=1727099916'
    },
    {
      title: 'Powered by Plecotech™️',
      description: 'PLECOTECH™️ is our proprietary technology based on the optimal ratio of 100% Natural Red Algae, Dead Sea Minerals, and Key Botanical Extracts, utilized in all our products.',
      image: 'https://www.trihard.co/cdn/shop/files/3_1_1_350x_a06833a8-a260-4ffa-b2c3-7d9d949bf0c2_330x.webp?v=1727099901'
    }
  ];
  return (
    <>
     
       
    <div className="flex flex-row items-center justify-between overflow-hidden rounded-3xl text-white my-2 shadow-sm mx-5">
      {/* Image Section */}
      <div className="w-full hidden md:block max-w-lg">
        <img
          src="https://cdn.shopify.com/s/files/1/0142/3668/0278/files/why-trihard-image_1_1_1_590x.webp"
          alt="woman"
          className="w-full h-auto "
        />
      </div>

      {/* Title Section */}
   
      <div className="  text-black   flex-col flex justify-center">
      <div className="flex flex-col justify-center items-center text-center mb-3  ">
        <h3 className="text-3xl font-serif font-bold">Why Trihard?</h3>
        <p className="text-xl mt-2">We felt, we cared, and we acted</p>
        <p className="mt-4 ">"As athletes, we couldn't find anything that met our needs, <br /> so <strong>we decided to do it ourselves</strong>"</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 ">
        {items.map((item, index) => (
          <div key={index} className="relative group">
            <img
              src={item.image}
              alt={item.title}
              className="w-96 h-80 object-cover rounded-2xl shadow-lg group-hover:opacity-50 transition-opacity"
            />
            <div className="absolute inset-0 flex flex-col justify-center text-center items-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-60 text-white p-4 rounded-2xl">
              <h4 className="text-lg font-bold">{item.title}</h4>
              <p className="text-sm mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

const testimonials = [
  {
    image: "//www.trihard.co/cdn/shop/files/PrePost_150x.png?v=1711030184",
    title: "Pre & Post-Swim Solution",
    description:
      "We provide comprehensive protection from chlorine, saltwater, sweat, and more with our pre and post-swim solutions.",
  },
  {
    image: "//www.trihard.co/cdn/shop/files/Endorsed_150x.png?v=1711030519",
    title: "Reliability & Endorsement",
    description:
      "With over five thousand five-star customer reviews, our products are recognized as the editor's pick in leading sports magazines.",
  },
  {
    image: "//www.trihard.co/cdn/shop/files/Clean_150x.png?v=1711030472",
    title: "Clean Ingredients",
    description:
      "Our products are dermatologically tested, cruelty-free, vegan, and non-GMO with no parabens, SLS, or alcohol.",
  },
  {
    image: "//www.trihard.co/cdn/shop/files/Plecotech_150x.png?v=1711027736",
    title: "Powered by Plecotech™️",
    description:
      "Our proprietary technology blends Natural Red Algae, Dead Sea Minerals, and Key Botanical Extracts.",
  },
];
