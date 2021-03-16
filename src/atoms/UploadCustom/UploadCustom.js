import React from 'react';
import style from './UploadCustom.module.scss';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const UploadCustom = ({text}) => {
    return (
        <div className={style['upload-feeder']} >
           <Upload >
            <Button data-test="upload" className={style['Button']} icon={<UploadOutlined />}>{text}</Button>
            </Upload>
        </div>
    );
};

export default UploadCustom;