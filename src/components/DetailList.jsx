import React from "react";

const DetailList = ({ data }) => {
  return (
    <ul>
      {data.newslist.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default DetailList;
