import styled, {css} from "styled-components";

export const TabsView = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin: 0;
    margin-bottom: 15px;
    padding: 0;
    width: 100%;
    border-bottom: 1px solid #d5dddf;
    list-style: none;
`;

export const Tab = styled.span`
    display: inline-block;
    margin: 0 0 -1px 0;
    height: 60px;
    border-bottom: 2px solid transparent;
    color:#6f7577;
    vertical-align: middle;
    text-transform: uppercase;
    white-space: nowrap;
    letter-spacing: .8px;
    font-weight: 700;
    font-size: 14px;
    font-family: "-apple-system",BlinkMacSystemFont,Arial,sans-serif;
    line-height: 60px;
    margin: 0 25px;
    cursor: pointer;
    &: hover{
        color: #4d80aa;
    }
    ${({isActive}) => isActive
      && css`
           border-color: #4d80aa;
           color: #4d80aa;
    `};
`;