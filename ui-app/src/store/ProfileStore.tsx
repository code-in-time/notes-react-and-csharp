import { observable, computed, action } from 'mobx'
import { observer} from 'mobx-react'
import axios from 'axios'
import { IProfile } from '../interfaces/Profile/IProfile';
import { IProfileStore } from '../interfaces/Profile/IProfileStore';

class ProfileStore implements IProfileStore {
    // The profile
    @observable Profile: IProfile = {
        Address: { No: 8, Place: 'a', Road: 'z', Street: 'r'},
        Notes: [],
        Details: { Age: 0, CellNumber: 0, Email: '', Name: ''}
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
          this.Profile = response.data;
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
      return axios.post(url, {Profile: profileData})
      .then((response) => {
        console.log(response);
        this.Profile = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    }


}
export default ProfileStore;
