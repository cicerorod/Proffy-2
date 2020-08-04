import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/icons/whatsapp.svg';

const TeacherItem: React.FC = () => {
  return (
    <section className="teacher-item-card">
      <article className="teacher-item">
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/48859060?s=460&u=2c3bdd59585c0ed134934d2ab50e025c4932141d&v=4"
            alt="Roger Bernardo de Melo Lima"
          />
          <div>
            <strong>Roger Bernardo</strong>
            <span>Programação</span>
          </div>
        </header>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla nunc eget dolor vulputate, nec iaculis mauris ullamcorper. In maximus aliquam nisi, at fermentum eros lacinia viverra. In commodo finibus.
          </p>

        <footer>
          <p>
            Preço/hora:
              <strong>R$ 100,00 </strong>
          </p>
          <button type="button">
            <img src={ whatsappIcon } alt="Whatsapp" />
              Entrar em contato
            </button>
        </footer>

      </article>
    </section>
  );
};

export default TeacherItem;