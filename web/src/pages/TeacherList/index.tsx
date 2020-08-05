import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import './style.css';
import Input from '../../components/Input';
import Select from '../../components/Select';

export default function TeacherList(): JSX.Element {
  return (
    <main id="page-teacher-list" className="container">
      <PageHeader title="Estes são os professores disponíveis.">

        <form id="search-teachers">
          <Select
            name="suject"
            label="Matéria"
            options={ [
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ed.Física', label: 'Ed.Física' },
              { value: 'Espanhol', label: 'Espanhol' },
              { value: 'Filosofia', label: 'Filosofia' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Inglês', label: 'Inglês' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
              { value: 'Sociologia', label: 'Sociologia' },
            ] }
          />

          <Select
            name="week_day"
            label="Dia da semana"
            options={ [
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ] }
          />

          <Input type="time" name="time" label="Hora" />
        </form>

      </PageHeader>

      <section id="list-cards-container">
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </section>


    </main>
  );
}
