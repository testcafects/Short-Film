import React from 'react';
import { Input } from 'antd';

const InputCustom = ({data}) => {
    return (
        <div className='colors-4-hex'>
        <h3>{data}:</h3>
        <Input 
        type="text"
        label={data}
        name={data}
        placeholder= {data}
      />

      
        </div>
    );
};

export default InputCustom;