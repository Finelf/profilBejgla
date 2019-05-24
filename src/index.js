import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router/immutable'
import configureStore, {history, sagaMiddleware} from './Components/App/redux/configureStore'
import App from './Components/App/App';
import {rootSaga} from './Components/App/rootSagas';

const store = configureStore();

sagaMiddleware.run(rootSaga);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
