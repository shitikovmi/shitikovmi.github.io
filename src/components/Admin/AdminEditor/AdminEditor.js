import {useEffect, useState} from "react";
import {getDatabase, get, ref, set} from "firebase/database";
import firebase from "../../../firebase";
import { getStorage, ref as storageRef, uploadBytes } from "firebase/storage";
import parse from 'html-react-parser';
import {useNavigate} from "react-router-dom";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import './AdminEditor.scss'
import RichEditor from "../RichEditor/RichEditor";

const AdminEditor = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth(firebase);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)
            } else {
                navigate('/', {replace: true})
            }
        });
    })

    return (
        <section className="admin-editor">
            <div className="container admin-editor__container">
                <AdminEditorEditField/>
            </div>
        </section>
    );
};

export default AdminEditor;

const AdminEditorEditField = () => {
    const [path, setPath] = useState(null);
    const [articlesId, setArticlesId] = useState([]);
    const [articleImg, setArticleImg] = useState(null);
    const [articleImgPreview, setArticleImgPreview] = useState(null);
    const [articleTitle, setArticleTitle] = useState('');
    const [articleTitleInput, setArticleTitleInput] = useState('');
    const [articleDate, setArticleDate] = useState('');
    const [articleText, setArticleText] = useState('');
    const [error, setError] = useState(null);
    const [deletePath, setDeletePath] = useState(null);

    const handler = () => {
        if (!path || !articleImg) return
        const storage = getStorage(firebase);
        const imgRef = storageRef(storage, `img/${path}`);
        uploadBytes(imgRef, articleImg);
    }

    const deleteHandler = () => {
        if (deletePath) {
            const db = getDatabase(firebase);
            const deleteRef = ref(db, `articlesData/${path}`);
            set(deleteRef, null);
        }
    }

    useEffect(() => {
        if (!path) {
           setPath(articleTitle.toLowerCase().replace(/ /g, '-'));
        }
    }, [articleTitle, path]);

    useEffect(() => {
        if (!articleImg) return
        const fr = new FileReader();
        fr.onload = function(event) {
            setArticleImgPreview(event.target.result)
        };
        fr.readAsDataURL(articleImg);
    }, [articleImg]);

    useEffect(() => {
        const db = getDatabase(firebase);
        const articlesIdRef = ref(db, 'articlesId');
        get(articlesIdRef).then(snapshot => {
            if (snapshot.exists()) {
                setArticlesId(Object.values(snapshot.val()));
            }
        })
    }, []);

    const onPublishHandler = () => {
        if (!articleTitle) {
            setError('Empty article title field');
        } else if (!articleDate) {
            setError('Empty article date field');
        } else if (!articleImg) {
            setError('Empty article image field');
        } else if (!articleText) {
            setError('Empty article text field');
        } else {
            setError(null);
            const db = getDatabase(firebase);
            const articleRef = ref(db, `articlesData/${path}`);
            set(articleRef, {
                articleImg,
                articleTitle,
                articleDate,
                articleText
            }).then(() => {
                const articleIdRef = ref(db, `articlesId/${path}`);
                set(articleIdRef, path)
            })
        }
    }

    const [floor, setFloor] = useState('');
    const [room, setRoom] = useState('');
    const [attr, setAttr] = useState('');
    const [project, setProject] = useState('');
    const [progressInfo, setProgressInfo] = useState('');

    const progressInfoHandler = () => {
        const db = getDatabase(firebase);
        const path = `projectsTooltip/${project}`;
        const dataRef = ref(db, path);
        set(dataRef, progressInfo).then(() => {
            setProgressInfo('')
        })
    }

    const interactionHandler = () => {
        const db = getDatabase(firebase);
        const path = `interactionAreas/${floor}/${room}/attr`;
        const dataRef = ref(db, path);
        set(dataRef, attr);
    }

    console.log(floor)

    return (
        <section className="admin-editor-edit-field">
            <div className="admin-editor-edit-field__box">
                <p className="text-big">
                    Edit progress information
                </p>
                <div className="admin-editor-edit-field__box">
                    <p className="text-small">
                        Project
                    </p>
                    <select
                        className="admin-editor-edit-field__select"
                        onChange={e => setProject(e.target.value)}>
                        <option value='-'>-</option>
                        <option value="Luxury Villas">Luxury Villas</option>
                        <option value="Batumi Garden Inn">Batumi Garden Inn</option>
                        <option value="Lemon Garden Residence & SPA">Lemon Garden Residence & SPA</option>
                        <option value="Royal Residence Botanico">Royal Residence Botanico</option>
                    </select>
                    <input
                        type="text"
                        value={progressInfo}
                        onChange={e => setProgressInfo(e.target.value)}
                        placeholder="Progress information"
                        className="admin-editor-edit-field__input"
                        name="progressInfo"/>
                    <div
                        className="button-secondary"
                        onClick={progressInfoHandler}>
                        Done
                    </div>
                </div>
            </div>
            <div className="admin-editor-edit-field__box">
                <p className="text-big">
                    Edit Royal Residence Botanico interaction
                </p>
                <div className="admin-editor-edit-field__row">
                    <div className="admin-editor-edit-field__box">
                        <p className="text-small">
                            Floor
                        </p>
                        <select
                            className="admin-editor-edit-field__select"
                            onChange={e => setFloor(e.target.value)}>
                            <option value='-'>-</option>
                            <option value="floor-1">1</option>
                            <option value="floor-2">2</option>
                            <option value="floor-3">3</option>
                            <option value="floor-4">4</option>
                            <option value="floor-5">5</option>
                        </select>
                    </div>
                    <div className="admin-editor-edit-field__box">
                        <p className="text-small">
                            Room
                        </p>
                        {
                            (floor === "floor-1") ?
                                <select
                                    className="admin-editor-edit-field__select"
                                    onChange={e => setRoom(e.target.value)}>
                                    <option value='-'>-</option>
                                    <option value="area-1">1</option>
                                    <option value="area-2">2</option>
                                    <option value="area-3">3</option>
                                    <option value="area-4A">4A</option>
                                    <option value="area-4B">4B</option>
                                    <option value="area-5">5</option>
                                    <option value="area-commercial">Commercial</option>
                                </select>
                            :
                                (floor === "floor-2" || floor === "floor-3" || floor === "floor-4") ?
                                    <select
                                        className="admin-editor-edit-field__select"
                                        onChange={e => setRoom(e.target.value)}>
                                        <option value='-'>-</option>
                                        <option value="area-10">10</option>
                                        <option value="area-11">11</option>
                                        <option value="area-6">6</option>
                                        <option value="area-7">7</option>
                                        <option value="area-8A">8A</option>
                                        <option value="area-8B">8B</option>
                                        <option value="area-9A">9A</option>
                                        <option value="area-9B">9B</option>
                                    </select>
                                    :
                                    (floor === "floor-5") ?
                                        <select
                                            className="admin-editor-edit-field__select"
                                            onChange={e => setRoom(e.target.value)}>
                                            <option value='-'>-</option>
                                            <option value="area-10">12A</option>
                                            <option value="area-11">12B</option>
                                            <option value="area-6">13A</option>
                                            <option value="area-7">13B</option>
                                            <option value="area-8A">14A</option>
                                            <option value="area-8B">14B</option>
                                            <option value="area-9A">15A</option>
                                            <option value="area-9B">15B</option>
                                        </select>
                                        : null
                        }
                    </div>
                    <div className="admin-editor-edit-field__box">
                        <p className="text-small">
                            Attribute
                        </p>
                        <select
                            className="admin-editor-edit-field__select"
                            onChange={e => setAttr(e.target.value)}>
                            <option value='-'>-</option>
                            <option value="soldOut">Sold Out</option>
                            <option value="reserved">Reserved</option>
                            <option value="free">Free</option>
                        </select>
                    </div>
                    <div
                        className="button-secondary"
                        onClick={interactionHandler}>
                        Done
                    </div>
                </div>
            </div>
            <div className="admin-editor-edit-field__box">
                <p className="text-big admin-editor-edit-field__text">
                    Delete article
                </p>
                <div className="admin-editor-edit-field__box">
                    <select
                        className="admin-editor-edit-field__select"
                        onChange={e => setDeletePath(e.target.value)}>
                        <option value="">-</option>
                        {
                            articlesId.map(id => (
                                <option
                                    key={id}
                                    value={id}>
                                    {id}
                                </option>
                            ))
                        }
                    </select>
                    <div onClick={deleteHandler}
                         style={{
                             backgroundColor: 'darkred'
                         }}
                         className="button-secondary admin-editor-edit-field__button">
                        Submit
                    </div>
                </div>
            </div>
            <div className="admin-editor-edit-field__box">
                <p className="text-big admin-editor-edit-field__text">
                    Select article
                </p>
                <select
                    className="admin-editor-edit-field__select"
                    onChange={e => setPath(e.target.value)}>
                    <option value="">Create new</option>
                    {
                        articlesId.map(id => (
                            <option
                                key={id}
                                value={id}>
                                {id}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div className="admin-editor-edit-field__box">
                <p className="text-big admin-editor-edit-field__text">
                    Title
                </p>
                <input
                    onChange={e => setArticleTitleInput(e.target.value)}
                    value={articleTitleInput}
                    placeholder="10 reasons to invest in Georgia: in real estate"
                    className="admin-editor-edit-field__input"
                    name="articleTitle"
                    type="text"/>
                <div onClick={() => setArticleTitle(articleTitleInput)}
                     className="button-secondary admin-editor-edit-field__button">
                    Select title
                </div>
            </div>
            <div className="admin-editor-edit-field__box">
                <p className="text-big admin-editor-edit-field__text">
                    Date
                </p>
                <input
                    onChange={e => setArticleDate(e.target.value)}
                    value={articleDate}
                    placeholder="May 20, 2022"
                    className="admin-editor-edit-field__input"
                    name="articleTitle"
                    type="text"/>
            </div>
            <div className="admin-editor-edit-field__box">
                <p className="text-big admin-editor-edit-field__text">
                    Image
                </p>
                <div className="admin-editor-edit-field__row">
                    <input onChange={e => setArticleImg(e.target.files[0])} type="file"/>
                    <div className="button-secondary admin-editor-edit-field__button" onClick={handler}>
                        Select image
                    </div>
                </div>
            </div>
            <img className="admin-editor-edit-field__preview-image" src={articleImgPreview} alt=""/>
            <div className="admin-editor-edit-field__box">
                <p className="text-big admin-editor-edit-field__text">
                    Text
                </p>
                <RichEditor setArticleText={setArticleText}/>
                <div className='article-body__container'>
                    <h2 className="article-body__title">{articleTitle}</h2>
                    <p className="article-body__date">
                        {articleDate}
                    </p>
                    <div className="article-body__text admin-editor-edit-field__article-body-text">
                        {articleText ? parse(articleText) : null}
                    </div>
                </div>
                <div
                    onClick={onPublishHandler}
                    className="button-primary admin-editor-edit-field__button">
                    Publish
                </div>
                <p className="text-big admin-editor-edit-field__text">
                    {error}
                </p>
            </div>
        </section>
    )
}