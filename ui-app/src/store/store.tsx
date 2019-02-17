// import NotesStore from "./NotesStore";
// import CounterStore from "./CounterStore";
import ProfileStore from './ProfileStore';
import { IStore } from '../interfaces/store/IStore';

export const Store: IStore = {
    profileStore: new ProfileStore(),
};
