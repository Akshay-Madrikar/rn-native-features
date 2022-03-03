import { applyMiddleware, combineReducers, createStore } from 'redux';
import { PlacesNavigator } from './navigation/PlacesNavigator';
import ReduxThunk from 'redux-thunk';

import placesReducer from './store/places.reducer';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  places: placesReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}
