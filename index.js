import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import { Provider as FelaProvider } from 'react-fela' 
import { createRenderer } from 'fela'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import fillColor from './Reducers/fillingReducer'
import filterColor from './Reducers/filterReducer'
import { combineReducers } from 'redux'


const reducer = combineReducers({filterColor, fillColor})

const store=createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const renderer = createRenderer()
const mountNode = document.getElementById('stylesheet')

ReactDOM.render(
     <FelaProvider renderer={renderer} mountNode={mountNode}>
      <Provider store={store}>
        <App />
       </Provider>
      </FelaProvider>,
  document.getElementById('application-shell')
);
