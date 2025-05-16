import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

interface Author {
  fullName: string;
  picture: string;
  designation: string;
}

interface Testimonial {
  author: Author;
  rating: number;
  description: string;
}

interface RatingProps extends React.HTMLAttributes<HTMLParagraphElement> {
  rating: number;
  showLabel?: boolean;
  className?: string;
}

const testimonialList: Testimonial[] = [
  {
    author: {
      fullName: "Rohit Sharma",
      picture: "https://cdn.easyfrontend.com/pictures/users/user10.jpg",
      designation: "Car Service Customer",
    },
    rating: 4.7,
    description:
      "Excellent tyre replacement service! The team was professional and quick. My car feels brand new after the service.",
  },
  {
    author: {
      fullName: "Priya Mehta",
      picture: "https://cdn.easyfrontend.com/pictures/users/user15.jpg",
      designation: "Tyre Shop Customer",
    },
    rating: 4.9,
    description:
      "Wide variety of tyres at the best prices. The staff helped me choose the perfect set for my car. Highly recommend!",
  },
  {
    author: {
      fullName: "Vikram Desai",
      picture: "https://cdn.easyfrontend.com/pictures/users/user8.jpg",
      designation: "Regular Customer",
    },
    rating: 4.5,
    description:
      "Top-notch car servicing experience. They not only replaced my tyres but also checked wheel alignment for free!",
  },
];

const Rating: React.FC<RatingProps> = ({ rating, showLabel, className, ...rest }) => (
  <p className={classNames("mb-6", className)} {...rest}>
    <span>
      {[...Array(5)].map((_, i) => {
        const index = i + 1;
        let content = null;
        if (index <= Math.floor(rating)) {
          content = <FontAwesomeIcon icon={faStar} className="text-yellow-500" />;
        } else if (rating > i && rating < index + 1) {
          content = <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />;
        } else if (index > rating) {
          content = <FontAwesomeIcon icon={faStar} className="text-yellow-200 nulltext-opacity-20" />;
        }
        return <Fragment key={i}>{content}</Fragment>;
      })}
    </span>
    {showLabel && <span className="ml-2">{rating.toFixed(1)}</span>}
  </p>
);

interface TestimonialItemProps {
  testimonial: Testimonial;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ testimonial }) => (
  <div className="bg-white shadow-xl nullbg-slate-800 rounded-2xl transition duration-300 h-full p-6">
    <div className="mt-4">
      <Rating rating={testimonial.rating} showLabel={false} />
      <p className="opacity-50 mb-6">{testimonial.description}</p>
      <div className="flex items-center">
        <div className="mr-2">
          <img
            src={testimonial.author.picture}
            alt={testimonial.author.fullName}
            className="max-w-full h-auto rounded-full border"
            width="47"
          />
        </div>
        <div>
          <h4 className="text-xl font-medium">{testimonial.author.fullName}</h4>
          <p className="text-sm">
            <i>{testimonial.author.designation}</i>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const Testimonial1: React.FC = () => {
  return (
    <section className="ezy__testimonial1 light py-14 md:py-24 bg-white nullbg-[#0b1727] text-zinc-900 nulltext-white">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center md:mb-6">
          <div className="sm:max-w-lg text-center">
            <h2 className="text-3xl leading-none md:text-[45px] font-bold mb-4">
              Customer Reviews
            </h2>
            <p>
              See what our happy customers say about our tyre shop and car services. Quality and customer satisfaction are our top priorities!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-6 pt-8">
          {testimonialList.map((testimonial, i) => (
            <div className="col-span-6 md:col-span-3 lg:col-span-2" key={i}>
              <TestimonialItem testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
