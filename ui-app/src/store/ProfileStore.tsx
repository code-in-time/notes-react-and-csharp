import { observable, computed, action } from 'mobx'
import { observer} from 'mobx-react'
import axios from 'axios'
import { IProfile } from '../interfaces/Profile/IProfile';
import { IProfileStore } from '../interfaces/Profile/IProfileStore';

class ProfileStore implements IProfileStore {
    // The profile
    @observable profile: IProfile = {
        address: { no: 8, place: 'a', road: 'z', street: 'r'},
        notes: [],
        details: { age: 0, cellNumber: 0, email: '', name: ''}
    };
    @observable counter: number = 0;

    // Load profile
    @action.bound
    loadProfile(){
        const url = `${process.env.REACT_APP_API_URL}/api/profile/7`;
        console.log(url);
        // Make a request for a user with a given ID
        return axios.get(url)
        .then((response) => {
          console.log(response);
          this.profile = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }

    // Update the profile profile
    @action.bound
    updateProfile(profileData: IProfile){
      // this.profile = profileData;
      const url = `${process.env.REACT_APP_API_URL}/api/profile`;
      console.log(url);
      // Make a request for a user with a given ID
      return axios.post(url, {profile: profileData})
      .then((response) => {
        console.log(response);
        this.profile = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    }


}
export default ProfileStore;
