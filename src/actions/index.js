import {ActionTypes} from "../constants/action-types";

export function getArticles(payload) {
    return {type: ActionTypes.ARTICLES_REQUESTED, payload};
}

export function getArticle(payload) {
    return {type: ActionTypes.ARTICLE_REQUESTED, payload};
}
