// App.js
import React from 'react';
import Accordion from '../components/Acordian';

function App() {
  const accordionItems = [
    {
      title: 'Shipglobal:Delivering Beyond Borders',
      content: 'Simplify global shipping with our comprehensive cross-border shipping dashboard & grow your business worldwide.',
    },
    {
      title: 'Seamless Platform for International Shipping',
      content: 'Ready to grow your business across the world? Exporters you can count on us. Our platform simplifies your International Shipping process, enabling you to cater to global customers and thrive on the international stage.',
    },
    {
      title: 'Best Feautre',
      content: 'No Minimum Order Want to ship a single order? We’re here! We only believe in long term relationships, monthly commitments is not our thing.',
    },
  ];

  return (
    <div className="App">
      <h1 className='title'>Acordian Demo</h1>
      <Accordion items={accordionItems} />
    </div>
  );
}

export default App;

