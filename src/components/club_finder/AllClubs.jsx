import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown, FaEnvelope, FaUserTie, FaRegBuilding } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const AllClubs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [collapsedZones, setCollapsedZones] = useState({});

  const clubs = [
    {
      zone: 'Zone 1',
      name: 'Club 1',
      president: { name: 'Sapan Chauhan', email: 'sapanc10@gmail.com' },
      secretary: { name: 'Rtr. Hemang Vaidya', email: 'hemang.pankaj@gmail.com' },
      sponsoringRotary: 'RC Shimla',
    },
    {
      zone: 'Zone 1',
      name: 'Club 2',
      president: { name: 'Sapan Chauhan', email: 'sapanc10@gmail.com' },
      secretary: { name: 'Rtr. Hemang Vaidya', email: 'hemang.pankaj@gmail.com' },
      sponsoringRotary: 'RC Shimla',
    },
    {
      zone: 'Zone 2',
      name: 'Club 3',
      president: { name: 'Sapan Chauhan', email: 'sapanc10@gmail.com' },
      secretary: { name: 'Rtr. Hemang Vaidya', email: 'hemang.pankaj@gmail.com' },
      sponsoringRotary: 'RC Shimla',
    },
    {
      zone: 'Zone 2',
      name: 'Club 4',
      president: { name: 'Sapan Chauhan', email: 'sapanc10@gmail.com' },
      secretary: { name: 'Rtr. Hemang Vaidya', email: 'hemang.pankaj@gmail.com' },
      sponsoringRotary: 'RC Shimla',
    },
  ];

  const toggleZone = (zone) => {
    setCollapsedZones((prev) => ({ ...prev, [zone]: !prev[zone] }));
  };

  const filteredGroupedClubs = clubs.reduce((acc, club) => {
    if (club.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      if (!acc[club.zone]) {
        acc[club.zone] = [];
      }
      acc[club.zone].push(club);
    }
    return acc;
  }, {});

  return (
    <section className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for a club"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
        />
      </div>
      {Object.keys(filteredGroupedClubs).map((zone) => (
        <div key={zone} className="mb-10">
          <div
            className="flex items-center justify-between cursor-pointer mb-4 p-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors duration-300"
            onClick={() => toggleZone(zone)}
          >
            <h2 className="text-xl font-bold">{zone}</h2>
            {collapsedZones[zone] ? <FaChevronUp className="h-5 w-5" /> : <FaChevronDown className="h-5 w-5" />}
          </div>
          <AnimatePresence initial={false}>
            {!collapsedZones[zone] && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredGroupedClubs[zone].map((club, index) => (
                    <motion.div
                      key={index}
                      className="relative shadow-lg border border-gray-200 rounded-lg bg-white transition-transform duration-300 transform hover:scale-105 overflow-hidden"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">{club.name}</h3>
                        <div className="mb-4">
                          <div className="flex items-center text-gray-600">
                            <FaUserTie className="text-pink-600 mr-2" />
                            <span className="font-medium">President:</span>
                            <span className="ml-2">{club.president.name}</span>
                          </div>
                          <div className="flex items-center text-gray-600 mt-2">
                            <FaEnvelope className="text-pink-600 mr-2" />
                            <span>{club.president.email}</span>
                          </div>
                        </div>
                        <div className="mb-4">
                          <div className="flex items-center text-gray-600">
                            <FaUserTie className="text-pink-600 mr-2" />
                            <span className="font-medium">Secretary:</span>
                            <span className="ml-2">{club.secretary.name}</span>
                          </div>
                          <div className="flex items-center text-gray-600 mt-2">
                            <FaEnvelope className="text-pink-600 mr-2" />
                            <span>{club.secretary.email}</span>
                          </div>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <FaRegBuilding className="text-pink-600 mr-2" />
                          <span className="font-medium">Sponsoring Rotary:</span>
                          <span className="ml-2">{club.sponsoringRotary}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
};

export default AllClubs;
