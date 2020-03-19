import React, {useCallback, useEffect} from 'react';
import {Article, ArticleType} from "../constants/types";
import {ArticleItem} from "./ArticleItem";
import {useDispatch, useSelector} from 'react-redux'
import {InitialState} from "../reducers";
import {getArticles} from "../actions";
import {ListContainer} from "../styled/articleList";
import {useHistory, useLocation, useRouteMatch} from 'react-router-dom';
import {Tabs} from "./Tabs";
import {ARTICLES, ARTICLES_TYPE_URL} from "../constants/links";
import {Tag, Tags} from "../styled/articleDetail";

const TABS = Object.keys(ArticleType);

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export const ArticleList = () => {
    const articles = useSelector((state: InitialState) => (state.articles));
    const match = useRouteMatch<{ id: string, type: ArticleType }>(ARTICLES_TYPE_URL);
    const type = match?.params.type;
    const dispatch = useDispatch();
    const history = useHistory();
    const selectType = useCallback(value => {
        history.push(ARTICLES + value)
    }, [history]);
    const tag = useQuery().get("tag");
    const handleRemoveTagClick = useCallback(() => history.push(ARTICLES + type), [history, type])

    useEffect(() => {
        dispatch(getArticles({offset: 0, limit: 50, tag, type}))
    }, [dispatch, tag, type]);
    return (
        <ListContainer data-testid="articles">
            {type && <Tabs tabs={TABS} selected={type} onChange={selectType}/>}
            {tag &&
                <Tags>
                    <Tag>{tag}</Tag>
                    <Tag onClick={handleRemoveTagClick}>remove tag</Tag>
                </Tags>
            }
            {articles.map((article: Article) => (
                <ArticleItem key={article.id} article={article}/>
            ))}
        </ListContainer>
    )
};
