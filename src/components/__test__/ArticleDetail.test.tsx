import {mockArticle, renderWithReduxAndRouter} from "./Mocks";
import React from "react";
import {screen} from '@testing-library/react';
import {ArticleDetail} from "../ArticleDetail";

test('can render with mock Article', () => {
    const route = `/articles/${mockArticle.id}`;
    const component = renderWithReduxAndRouter(<ArticleDetail/>, {
        initialState: {article: mockArticle},
    }, {route});
    expect(screen.getByText(mockArticle.title)).toBeInTheDocument();
    expect(screen.getByText(mockArticle.body[0].data)).toBeInTheDocument();
});