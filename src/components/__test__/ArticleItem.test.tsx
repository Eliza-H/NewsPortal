import {mockArticle, renderWithReduxAndRouter} from "./Mocks";
import React from "react";
import {screen} from '@testing-library/react';
import { ArticleItem } from "../ArticleItem";

test('can render with mock Article', () => {
    const component = renderWithReduxAndRouter(<ArticleItem article={mockArticle}/>);
    expect(screen.getByText(mockArticle.title)).toBeInTheDocument();
    expect(screen.getByAltText(mockArticle.img.title)).toBeInTheDocument();
    expect(screen.getByAltText(mockArticle.img.title).src).toEqual(mockArticle.img.original_url)
});