import React, {useEffect} from "react";
import {SrcLink, DetailContainer, DetailTitle, Content} from "../styled/articleDetail";
import {Divider} from "@material-ui/core";
import { useRouteMatch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {InitialState} from "../reducers";
import {getArticle} from "../actions";
import ReactMarkdown from 'react-markdown/with-html'
import {TagsComponent} from "./TagsComponent";
import {ARTICLES_TYPE_ID_URL} from "../constants/links";
import {ArticleType} from "../constants/types";

export const ArticleDetail = () => {
    const match = useRouteMatch<{ id: string, type: ArticleType }>(ARTICLES_TYPE_ID_URL);
    const article = useSelector((state: InitialState) => (state.article));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArticle({id:match?.params.id, type: match?.params.type}))
    }, [match, dispatch]);

    return <DetailContainer>
        {article &&
        <>
            <DetailTitle>{article.title}</DetailTitle>
            <Divider/>
            {article.src && <SrcLink href={article.url}>{`from ${article.src}`}</SrcLink>}
            <TagsComponent tags={article.tags} type={article.t}/>
            <Content>
                {article.body.map((el, i) => (
                    <ReactMarkdown key={i} source={el.data} escapeHtml={false}/>
                ))}
            </Content>
        </>}
    </DetailContainer>
};