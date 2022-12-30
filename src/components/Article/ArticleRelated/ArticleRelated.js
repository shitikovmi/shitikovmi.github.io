import './ArticleRelated.scss';

import {Swiper, SwiperSlide} from "swiper/react";
import {useEffect, useState} from "react";
import SwiperCore, {Autoplay, Pagination} from "swiper";
import {Link} from "react-router-dom";
import 'swiper/css';
import "swiper/css/pagination";

import {getDatabase, ref, get} from "firebase/database";
import firebase from "../../../firebase";

import parse from "html-react-parser";

import arrowRight from "../../../assets/icons/shared/arrow-right.svg"
import {getDownloadURL, getStorage, ref as storageRef} from "firebase/storage";
import {useTranslation} from "react-i18next";

const ArticleRelated = () => {


    const [articlesData, setArticlesData] = useState([]);

    const {i18n} = useTranslation();

    useEffect(() => {
        const db = getDatabase(firebase);
        const articlesRef = ref(db, 'articlesData');
        get(articlesRef).then(snapshot => {
            if (snapshot.exists()) {
                setArticlesData(Object.values(snapshot.val()));
            }
        })
    }, [i18n.language])

    useEffect(() => {
        SwiperCore.use([Autoplay, Pagination]);
    })

    return (
        <section className="article-related">
            <div className="container article-related__container">
                <p className="subtitle article-related-slide__subtitle-mobile">
                    Related Articles
                </p>
                <Swiper className="swiper-wrapper article-related-swiper"
                        slidesPerView={1}
                        autoplay={{
                            delay: 3000,
                        }}
                        pagination={{
                            type: "fraction",
                        }}
                        loop={true}
                        spaceBetween={30}
                        lazy={true}
                        modules={[Autoplay, Pagination]}>
                    {
                        articlesData ? articlesData.map(({articleTitle, articleTitleRu, articleText, articleTextRu}, i) => (
                            <SwiperSlide key={i}>
                                <ArticleRelatedSlide
                                    textObj={{articleText, articleTextRu}}
                                    name={articleTitle}
                                    titleObj={{articleTitleRu, articleTitle}}
                                />
                            </SwiperSlide>
                        )) : null
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default ArticleRelated;

const ArticleRelatedSlide = ({name, textObj, titleObj}) => {

    const {articleText, articleTextRu} = textObj;
    const {articleTitleRu, articleTitle} = titleObj;

    const {t, i18n} = useTranslation();

    const [text, setText] = useState('');
    const [title, setTitle] = useState('');

    console.log(text)

    useEffect(() => {
        if (i18n.language === 'ru') {
            setTitle(articleTitleRu)
            setText(articleTextRu)
        } else {
            setTitle(articleTitle)
            setText(articleText)
        }
    }, [i18n.language])


    const [articleTextFirstParagraph, setArticleTextFirstParagraph] = useState('');
    const [articleImgUrl, setArticleImgUrl] = useState('');

    useEffect(() => {
        const firstTagIndex = text.search('<p>');
        const secondTagIndex = text.indexOf('</p>', firstTagIndex);
        const articleTextFirstParagraph = text.slice(firstTagIndex + 3, secondTagIndex);
        setArticleTextFirstParagraph(articleTextFirstParagraph);
    }, [text]);

    const path = name.toLowerCase().replace(/ /g, '-');

    useEffect(() => {
        const storage = getStorage(firebase);
        const pathReference = storageRef(storage, `img/${path}`);
        getDownloadURL(pathReference).then(url => {
            setArticleImgUrl(url);
        })
    }, [path]);

    return (
        <div className='article-related-slide'>
            <div className="article-related-slide__box">
                <p className="subtitle article-related-slide__subtitle">
                    {t('articleRelated.subtitle')}
                </p>
                <h2 className="title article-related-slide__title">
                    {title}
                </h2>
                <p className="text-small article-related-slide__text">
                    {parse(articleTextFirstParagraph)}
                </p>
                <Link
                    className="learn-more-link article-related-slide__link"
                    to={'/useful-information/' + path}>
                    {t('homeAbout.lm')}
                    <img src={arrowRight} alt="Arrow right"/>
                </Link>
            </div>
            <img src={articleImgUrl} className="article-related-slide__img" alt=""/>
        </div>
    )
}