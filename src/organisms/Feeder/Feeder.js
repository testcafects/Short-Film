import { Button } from 'antd';
import React from 'react';
import InputCustom from '../../atoms/InputCustom/InputCustom';
import UploadCustom from '../../atoms/UploadCustom/UploadCustom';
import style from './Feeder.module.scss'

const Feeder = ({ inputData }) => {
    return (
       
        //<div className={style['o-feeder']}>    
          <div className={style['myForm']}> 
            <section>
            {
                inputData.map(
                    (k, index) => 
                    <div key={index} type="text">  
                        <InputCustom data={k} />                        
                    </div>
                )}
                <Button className={style['button']} data-test="submit">Confirm</Button>
             </section>
             
             <section className={style['middle']}>
             <UploadCustom className={style['upload']}  text='Upload video'/>
             <h3>Select a file to upload a video here</h3>
            </section>
        </div>
    );
};

export default Feeder;