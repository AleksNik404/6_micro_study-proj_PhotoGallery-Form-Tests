import React from 'react';

import Header from '../../components/Header';
import Form from './components/Form';

const FormPage = () => {
  return (
    <>
      <Header namePage="Form Page" />
      <main>
        <section className="container">
          <Form />
          <h1>Карточки</h1>
        </section>
      </main>
    </>
  );
};

export default FormPage;
