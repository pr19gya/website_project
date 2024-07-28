import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown, FaEnvelope, FaUserTie, FaRegBuilding } from 'react-icons/fa';
import { Disclosure } from '@headlessui/react';

const AllClubs = () => {
  const [searchTerm, setSearchTerm] = useState('');

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
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center justify-between w-full mb-4 p-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600">
                  <h2 className="text-xl font-bold">{zone}</h2>
                  {open ? <FaChevronUp className="h-5 w-5" /> : <FaChevronDown className="h-5 w-5" />}
                </Disclosure.Button>
                <Disclosure.Panel>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredGroupedClubs[zone].map((club, index) => (
                      <div
                        key={index}
                        className="shadow-lg border border-gray-200 rounded-lg bg-white hover:shadow-xl transition-shadow duration-300"
                      >
                        <div className="bg-pink-600 text-white p-4 rounded-t-lg">
                          <h3 className="text-xl font-semibold truncate">{club.name}</h3>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center mb-4">
                            <FaUserTie className="text-pink-600 mr-2" />
                            <p className="text-gray-700 truncate">
                              <span className="font-bold">President:</span> {club.president.name}
                            </p>
                          </div>
                          <div className="flex items-center mb-4">
                            <FaEnvelope className="text-pink-600 mr-2" />
                            <p className="text-gray-700 truncate">{club.president.email}</p>
                          </div>
                          <div className="flex items-center mb-4">
                            <FaUserTie className="text-pink-600 mr-2" />
                            <p className="text-gray-700 truncate">
                              <span className="font-bold">Secretary:</span> {club.secretary.name}
                            </p>
                          </div>
                          <div className="flex items-center mb-4">
                            <FaEnvelope className="text-pink-600 mr-2" />
                            <p className="text-gray-700 truncate">{club.secretary.email}</p>
                          </div>
                          <div className="flex items-center mb-4">
                            <FaRegBuilding className="text-pink-600 mr-2" />
                            <p className="text-gray-700 truncate">
                              <span className="font-bold">Sponsoring Rotary:</span> {club.sponsoringRotary}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </section>
  );
};

export default AllClubs;
