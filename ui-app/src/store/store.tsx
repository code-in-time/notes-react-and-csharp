import ProfileStore from './ProfileStore';
import { IStore } from '../interfaces/store/IStore';

export const store: IStore = {
    profileStore: new ProfileStore(),
};