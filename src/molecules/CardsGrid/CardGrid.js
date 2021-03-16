import React from "react";
import "antd/dist/antd.css";
import style from './CardGrid.module.scss';
import { Col, Row } from "antd";
import Carditem from "../../atoms/CardCustom/CardCustom";

const CardGrid = ({inputcarddata}) =>{
    return (
        <div className={style['.site-card-wrapper']}>
            <Row gutter={16}>
            <Col span={32}>
                {
                inputcarddata.map(
                        (k, index) => 
                            <div key={index}>       
                        <Carditem carddata={k} />
                                               
                    </div>
                )}
                </Col>
    </Row>
        </div>
    )
}

export default CardGrid;

  