import { observable, computed, action } from 'mobx'
import { observer} from 'mobx-react'
import axios from 'axios'
import { IProfile } from '../interfaces/Profile/IProfile';

class ProfileStore {
    // The profile
    @observable profile: IProfile = {
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
        axios.get(url, {headers: {'Content-Type': 'application/json'}})
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }


}
export default ProfileStore;
