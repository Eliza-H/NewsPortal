import styled from "styled-components";

export const ListItemContainer = styled.div`
    position: relative;
    margin: 10px;
    text-align: center;
    width: 100%;
    max-width: 300px;
    height: 180px;
`;

export const ListItemImage = styled.img`
    width: 100%;
    height: 100%;
`;
export const ListItemTitle = styled.div`
    color: rgb(255, 255, 255);
    font-size: 20px;
    background: rgba(0, 0, 0, 0.5);
    line-height: 24px;
    position: absolute;
    bottom: 0px;
    width: 100%;
    ${ListItemContainer}:hover &     {
        text-decoration: underline;
    }
`;