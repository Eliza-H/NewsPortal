import {takeEvery, call, put} from "redux-saga/effects";
import {ActionTypes} from "../constants/action-types";
import {fetchArticle, fetchArticles} from "../mock/server";

export default function* watcherSaga() {
    yield takeEvery(ActionTypes.ARTICLES_REQUESTED, articlesRequestedWorkerSaga);
    yield takeEvery(ActionTypes.ARTICLE_REQUESTED, articleRequestedWorkerSaga);
}

export function* articlesRequestedWorkerSaga(action) {
    try {
        const payload = yield call(getArticles, action.payload);
        yield put({type: ActionTypes.ARTICLES_LOADED, payload});
    } catch (e) {
        yield put({type: ActionTypes.API_ERRORED, payload: e});
    }
}

export function getArticles(payload) {
    return fetchArticles(payload)
}

export function* articleRequestedWorkerSaga(action) {
    try {
        const payload = yield call(getArticle, action.payload);
        yield put({type: ActionTypes.ARTICLE_LOADED, payload});
    } catch (e) {
        console.log(e)
        yield put({type: ActionTypes.API_ERRORED, payload: e});
    }
}

export function getArticle(payload) {
    return fetchArticle(payload)
}