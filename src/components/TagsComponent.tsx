import React from "react";
import {TagLink, Tags} from "../styled/articleDetail";
import {ArticleType} from "../constants/types";
import {ARTICLES} from "../constants/links";

interface TagsProps {
    tags: string[];
    type: ArticleType;
}

export const TagsComponent = ({tags, type}: TagsProps) => (
    <Tags>
        {tags.map((tag: string) => (
            <TagLink key={tag} to={`${ARTICLES}${type}?tag=${tag}`}>{tag}</TagLink>
        ))}
    </Tags>
);