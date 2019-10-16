import { fireDataRef } from '../config/fire';


export const getUserData = uid => {
  let userRef = fireDataRef.collection('users').doc(uid);
  return userRef.get().then(x => {
    return x.data();
  });
}

export const saveNickName = (uid, nickName) => {
  let userRef = fireDataRef.collection('users').doc(uid);
  return userRef.set({nickName : nickName}, { merge: true });
}