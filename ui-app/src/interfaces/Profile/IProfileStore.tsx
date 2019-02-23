import { IProfile } from './IProfile';


export interface IProfileStore {
    profile: IProfile,
    counter: number,
    loadProfile: () => void,
    updateProfile: (profileData: IProfile) => void,
  }