import {createStore} from "redux";
import {rootReducer} from "../../reducers";
import {createMemoryHistory} from "history";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {Router} from "react-router";
import React from "react";
import {Article, ArticleType} from "../../constants/types";
import {DEFAULT_URL} from "../../constants/links";

export const mockLocation = {
    pathname: '/',
    hash: '',
    search: '',
    state: ''
};

export function renderWithReduxAndRouter(
    ui: any,
    {initialState, store = createStore(rootReducer, initialState)}: any = {},
    {route = DEFAULT_URL, history = createMemoryHistory({initialEntries: [route]}),}: any = {}
) {
    return {
        ...render(<Provider store={store}>
            <Router history={history}>
                {ui}
            </Router>
        </Provider>),
        store,
        history
    }
}

export const mockArticle: Article = {
    id: "id",
    src: "source",
    img: {
        original_url: "http://localhost/url",
        title: "title"
    },
    title: "Article Title",
    tags: ["tag"],
    url: "url",
    t: ArticleType.Article,
    body: [{data: "data"}]
};