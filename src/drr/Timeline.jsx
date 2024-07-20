import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const drrs = [
    { name: "Rtr. Vikram Chawla", year: "1984-1985" },
    { name: "Rtr. Praveen C Goyal", year: "1985-1986" },
    { name: "Rtr. H Prabhakar", year: "1986-1987" },
    { name: "Rtr. Sanjay Worah", year: "1987-1988" },
    { name: "Rtr. Manish Bindal", year: "1988-1989" },
    { name: "Rtr. Sanjeev Khera", year: "1989-1990" },
    { name: "Rtr. Ajay Pal Makin", year: "1990-1991" },
    { name: "Rtr. Rajesh Alhuwalia", year: "1991-1992" },
    { name: "Rtr. Pramod Goyal", year: "1992-1993" },
    { name: "Rtr. Amikar Bhardwaj", year: "1993-1994" },
    { name: "Rtr. Bhupesh Gulati", year: "1994-1995" },
    { name: "Rtr. Virender Aggarwal", year: "1995-1996" },
    { name: "Rtr. Kuljeet Chadha", year: "1996-1997" },
    { name: "Rtr. Ripudaman K. Kalra", year: "1997-1998" },
    { name: "Rtr. Vivek Sheel Dudreja", year: "1998-1999" },
    { name: "Rtr. Sanjeev Bhatia", year: "1999-2000" },
    { name: "Rtr. Raj Makar", year: "2000-2001" },
    { name: "Rtr. Arvind K. Dhiman", year: "2001-2002" },
    { name: "Rtr. Ganesh Sabharwal", year: "2002-2003" },
    { name: "Rtr. Sumesh Verma", year: "2003-2004" },
    { name: "Rtr. Harpreet Singh", year: "2004-2005" },
    { name: "Rtr. Parminder Sharma", year: "2005-2006" },
    { name: "Rtr. Akhil Puri", year: "2006-2007" },
    { name: "Rtr. Harkirat Singh", year: "2007-2008" },
    { name: "Rtr. Sanjev Anand", year: "2008-2009" },
    { name: "Rtr. Satinder Singh Dev", year: "2009-2010" },
    { name: "Rtr. Neha Chopra", year: "2010-2011" },
    { name: "Rtr. Gagan Sarin", year: "2011-2012" },
    { name: "Rtr. Amit Singla", year: "2012-2013" },
    { name: "Rtr. Jasmeet Nagi", year: "2013-2014" },
    { name: "Rtr. Ankur Gupta", year: "2014-2015" },
    { name: "Rtr. Mohit Singla", year: "2015-2016" },
    { name: "Rtr. Shubham Rattan", year: "2016-2017" },
    { name: "Rtr. Yashika Sagar", year: "2017-2018" },
    { name: "Rtr. Gurang Gupta", year: "2018-2019" },
    { name: "Rtr. Ishita Kaith", year: "2019-2020" },
    { name: "Rtr. Samir Madan", year: "2020-2021" },
    { name: "Rtr. Shubham Goyal", year: "2021-2022" },
    { name: "Rtr. Shivansh Sharma", year: "2022-2023" },
    { name: "Rtr. Chinmay Abhhi", year: "2023-2024" },
    { name: "Rtr. Shashank Kaushik", year: "2024-2025" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-500 to-[#E0218A] py-6 flex flex-col justify-center sm:py-12">
      <div className="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
        <div className="relative text-gray-700 antialiased text-sm font-semibold">
          {/* Vertical bar running through middle */}
          <div className="hidden sm:block w-1 bg-black absolute h-full left-1/2 transform -translate-x-1/2"></div>

          {drrs.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`mt-6 sm:mt-0 ${index % 2 === 0 ? 'mr-2' : 'ml-2'} sm:mb-12`}
            >
              <div className="flex flex-col sm:flex-row items-center">
                <div className={`flex justify-${index % 2 === 0 ? 'start' : 'end'} w-full mx-auto items-center`}>
                  <div className={`w-full sm:w-1/2 sm:${index % 2 === 0 ? 'pr-8 ' : 'pl-8'}`}>
                    <div className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                      <h3 className="text-lg font-bold">{item.name}</h3>
                      {/* <p className="text-sm">{item.year}</p> */}
                    </div>
                  </div>
                </div>
                <div className="bg-black text-white border-white border-2 w-[4.5rem] h-8 sm:h-10 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">{item.year}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
