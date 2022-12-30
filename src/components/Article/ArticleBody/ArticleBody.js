import './ArticleBody.scss'

import parse from "html-react-parser";

const ArticleBody = ({articleTitle, articleDate, articleText}) => {

    return (
        <section className="article-body">
            <div className="container article-body__container">
                <div className="article-header__line"></div>
                <h2 className="article-body__title">
                    {articleTitle}
                </h2>
                <p className="article-body__date">
                    {articleDate}
                </p>
                <div className="article-body__text">
                    {articleText ? parse(articleText) : null}
                </div>
            </div>
        </section>
    );
};

export default ArticleBody;