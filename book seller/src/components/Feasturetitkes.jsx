import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const teamMembers = [
    {
        img: "./section3.jpg",
        name: "Discover the power of storytelling in our ",
        designation: "shop now",
    },
    {
        img: "./section5.jpg",
        name: "Immerse yourself in the beauty of our",
        designation: "shop now",
    },
    {
        img: "./section4.jpg",
        name: "Unlock the magic of reading with our ",
        designation: "shop now",
    },
    {
        img: "./section8.jpg",
        name: "Explore our latest book releases and",
        designation: "shop now",
    },
];

const TeamMemberItem = ({ member }) => (
    <div className="bg-white nullbg-slate-800 shadow-xl hover:scale-105 duration-100 rounded-2xl p-4">
        <div>
            <img
                src={member.img}
                alt={member.name}
                className="w-full h-80 rounded-t-2xl"
            />
            <div className="p-3">
                <h5 className="text-xl my-5 font-bold">{member.name}</h5>
                <Link to={"/shop"} className="text-sm opacity-75 cursor-pointer hover:opacity-100 text-[#F86D3C]">{member.designation}</Link>
            </div>
        </div>
    </div>
);

TeamMemberItem.propTypes = {
    member: PropTypes.object.isRequired,
};

export const Team20 = () => {
    return (
        <section className="ezy__team20 light py-14 md:py-24 bg-white nullbg-[#0b1727] text-zinc-900 nulltext-white">
            <div className="container px-4 mx-auto">
                <div className="flex justify-center text-center">
                    <div className="sm:max-w-lg mb-20">
                        <h3 className="text-sm leading-none md:text-[15px] my-2 font-bold">
                            Explore
                        </h3>
                        <h3 className="text-3xl leading-none md:text-[45px] font-bold">
                            Featured Titles

                        </h3>

                    </div>
                </div>
                <div className="grid grid-cols-4 gap-6">
                    {teamMembers.map((member, i) => (
                        <div className="col-span-4 sm:col-span-2 lg:col-span-1" key={i}>
                            <TeamMemberItem member={member} />
                        </div>
                    ))}


                </div>
            </div>
        </section>
    );
};
