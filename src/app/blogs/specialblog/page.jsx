import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className=' m-3 p-3 grid grid-cols-4 gap-10'>
           
            {
                cricketers.map((crecketer) => (
                <div key={cricketers.score} className='rounded border-4 text-center'>
                 <h6 className='text-3xl font-bold'>  { crecketer.name}</h6>
                 <p className='text-blue-600 text-5xl'>{crecketer.score}</p>
                 <button className='btn btn-md '> <Link href={`/blogs/specialblog/${crecketer.name}`}> Details</Link></button>
                </div>
                ))
            }
        </div>
    );
};

const cricketers = [
    { name: 'Virat-Kohli', score: 82 },
    { name: 'Rohit-Sharma', score: 105 },
    { name: 'Steve-Smith', score: 45 },
    { name: 'Ben-Stokes', score: 67 },
    { name: 'Kane-Williamson', score: 91 }
  ];

export default page;