import "./ContactForm.scss"

import {Formik} from "formik";
import { object, string} from 'yup';
import emailjs from 'emailjs-com'
import {useTranslation} from "react-i18next";

const validationSchema = object({
    name: string().required('Required'),
    email: string().email('Invalid email'),
    phone: string().required('Required'),
    message: string().required('Required')
});

const ContactForm = ({buttonClassName = 'button-secondary', params}) => {

    const submitButtonClassName =  `${buttonClassName} contact-form__button`;

    const {t} = useTranslation();

    return (
        <Formik initialValues={{
            name: '',
            phone: '',
            email: '',
            message: ''
        }}
                onSubmit={(data, {resetForm, setSubmitting}) => {
                    const serviceID = 'default_service';
                    const templateID = 'template_6ztjy8t';
                    const userID = 'KxnudUWcEjJUVT-Ty';
                    setSubmitting(true);
                    emailjs.sendForm(serviceID, templateID, ".contact-form", userID)
                        .then(() => {
                            setSubmitting(false);
                            resetForm();
                        })
                }}
                validationSchema={validationSchema}>
            {
                ({
                     values,
                     errors,
                     touched,
                     handleChange,
                     handleBlur,
                     handleSubmit,
                     isSubmitting,
                    submitForm
                 }) => (
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input type="text"
                               className="contact-form__input"
                               name="name"
                               placeholder={t('form.name')}
                               value={values.name}
                               onChange={handleChange}
                               onBlur={handleBlur}/>
                        <p className="contact-form__error">
                            {errors.name && touched.name && errors.name}
                        </p>
                        <input type="text"
                               className="contact-form__input"
                               name="phone"
                               placeholder={t('form.phone')}
                               value={values.phone}
                               onChange={handleChange}
                               onBlur={handleBlur}/>
                        <p className="contact-form__error">
                            {errors.phone && touched.phone && errors.phone}
                        </p>
                        <input type="text"
                               className="contact-form__input"
                               name="email"
                               placeholder={t('form.email')}
                               value={values.email}
                               onChange={handleChange}
                               onBlur={handleBlur}/>
                        <p className="contact-form__error">
                            {errors.email && touched.email && errors.email}
                        </p>
                        <input type="text"
                               className="contact-form__input"
                               name="message"
                               placeholder={t('form.message')}
                               value={values.message}
                               onChange={handleChange}
                               onBlur={handleBlur}/>
                        <input hidden name="apartmentType" value={params}/>
                        <p className="contact-form__error">
                            {errors.message && touched.message && errors.message}
                        </p>
                        <button className={submitButtonClassName}
                                type="button" onClick={submitForm}>
                            {isSubmitting ? t('form.sending') : t('form.btn')}
                        </button>
                    </form>
                )
            }
        </Formik>
    )
}

export default ContactForm;