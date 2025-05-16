import { FaMountain, FaVectorSquare } from "react-icons/fa";

const BrandLogos = () => {
  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 my-6 sm:my-8 md:my-12">
      <div className="border-2 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 rounded border-black flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
        <span className="font-serif text-xl sm:text-2xl md:text-3xl font-bold">Shell</span>
        <span className="font-sans text-xl sm:text-2xl md:text-3xl font-extrabold">Ferrari</span>
        <span className="flex items-center text-xl sm:text-2xl md:text-3xl space-x-1">
          <FaMountain className="text-black" />
          <span className="font-serif font-semibold">Apple</span>
        </span>
        <span className="flex items-center text-xl sm:text-2xl md:text-3xl space-x-1">
          <FaVectorSquare className="text-black" />
          <span className="font-serif font-medium">Microsoft</span>
        </span>
      </div>
    </div>
  );
};

export default BrandLogos;