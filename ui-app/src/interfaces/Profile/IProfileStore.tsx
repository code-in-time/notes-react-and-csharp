import { iProfile } from '../../interfaces/Profile/iProfile';

export interface IProfileStore {
    profile: iProfile,
    counter: number,
    loadProfile?: () => void
  }