import React from "react";
import styled from "styled-components";

const Item = styled.li`
  font-size: 13px;
  line-height: 1.5;
`;

function ListItem({ data, handleCompanyClick }) {
  return (
    <Item id={data.id}>
      <a href="#" onClick={() => handleCompanyClick(data.id)}>
        {data.company}
      </a>
    </Item>
  );
}

export default ListItem;
