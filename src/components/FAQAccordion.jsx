import React from 'react';

const FAQAccordion = () => (
  <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
    <AccordionSection>
      <Container>
        {Data.map((item, index) => (
          <>
            <Wrap onClick={() => toggle(index)} key={index}>
              <h1>{item.question}</h1>
              <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
            </Wrap>
            {clicked === index ? (
              <Dropdown>
                <p>{item.answer}</p>
              </Dropdown>
            ) : null}
          </>
        ))}
      </Container>
    </AccordionSection>
  </IconContext.Provider>
);

export default FAQAccordion;
