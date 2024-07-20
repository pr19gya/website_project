import React from 'react'
import { motion } from 'framer-motion';


const info = [
    {
        id: 1,
        name: "Rtn. Rajpal Singh",
        post: "District Governor",
        photo:"/rajpal.jpg"
    },
    {
        id: 2,
        name: "Rtr. Shashank Kaushik",
        post: "District Rotaract Representative",
        photo:"/shashank.jpg"

    },
    {
        id: 3,
        name: "Rtn. Mohit Singla",
        post: "District Rotaract Committee Chair",
        photo:"/mohit.jpg"
    },
    {
        id: 4,
        name: "Rtn. Rtr. Shivansh Sharma",
        post: "District Youth Chair ",
        photo:"/shivansh.webp"
    },
    {
        id: 5,
        name: "Rtr. Yashika Sagar",
        post: "District Trainer",
        photo:"/yashika.jpg"
    },
    {
        id: 6,
        name: "Rtn. Rtr. Shubham Goyal",
        post: "District Rotaract Committee Co- Chair",
        photo:"shubham-goyal.jpg"
    },
    {
        id: 7,
        name: "Rtn. Rtr. Chinmay Abbhi",
        post: "IPDRR",
        photo:"/chinmay-abbhi.jpg"
    },
    {
        id: 8,
        name: "Rtr. Stuti Sharma",
        post: "Deputy DRR",
        photo:"/stuti-sharma.jpg"
    },
    {
        id: 9,
        name: "Rtr. Ritik Nagpal",
        post: "DRS Admin",
        photo:"ritik-nagpal.jpg"
    },
    {
        id: 10,
        name: "Rtr. Purandhi Gupta",
        post: "DRS Reporting",
        photo:"/purandhi-gupta.jpg"
    },

    {
        id: 11,
        name: "Rtr. Vasudha Kak",
        post: "DRS General & District's Membership Ambassador",
        photo:"/vasudha-kak.jpg"
    },
    {
        id: 12,
        name: "Rtr. Mannu Goyal",
        post: "District Joint Secretary",
        photo:"/mannu-goyal.jpg"

    },
    {
        id: 13,
        name: "Rtr. Lakshay Dhalia",
        post: "District Treasurer",
        photo:"/lakshay-dhalia.jpg"
    },
    {
        id: 14,
        name: "Rtr. Shourya Mehra",
        post: "Sergeant at Arms & District's Membership Ambassador",
        photo:"/shourya-mehra.jpg"
    },
    {
        id: 15,
        name: "Rtr. Sarthak Perti",
        post: "Chief Technology Officer",
        photo:"/sarthak-perti.png"
    },
    {
        id: 16,
        name: "Rtr. Hema Negi",
        post: "ADRR Zone 1",
        photo:"hema-negi.jpg"
    },
    {
        id: 17,
        name: "Rtr. Shivangni Chauhan",
        post: "ADRS Zone 1",
        photo:"shivangni-chauhan.jpg"
    },
    {
        id: 18,
        name: "Rtr. Prerna Kashyap",
        post: "ADRR Zone 2",
        photo:"prerna-kashyap.jpg"
    },

    {
        id: 19,
        name: "Rtr. Raghav Kakkar",
        post: "ADRS Zone 2",
        photo:"raghav-kakkar.webp"
    },
    {
        id: 20,
        name: "Rtr. Riya Wadhwa",
        post: "ADRR Zone 3",
        photo:"riya-wadhwa.jpg"
    },
    {
        id: 21,
        name: "Rtr. Sejal Sharma",
        post: "ADRS Zone 3",
        photo:"/sejal-sharma.jpg"
    },
    {
        id: 22,
        name: "Rtr. Anubhav Miglani",
        post: "ADRR Zone 4",
        photo:"/anubhav-miglani.jpg"
    },
    {
        id: 23,
        name: "Rtr. Shivank Goel",
        post: "ADRR Zone 5",
        photo:"shivank-goel.png"
    },
    {
        id: 24,
        name: " Rtr. Vahini Bali",
        post: "ADRS Zone 5",
        photo:"/vahini-bali.jpg"
    },
    {
        id: 25,
        name: "Rtr. Kavy Goyal",
        post: "ADRR Zone 6",
        photo:"kavy-goyal.jpg"
    },
    {
        id: 26,
        name: "Rtr. Vaishnavi Karanwal",
        post: "ADRS Zone 6",
        photo:"vaishnavi-karanwal.webp"
    },
    {
        id: 27,
        name: "Rtr. Aman Garg",
        post: "Community Services Director",
        photo:"aman-garg.jpg"
    },
    {
        id: 28,
        name: "Rtr. Vikas Garg",
        post: "Community Services Executive",
        photo:"vikas-garg.jpg"
    },
    {
        id: 29,
        name: "Rtr. Nikhil Chanalia",
        post: "Club Services Director",
        photo:"nikhil-chanalia.png"
    },
    {
        id: 30,
        name: "Rtr. Tushar Maheshwari",
        post: "Vocational Services Director",
        photo:"tushar-maheshwari.jpg"
    },
    {
        id: 31,
        name: "Rtr. Smiksha Hans",
        post: "Literacy Services Director",
        photo:"samiksha-hans.jpg"
    },
    {
        id: 32,
        name: "Rtr. Hari Om",
        post: "Literacy Services Executive",
        photo:"hari-om.jpg"
    },
    {
        id: 33,
        name: "Rtr. Arpita Malik",
        post: "International Services Director",
        photo:"arpita-malik.jpg"
    },
    {
        id: 34,
        name: "Rtr. Muskan Marwaha",
        post: "Co-International Services Director",
        photo:"muskan-marwaha.jpg"
    },
    {
        id: 35,
        name: "Rtr. Manu Gupta",
        post: "Environment + Animal Care + Health and Hygiene Director",
        photo:"manu-gupta.png"
    },
    {
        id: 36,
        name: "Rtr. Salman Rao",
        post: "Health & Hygiene Executive",
        photo:"salman-rao.webp"
    },
    {
        id: 37,
        name: "Rtr. Diya Khurana",
        post: "Social Media Communications Director",
        photo:"diya-khurana.jpg"
    },
    {
        id: 38,
        name: "Rtr. Maan Kaur",
        post: "Social Media Communications Manager",
        photo:"maan-kaur.jpg"

    },
    {
        id: 39,
        name: "Rtr. Aniket Mishra",
        post: "Social Media Communications Coordinator",
        photo:"aniket-mishra.jpg"
    },
    {
        id: 40,
        name: "Rtr. Preet Pattanayak",
        post: "Director of Marketing",
        photo:"preet-pattanayak.webp"
    },
    {
        id: 41,
        name: "Rtr. Navnita Rajput",
        post: "District Editor",
        photo:"navnita-rajput.png"
    },
    {
        id: 42,
        name: "Rtr. Rishabh",
        post: "District PRO",
        photo:"rishabh.jpg"
    },
    {
        id: 43,
        name: "Rtr. Vaibhav Sharma",
        post: "District Photographer",
        photo:"vaibhav-sharma.jpg"
    },
    {
        id: 44,
        name: "Rtr. Manpreet Rawat    ",
        post: "District Networking Ambassador",
        photo:"manpreet-rawat.png"
    }
    
];

const Elements = () => {
    return (
      <div className="my-32 mx-4 sm:mx-8 lg:mx-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {info.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative bg-white shadow-lg rounded-lg h-[20rem] w-full sm:w-[18rem] md:w-[20rem] overflow-hidden"
            >
              <img src={item.photo} alt={item.name} className="h-full w-full object-cover rounded-t-lg" />
              <div className="absolute bottom-0 w-full py-4 bg-gradient-to-t from-black to-transparent text-white text-center">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <h3 className="text-sm font-medium">{item.post}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Elements;