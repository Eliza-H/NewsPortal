import {Article} from "../constants/types";
import React from 'react';
import {ListItemContainer, ListItemTitle} from "../styled/articleItem";
import {Link} from "react-router-dom";
import {Image} from "./Image";

export const ArticleItem = ({article}: { article: Article }) => (
        <ListItemContainer>
            <Link to={`/articles/${article.t}/${article.id}`} >
                <Image src={article.img.original_url} alt={article.img.title}/>
                <ListItemTitle>{article.title}</ListItemTitle>
            </Link>
        </ListItemContainer>
);