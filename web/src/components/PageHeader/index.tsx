import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/icons/back.svg';
import logoImg from '../../assets/logo.svg';

import './styles.css';

interface PageHeaderProps {
  title: string;
};

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <nav className="top-bar-container">
        <Link to="/">
          <img src={ backIcon } alt="Voltar" />
        </Link>

        <img src={ logoImg } alt="Proffy" />
      </nav>

      <div className="header-content">
        <strong> { props.title } </strong>
        {
          props.children
        }
      </div>      
    </header>
  );
};

export default PageHeader;
