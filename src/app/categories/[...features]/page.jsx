
import React from 'react';

const page = ({params}) => {
    console.log(params.features[2])

    if(params.features.length == 6)
        return  <div>{params.features[5]}</div>
    if(params.features.length == 5)
        return  <div>{params.features[4]}</div>
    if(params.features.length == 4)
        return  <div>{params.features[3]}</div>
    if(params.features.length == 3)
        return  <div>{params.features[2]}</div>
    if(params.features.length == 2)
        return  <div>{params.features[1]}</div>
    if(params.features.length == 1)
        return  <div>{params.features[0]}</div>
    
    return (
        <div>
            category features page
        </div>
    );
};

export default page;