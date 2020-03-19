import React from "react";
import {Header, HeaderNameLink} from "../styled/articleList";
import {DEFAULT_URL} from "../constants/links";
export const HeaderComponent = () => (
    <Header><HeaderNameLink to={DEFAULT_URL}>News World</HeaderNameLink></Header>
);