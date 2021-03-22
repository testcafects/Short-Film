import React from "react";
import style from "./RemoveIcon.module.scss";
import { CloseCircleOutlined } from "@ant-design/icons";
import Buttons from "../Buttons/Buttons";
import { gql, useMutation } from "@apollo/client";



const RemoveIcon = (props) => {
  const GET_POST = gql`
  mutation deleteCartItem($id: Int!) {
    deleteCartItem(id: $id)
  }
`;

const [onApply, { loading, error }] = useMutation(GET_POST);

  const remove = () => {
    console.log(props.id);
    let value=props.id
    onApply({ variables: { value } });
  };
  return (
    <div className={style["a-remove-icon"]}>
      <span className={style["a-remove-icon__amount"]}>₹{props.price} </span>
      <Buttons
        className={style["a-remove-icon__delete"]}
        icon={<CloseCircleOutlined style={{ fontSize: "1.5rem" }} />}
        color="red"
        bgcolor="white"
        border="none"
        onClick={remove}
      ></Buttons>
    </div>
  );
};

export default RemoveIcon;
