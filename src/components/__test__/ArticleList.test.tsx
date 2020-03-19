import '@testing-library/jest-dom/extend-expect';
import {screen} from '@testing-library/react';
import React from "react";
import {ArticleList} from "../ArticleList";
import routeData from 'react-router';
import {mockArticle, mockLocation, renderWithReduxAndRouter} from "./Mocks";


beforeEach(() => {
    jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation)
});

test('can render with redux with defaults', () => {
    const {getByTestId} = renderWithReduxAndRouter(<ArticleList/>);
    expect(getByTestId("articles").childElementCount).toBe(1);
});

test('can render with redux with custom initial state', () => {
    const {getByTestId} = renderWithReduxAndRouter(<ArticleList/>, {
        initialState: {articles: [mockArticle]},
    });
    expect(getByTestId("articles").childElementCount).toBe(2);
    expect(screen.getByText(mockArticle.title)).toBeInTheDocument();
});


