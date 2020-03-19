import {ActionTypes} from "../constants/action-types";
import {Article} from "../constants/types";
import {Action, Reducer} from "redux";

export interface InitialState {
    articles: Article[],
    article: Article | null,
}

export const initialState: InitialState = {
    articles: [],
    article:  null,
};

export interface ArticlesLoadedAction extends Action {
    type: ActionTypes.ARTICLES_LOADED;
    payload: Article[];
};

export interface ArticleLoadedAction extends Action {
    type: ActionTypes.ARTICLE_LOADED;
    payload: Article;
};

export type ReducerActions = ArticlesLoadedAction | ArticleLoadedAction;

export const rootReducer: Reducer<InitialState, ReducerActions> = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ARTICLES_LOADED:
            return {...state, articles: action.payload};
        case ActionTypes.ARTICLE_LOADED:
            return {...state, article: action.payload};
        default:
            return state;
    }
};