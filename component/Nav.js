import React from 'react';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import styled from 'styled-components'


const Nav = () => {
  const NavContainer = styled.ul`
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid slategray;
    height: 15%;
    width: 100%;
    align-items: center;
    font-size: 1rem;
  `
  const ArrowLi = styled.li`
    font-size: 1.7rem;
  `

  return (
    <NavContainer>
      <li>뉴스스탠드 </li>
      <li>전체 언론사</li>
      <li>MY 뉴스</li>
      <ArrowLi><IoIosArrowDropleftCircle /></ArrowLi>
      <ArrowLi><IoIosArrowDroprightCircle /></ArrowLi>
    </NavContainer>
  );
};

export default Nav;