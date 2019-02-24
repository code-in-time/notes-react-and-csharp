import { IProfile } from './IProfile';


export interface IProfileStore {
    Profile: IProfile,
    // Counter: number,
    loadProfile: () => void,
    updateProfile: (profileData: IProfile) => void,
  }