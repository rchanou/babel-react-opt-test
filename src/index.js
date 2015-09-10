import React from 'react';
import ReactDOM from 'react-dom';


const StatelessComponent = ({ text }) => <div>
  {text}
</div>;


ReactDOM.render(
  <StatelessComponent text='aww yeah' />,
  document.getElementById('root')
);
