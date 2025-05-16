import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faPinterestP,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const quickLinks = [
  { value: "Terms & Conditions", href: "/terms" },
  { value: "Privacy Policy", href: "/policy" },
 
];

const socialMedia = [
  { value: "Facebook", href: "#!" },
  { value: "Instagram", href: "#!" },
  { value: "LinkedIn", href: "#!" },
  { value: "Twitter", href: "#!" },
];

const jobInfo = [
  { value: "Home", href: "/" },
  { value: "Shop", href: "/shop" },
  { value: "About", href: "/about" },
  { value: "Contact", href: "/contact" },
];

const articles = [
  {
    mobile: "(907) 602-0209",
    text: "7211 Jewel Lake Rd Anchorage, Alaska, United States, 99502",
  },
  {
    mobile: "01752 664444",
    text: "Beaumont House, Beaumont Park, Plymouth, Devon, United Kingdom  PL4 9BD",
  },
  {
    mobile: "(03) 9722 1202",
    text: "12 Homestead Rd Melbourne, Victoria, Australia, 3115",
  },
];

const navigations = [
  { value: "Home", href: "/" },
  { value: "Shop", href: "/shop" },
  { value: "About", href: "/about" },
  { value: "Contact", href: "/contact" },
];

const sociaIcons = [
  { icon: faFacebookF, href: "#!" },
  { icon: faTwitter, href: "#!" },
  { icon: faPinterestP, href: "#!" },
  { icon: faLinkedinIn, href: "#!" },
];

const QuickLinks = ({ qLink }) => (
  <li>
    <Link to={qLink.href} className="text-gray-600 hover:text-blue-600">
      {qLink.value}
    </Link>
  </li>
);
QuickLinks.propTypes = {
  qLink: PropTypes.object.isRequired,
};

const SocialMedia = ({ media }) => (
  <li>
    <Link to={media.href} className="text-gray-600 hover:text-blue-600">
      {media.value}
    </Link>
  </li>
);
SocialMedia.propTypes = {
  media: PropTypes.object.isRequired,
};

const JobInfo = ({ job }) => (
  <li>
    <Link to={job.href} className="text-gray-600 hover:text-blue-600">
      {job.value}
    </Link>
  </li>
);
JobInfo.propTypes = {
  job: PropTypes.object.isRequired,
};

const ArticleItem = ({ article }) => (
  <li className="mt-3">
    <article className="flex flex-col">
     
      <div>
        <p className="text-gray-500 mt-1 opacity-75">{article.text}</p>
      </div>
      <div>
        <p className="text-gray-500 mt-1 opacity-75">{article.mobile}</p>
      </div>
    </article>
  </li>
);
ArticleItem.propTypes = {
  article: PropTypes.object.isRequired,
};

const NavigationItem = ({ item }) => (
  <li>
    <Link to={item.href} className="text-gray-600 hover:text-blue-600">
      {item.value}
    </Link>
  </li>
);

NavigationItem.propTypes = {
  item: PropTypes.object.isRequired,
};

const SocialItem = ({ social }) => (
  <li>
    <Link to={social.href} className=" border border-blue-600 rounded-full p-3 text-gray-600 hover:text-blue-600">
      <FontAwesomeIcon icon={social.icon} />
    </Link>
  </li>
);

SocialItem.propTypes = {
  social: PropTypes.object.isRequired,
};

const Footer = () => {
  return (
    <section className="bg-white text-gray-800 py-12">
      <div className="container mx-auto px-4">
   
        <div className="flex flex-wrap mb-8">
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
           
            <ul className="space-y-2">
           <img src="logo1.png" width={150} alt="" />
            </ul>
            <h5 className="mt-4 font-bold">Social Media</h5>
            <ul className="flex space-x-4 mt-4">
              {sociaIcons.map((social, i) => (
                <SocialItem social={social} key={i} />
              ))}
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h5 className="font-bold">Social Media</h5>
            <ul className="space-y-2">
              {socialMedia.map((media, i) => (
                <SocialMedia media={media} key={i} />
              ))}
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h5 className="font-bold">Navigations</h5>
            <ul className="space-y-2">
              {jobInfo.map((job, i) => (
                <JobInfo job={job} key={i} />
              ))}
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h5 className="font-bold">Address</h5>
            <ul>
              {articles.map((article, i) => (
                <ArticleItem article={article} key={i} />

              ))}
            </ul>
          </div>
        </div>
        <hr className="opacity-10" />
        <div className="flex justify-between items-center pt-4">
          <p className="text-gray-500 opacity-50">
            &copy; 2025 ToyGifty, All rights reserved
          </p>
          <div>
            <ul className="flex space-x-4">
              {quickLinks.map((item, i) => (
                <NavigationItem item={item} key={i} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
