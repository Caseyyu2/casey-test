import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import { Provider as FelaProvider } from 'react-fela' 
import { createRenderer } from 'fela'

const renderer = createRenderer()
const mountNode = document.getElementById('stylesheet')

ReactDOM.render(
     <FelaProvider renderer={renderer} mountNode={mountNode}>
      <App />
      </FelaProvider>,
  document.getElementById('application-shell')
);
