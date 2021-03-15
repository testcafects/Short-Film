import React from 'react';
import CardCollection from '../../molecules/CardCollection/CardCollection';
import style from './VideosPromotingSection.module.scss';
import { Divider, Typography } from 'antd';

const VideosPromotingSection = (props) => {
   const { Title } = Typography;
   return (
      <div className={style['o-videos-promoting-section']} data-test={props.type}>
         <Title level={3} className={style["vidoePromotingHeading"]}>{props.type}</Title>
         <Divider style={{padding:0,margin:0}}><i>{props.type}</i></Divider>
         <CardCollection  {...props} />
      </div>
   );
};

export default VideosPromotingSection;