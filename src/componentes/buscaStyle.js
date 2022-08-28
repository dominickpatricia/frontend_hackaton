import styled from "styled-components";

import { mobile } from "../responsive";

export const Container = styled.div`
  margin-left: 50px;
  height: 80px;
  background-color: #fff;
  margin-top:10px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 100;
  `;
export const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
  `;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  `;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  font-size: 2rem;
  ${mobile({ display: "none" })}
  `;

export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 50px;
  padding: 5px;
  `;
export const Center = styled.div`
  flex: 1;
  text-align: center;
  `;