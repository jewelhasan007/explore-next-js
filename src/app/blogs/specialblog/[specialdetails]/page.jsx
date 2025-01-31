import React from 'react';

const specialDetails = ({params}) => {
    console.log(params.specialdetails)
    const {name, score} = cricketers.find((crick)=> crick.name == params.specialdetails)
    return (
        <div className='text-center border-2 bg-gray-300'>
         
     <h6 className='text-3xl'>{name}</h6>
     <p className='font-bold text-red-500 text-5xl'>{score}</p>
            
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
export default specialDetails