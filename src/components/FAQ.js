import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'; 
import Styles from '../Css/FAQ.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: 'O que é a EEEP Irmã Ana Zélia da Fonseca?',
      answer: 'A EEEP Irmã Ana Zélia da Fonseca é uma escola profissionalizante que oferece cursos técnicos nas áreas de Administração, Eletrotécnica, Enfermagem e Informática, com foco na preparação dos alunos para o mercado de trabalho.',
    },
    {
      question: 'Quais cursos são oferecidos pela EEEP?',
      answer: 'A escola oferece cursos técnicos de Administração, Eletrotécnica, Enfermagem e Informática.',
    },
    {
      question: 'Como posso me matricular na EEEP?',
      answer: 'As inscrições se iniciam normalmente perto do fim do ano anterior. Já a matrículas são feitas no início de cada ano letivo. Fique atento aos comunicados oficiais da escola para informações sobre o processo seletivo.',
    },
    {
      question: 'A escola oferece apoio aos alunos?',
      answer: 'Sim, a EEEP oferece apoio pedagógico, orientação profissional e estágios remunerados para os alunos.',
    },
    {
      question: 'A EEEP oferece bolsas de estudo ou apoio financeiro?',
      answer: 'A EEEP é uma escola pública, portanto, não cobra mensalidades. Além disso, oferece bolsas de estágio para seus alunos.',
    },
    {
      question: 'Como funciona o estágio para os alunos?',
      answer: 'Os alunos podem participar de estágios supervisionados com empresas parceiras da escola, como parte de sua formação técnica.',
    },
    {
      question: 'A EEEP tem transporte escolar?',
      answer: 'Sim, a escola oferece transporte escolar para algumas regiões da cidade. Consulte a secretaria da escola para mais informações.',
    },
    {
      question: 'Qual o horário de funcionamento da escola?',
      answer: 'A EEEP funciona de segunda a sexta-feira, das 7h10 às 16h40.',
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className={Styles.faqContainer}>
      <h1 className={Styles.faqTitle} data-aos="fade-in">Perguntas Frequentes</h1>

      <div className={Styles.faqList}>
        {questions.map((item, index) => (
          <div key={index} className={Styles.faqItem} data-aos="fade-up">
            <button 
              className={Styles.faqQuestion}
              onClick={() => toggleAnswer(index)}
            >
              {item.question}
              <FontAwesomeIcon 
                className={Styles.faqIcon}
                icon={activeIndex === index ? faChevronUp : faChevronDown}
              />
            </button>
            <p className={`${Styles.faqAnswer} ${activeIndex === index ? Styles.open : ''}`}>
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
