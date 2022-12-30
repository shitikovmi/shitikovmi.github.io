import './ArticleHeader.scss'
import {useTranslation} from "react-i18next";

const ArticleHeader = () => {

    const {t} = useTranslation()

    return (
        <section className="article-header">
            <div className="container article-header__container">
                <h2 className="title article-header__title">
                    {t('articleHeader.title')}
                </h2>
            </div>
        </section>
    );
};

export default ArticleHeader;