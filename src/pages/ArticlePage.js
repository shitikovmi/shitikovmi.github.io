import React, {useEffect, useState} from 'react';
import {Background} from "../components/shared";
import {ArticleBody, ArticleHeader} from "../components/Article";
import {useParams} from "react-router-dom";
import {get, getDatabase, ref} from "firebase/database";
import firebase from "../firebase";
import { getStorage, ref as storageRef, getDownloadURL} from "firebase/storage";
import {Header, Footer, ContactsLink, YoutubeLink} from "../components/shared";
import ArticleRelated from "../components/Article/ArticleRelated/ArticleRelated";
import {useTranslation} from "react-i18next";

const ArticlePage = () => {

    const [articleData, setArticleData] = useState(null);
    const {id} = useParams();
    const [articleImgUrl, setArticleImgUrl] = useState('');

    const {i18n } = useTranslation();

    useEffect(() => {
        const db = getDatabase(firebase);
        const articleRef = ref(db, `articlesData/${id}`);
        get(articleRef).then(snapshot => {
            if (snapshot.exists()) {
                setArticleData(snapshot.val());
            }
        })
    }, [id]);

    useEffect(() => {
        const storage = getStorage(firebase);
        const pathReference = storageRef(storage, `img/${id}`);
        getDownloadURL(pathReference).then(url => {
            setArticleImgUrl(url);
        })
    }, []);

    return (
        <main>
            <Header/>
            <Background img={articleImgUrl}/>
            <ArticleHeader/>
            <ArticleRelated/>
            <ArticleBody
                articleTitle={articleData ? (
                    i18n.language === 'ru' ? articleData.articleTitleRu : articleData.articleTitle
                ) : null}
                articleDate={articleData ? (
                    i18n.language === 'ru' ? articleData.articleDateRu : articleData.articleDate
                ) : null}
                articleText={articleData ? (
                    i18n.language === 'ru' ? articleData.articleTextRu : articleData.articleText
                ) : null}
            />
            <YoutubeLink/>
            <ContactsLink/>
            <Footer/>
        </main>
    );
};

export default ArticlePage;