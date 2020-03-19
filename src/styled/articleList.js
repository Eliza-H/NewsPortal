import styled from "styled-components";
import {Link} from "react-router-dom";

export const ListContainer = styled.div`
    display: flex;
    
    overflow: hidden;
    flex-wrap: wrap;
    justify-content: center;
    margin: 30px auto;
    width: 90%;
`;

export const Header = styled.div`
      position: relative;
    z-index: 100;
    width: 100%;
    height: 48px;
    min-width: 1024px;
    font-family: "-apple-system",BlinkMacSystemFont,Arial,sans-serif;
    line-height: 48px;
    background: #303b44;
    box-sizing: border-box;
`;

export const HeaderNameLink = styled(Link)`
  color: white;
  font-size: 20px;
  padding: 5px 0 5px 15px;
  text-decoration: none;
`;