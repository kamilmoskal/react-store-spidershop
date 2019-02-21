import { render } from 'react-dom';
import React from 'react';
import App from './App';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

render(<Provider store={store}><App /></Provider>, document.getElementById('root'));