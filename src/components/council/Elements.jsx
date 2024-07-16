import React from 'react'

const info = [
    {
        id: 1,
        name: "ABC",
        post: "XYZ"
    },
    {
        id: 2,
        name: "ABC",
        post: "XYZ"
    },
    {
        id: 3,
        name: "ABC",
        post: "XYZ"
    },
    {
        id: 4,
        name: "ABC",
        post: "XYZ"
    },
    {
        id: 5,
        name: "ABC",
        post: "XYZ"
    }
];

const Elements = () => {
    return (
        <div className="my-32 mx-4 sm:mx-8 lg:mx-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {info.map((item) => (
                    <div key={item.id} className="relative bg-white shadow rounded h-[20rem] w-full sm:w-[18rem] md:w-[20rem] overflow-hidden">
                        <img src="/pexels-monicaaaaa-aaa-36421873-8218375.jpg" alt={item.name} className="h-full w-full object-cover" />
                        <div className="absolute bottom-0 w-full py-2 bg-black bg-opacity-50 text-white text-center">
                            <h2 className="text-md font-f_3">{item.name}</h2>
                            <h2 className="text-sm font-f_3">{item.post}</h2>
                        </div>
                        {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-center">{item.post}</p>
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Elements
