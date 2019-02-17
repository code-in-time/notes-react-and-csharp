import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css';
import App from "./componenets/App";
import { Provider } from 'mobx-react';
import {IProsStore} from './interfaces/store/IPropsStore'

import * as serviceWorker from './serviceWorker';


// import NotesStore from "./NotesStore";
// import CounterStore from "./CounterStore";
import ProfileStore from './store/ProfileStore';
import { IStore } from './interfaces/store/IStore';

const Store: IStore = {
    profileStore: new ProfileStore(),
};



// For easier debugging
// window._____APP_STATE_____ = Store;


ReactDOM.render(
    <Provider {...Store}>
        <App />
    </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
