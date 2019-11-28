import React from "react";
import styled from "styled-components";

const Item = styled.li`
  font-size: 13px;
  line-height: 1.5;
`;

const ItemLink = styled.a`
  color: ${props => (props.isActive ? "red" : "blue")};
`;

function ListItem({ data, idx, isActive, handleCompanyClick }) {
  return (
    <Item id={data.id} data-idx={idx}>
      <ItemLink
        href="#"
        isActive={isActive}
        onClick={() => handleCompanyClick({ id: data.id, idx: idx })}
      >
        {data.company}
      </ItemLink>
    </Item>
  );
}

export default ListItem;
