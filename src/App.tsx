import React from 'react';
import './App.css';
import {ArticleList} from "./components/ArticleList";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import {ArticleDetail} from "./components/ArticleDetail";
import {HeaderComponent} from "./components/HeaderComponent";
import {ARTICLES, ARTICLES_TYPE_ID_URL, ARTICLES_TYPE_URL, DEFAULT_URL} from "./constants/links";

export function App() {
    return (
            <Router>
                <HeaderComponent/>
                <Switch>
                    <Route path={ARTICLES_TYPE_ID_URL}>
                        <ArticleDetail/>
                    </Route>
                    <Route path={ARTICLES_TYPE_URL}>
                        <ArticleList/>
                    </Route>
                    <Redirect exact from="/" to={DEFAULT_URL} />
                    <Redirect exact from={ARTICLES} to={DEFAULT_URL} />
                </Switch>
            </Router>
    );
}
