import {
  createStore, applyMiddleware, AnyAction, Dispatch, Middleware
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares: Middleware<{}, any, Dispatch<AnyAction>>[] = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);
// const configureStore = () => {
//     const store = compose(
//         applyMiddleware(sagaMiddleware, logger),
//         window.devToolsExtension && window.devToolsExtension(),
//     )(createStore)(reducers);
//     sagaMiddleware.run(rootSaga);
//     return store;
// }

export default store;
