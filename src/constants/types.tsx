export interface Article {
    id: string;
    src: string;
    img: {title: string, original_url:string}
    title: string;
    t: ArticleType;
    tags: string[];
    url: string;
    body: {data: string}[]
}
export interface Articles{
    articles: Article[];
}

export enum ArticleType {
    Article = "Article",
    Video = "Video"
}