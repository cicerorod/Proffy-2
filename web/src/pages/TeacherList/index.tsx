import React from 'react';
import PageHeader from '../../components/PageHeader';



import './style.css';
import TeacherItem from '../../components/TeacherItem';

export default function TeacherList(): JSX.Element {
  return (
    <main id="page-teacher-list" className="container">

      <PageHeader title="Estes são os professores disponíveis.">
        <form id="search-teachers">

          <div className="input-block">
            <label htmlFor="subject">Matérias</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" id="week-day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Horário</label>
            <input type="text" id="time" />
          </div>

        </form>
      </PageHeader>

      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
      

    </main>
  );
}
