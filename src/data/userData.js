import { fireDataRef } from '../config/fire';


export const getUserData = uid => {
  let userRef = fireDataRef.collection('users').doc(uid);
  userRef.get().then(x => {
    return x.data().nickName;
  });
}