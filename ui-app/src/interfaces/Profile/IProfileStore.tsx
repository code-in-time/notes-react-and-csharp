import { IProfile } from './IProfile';


export interface IProfileStore {
    profile: IProfile,
    counter: number,
    loadProfile: () => void
  }