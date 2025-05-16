import React from "react";

export const Testimonial2 = () => {

  return (
    <>
     
       
    <div className="flex flex-row  justify-between overflow-hidden rounded-3xl text-white my-2 shadow-sm mx-5">
      {/* Image Section */}
      <div className=" hidden md:block ">
        <img
          src="//www.trihard.co/cdn/shop/articles/2_3_900x900.webp?v=1738144028"
          alt="woman"
          className="w-[50vw] h-[60vh] rounded-3xl "
        />
      </div>

      {/* Title Section */}
   
      <div className="  text-black   flex-col flex justify-between p-5">
   
        <h3 className="text-5xl uppercase font-bold">Latest From <br /> Our Blog</h3>
        
      
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5  ">
        {blogPosts.map((item, index) => (
          <div key={index} className="relative group w-64  flex justify-center flex-col flex-wrap ">
            <img
              src={item.imgSrc}
              alt={item.imgAlt}
              className="w-full h-44 mb-3 object-cover rounded-2xl shadow-lg group-hover:opacity-50 "
            />
            <div className="p-2">
              <h4 className="text-sm  font-semibold">{item.title}</h4>
              <h4 className="text-sm font-bold">{item.date}</h4>
              
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
};

const blogPosts = [

    {
        title: "How To Protect Colored Hair From Chlorine",
        date: "September 04, 2021",
        link: "/blogs/trihard-blog/protect-colored-hair-from-chlorine",
        imgSrc:
            "//www.trihard.co/cdn/shop/articles/How_to_protect_colored_hair_from_chlorine_cover_image_-_07_900x900.webp?v=1689224674",
        imgAlt: "How To Protect Colored Hair From Chlorine",
    },
    {
        title: "How To Get Green Out Of Hair And How To Prevent It",
        date: "August 30, 2021",
        link: "/blogs/trihard-blog/get-green-out-of-hair",
        imgSrc:
            "//www.trihard.co/cdn/shop/articles/How_to_get_green_out_of_hair_blog_cover_-_01_900x900.webp?v=1689224675",
        imgAlt: "How To Get Green Out Of Hair And How To Prevent It",
    },

];
