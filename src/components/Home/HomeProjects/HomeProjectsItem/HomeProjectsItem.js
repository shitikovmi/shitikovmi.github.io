import './HomeProjectsItem.scss'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
const HomeProjectsItem = ({imgPC, imgMobile, name, description, deliveryDate, isSalesOpen, link}) => {

    const salesIndicatorClassName = isSalesOpen ?
        'home-projects-item-dropdown__sales home-projects-item-dropdown__sales-open'
        :
        'home-projects-item-dropdown__sales home-projects-item-dropdown__sales-closed'

    const img = window.screen.width <= 1200 ? imgMobile : imgPC

    const {t} = useTranslation();

    return (
        <Link to={link} className="home-projects-item">
            <img src={img}
                 alt="Project"
                 className="home-projects-item__img"
                 style={{
                     width: '100%',
                     height: 'auto'
                 }}/>
            <div className="home-projects-item__box">
                <h2 className="home-projects-item__name">
                    {name}
                </h2>
                <p className="home-projects-item__description">
                    {description}
                </p>
                <div className="home-projects-item__dropdown home-projects-item-dropdown">
                    <p className="home-projects-item-dropdown__delivery">
                        Delivery of the project:<br/>
                        <span>
                        {deliveryDate}
                    </span>
                    </p>
                    <p className={salesIndicatorClassName}>
                        {
                            isSalesOpen ? t('homeProjectsItem.salesOpen') : t('homeProjectsItem.salesClosed')
                        }
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default HomeProjectsItem;