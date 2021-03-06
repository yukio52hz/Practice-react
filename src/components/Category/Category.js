import React from "react";
import { Link } from "wouter";
/*import {
  CategoryTitle,
  CategoryListItem,
  CategoryLink,
  CategoryList,
} from "./styles";*/
import "./category.css"; 

export default function Category({ name, options = [] }) {
  return (
    <div>
      <h2>{name}</h2>
      <div className='trending'>
        {
            options.map(obj => 
            <li key={obj}>
              <Link to={`/SearchGif/${obj}`}>{obj}</Link>
            </li>)
        }
      </div>
    </div>
  );
}

/* <CategoryTitle>{name}</CategoryTitle>
      <CategoryList>
        {options.map((singleOption, index) => (
          <CategoryListItem
            key={singleOption}
            index={index}
            type='primary'
          >
            <CategoryLink to={`/search/${singleOption}`}>
              {singleOption}
            </CategoryLink>
          </CategoryListItem>
        ))}
      </CategoryList> */