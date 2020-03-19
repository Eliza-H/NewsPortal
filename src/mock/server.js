import articles from "./data-articles";
import videos from "./data-videos"
import {ArticleType} from "../constants/types";

const data = {
    [ArticleType.Article] : articles,
    [ArticleType.Video] : videos,
}

export function fetchArticles({limit, offset, tag, type}) {
    if (tag) {
        return new Promise(resolve => {
            resolve(data[type].filter((el) => el.tags.includes(tag)))
        })
    } else {
        return new Promise(resolve => {
            resolve(data[type].slice(offset, limit))
        })
    }
}

export function fetchArticle({id, type}) {
    return new Promise(resolve => {
        resolve(data[type].find((el) => el.id === id))
    })
}
