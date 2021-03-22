import React from "react";
import { useHistory } from "react-router-dom";
import { ApolloProvider, gql,useQuery } from '@apollo/client';
import {client} from "../../server/server.js";
import ReferalBanner from "../../atoms/referal-banner/referal-banner.js";
import FilterItem from "../../molecules/filter-item/filter-item.js";
import ListMenuBar from "../../molecules/list-menu-bar/list-menu-bar.js";
import ListCard from "../../organisms/list-card/list-card.js";
import style from "./list-template.module.scss";
 
const POST_BY_ID = gql
` {
  posts {
   title
   description
   rating
   director{
     name
   }
}
}
`;
// const [someFunc,{loading,error,data}] = useLazyQuery(PostId);
 
const ListTemplate = () => {
  const history = useHistory();
  const { loading, error, data } = useQuery(POST_BY_ID);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error </p>;
  const values= data.posts;
  // console.log(values)
  const Price = [
    {
      name: "Price",
      filters: [
        { name: "Free", totalItems: 20 },
        { name: "Paid", totalItems: 112 },
      ],
    },
    {
      name: "Sub Title",
      filters: [
        { name: "English", totalItems: 20 },
        { name: "Korean", totalItems: 90 },
        { name: "Japanese", totalItems: 16 },
      ],
    },
    {
      name: "Languages",
      filters: [
        { name: "English", totalItems: 20 },
        { name: "Korean", totalItems: 90 },
        { name: "Japanese", totalItems: 16 },
      ],
    },
    {
      name: "Genres",
      filters: [
        { name: "Action", totalItems: 20 },
        { name: "Sci-Fi", totalItems: 90 },
        { name: "Superhero", totalItems: 16 },
        { name: "Animation", totalItems: 16 },
        { name: "Horror", totalItems: 16 },
      ],
    }
    
  ];
  
  const navigate = (el) => {
    history.push(`/detail/${el}`);
  };
 
  return (
    <ApolloProvider client={client}>
    <div className={style["t-list"]}>
      <div className={style["t-list__container"]}>
        <ListMenuBar />
        <main className={style["t-list__content"]}>
          <aside>
            {Price.map((el, index) => (
              <FilterItem key={index} {...el} values={values} />
            ))}
          </aside>
          <section>
            {values.map((value,el) => (
              <ListCard value={value} key={el} navigate={() => navigate(el)} />
            ))}
          </section>
          <section>
            <ReferalBanner />
            <ReferalBanner />
          </section>
        </main>
      </div>
    </div>
    </ApolloProvider>
  );
};
 
export default ListTemplate;