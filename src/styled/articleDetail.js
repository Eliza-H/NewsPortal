import styled from "styled-components";
import {Link} from "react-router-dom";
export const DetailContainer = styled.div`
    padding: 20px;
    margin: auto;
    @media(min-width: 960px){
        max-width: 70%;
    }
`;
export const DetailTitle = styled.h1`
    font-size: 28px;
    line-height: 36.4px;
`;
export const SrcLink = styled.a`
    color: #5e6973;
    text-decoration: none;
    margin-bottom: 16px;
    font-size: 16px;
    display: block;
    &:hover{
        color: black;
    }
`;
export const Tags = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;
export const Tag = styled.span`
    display: block;
    padding: 5px 15px;
    border-radius: 3px;
    background: #eaf0f6;
    color: #33475b;
    margin-left: 0.825rem;
    cursor: pointer;
    text-decoration: none;
    &:hover{
        text-decoration: none;
        background: #e5f5f8;
    }
`;
export const TagLink = styled(Link)`
    display: block;
    padding: 5px 15px;
    border-radius: 3px;
    background: #eaf0f6;
    color: #33475b;
    margin-left: 0.825rem;
    cursor: pointer;
    text-decoration: none;
    &:hover{
        text-decoration: none;
        background: #e5f5f8;
    }
`;
export const Content = styled.div`
    font-size: 18px; 
    line-height: 1.56;
`;