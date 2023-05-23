import { Field, Form, Formik } from 'formik';
import React from 'react';
import style from './OrderForm.module.css';
import * as Yup from 'yup';

var today = new Date().toISOString().split('T')[0];

const ValidationSchema = Yup.object().shape({
  name: Yup.string().required('Обязательное поле'),
  phone: Yup.number().min(9, 'Слишком короткий').required('Обязательное поле'),
  email: Yup.string().email('Некорректный E-mail'),
  date: Yup.date().min(today, 'Некорректная дата').required('Обязательное поле'),
  address: Yup.string().required('Обязательное поле'),
});

//document.getElementsByName('date')[0].setAttribute('min', today);

const OrderForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          email: '',
          address: '',
          date: '',
          time: '',
          checked: false,
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}>
        {({ values, errors, touched, isValid, dirty, handleSubmit }) => (
          <Form className={style.root} onSubmit={handleSubmit}>
            <div className={style.contacts}>
              <p className={style.title}>Контактные данные</p>
              <div className={style.field_container}>
                <Field className={style.field} name={'name'} type={'text'} placeholder={'ФИО'} />
                {touched.name && errors.name && <p className={style.error}>{errors.name}</p>}
              </div>
              <div className={style.field_container}>
                <Field
                  className={style.field}
                  name={'phone'}
                  type={'tel'}
                  placeholder={'Телефон'}
                />
                {touched.phone && errors.phone && <p className={style.error}>{errors.phone}</p>}
              </div>
              <div className={style.field_container}>
                <Field
                  className={style.field}
                  name={'email'}
                  type={'email'}
                  placeholder={'E-mail'}
                />
                {touched.email && errors.email && <p className={style.error}>{errors.email}</p>}
              </div>
            </div>
            <div className={style.address}>
              <p className={style.title}>Подробности доставки</p>
              <div className={style.field_container}>
                <Field
                  className={style.field}
                  name={'address'}
                  type={'text'}
                  placeholder={'Адрес доставки (улица, дом, квартира)'}
                />
              </div>
              <div className={style.field_container}>
                <Field
                  className={style.field}
                  name={'date'}
                  type={'date'}
                  placeholder={'Дата доставки'}
                />
                {touched.date && errors.date && <p className={style.error}>{errors.date}</p>}
              </div>
              <div className={style.field_container}>
                <Field as="select" className={style.field} name={'time'}>
                  <option value="" hidden disabled selected>
                    Время доставки
                  </option>
                  <option>8:00-9:00</option>
                  <option>9:00-10:00</option>
                  <option>10:00-11:00</option>
                  <option>11:00-12:00</option>
                  <option>12:00-13:00</option>
                  <option>13:00-14:00</option>
                  <option>14:00-15:00</option>
                  <option>15:00-16:00</option>
                  <option>17:00-18:00</option>
                  <option>18:00-19:00</option>
                  <option>19:00-20:00</option>
                  <option>20:00-21:00</option>
                  <option>21:00-22:00</option>
                  <option>22:00-23:00</option>
                </Field>
              </div>
              <div className={style.checkbox}>
                <Field type="checkbox" name="checked"></Field>
                <p>
                  Согласен на обработку <a href="#">персональных данных</a>
                </p>
              </div>
              <div>
                <button className={style.checkout} type={'submit'} disabled={!isValid && !dirty}>
                  Оформить заказ
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OrderForm;
