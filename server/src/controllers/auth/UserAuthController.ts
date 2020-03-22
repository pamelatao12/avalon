import * as admin from 'firebase-admin'

const auth = admin.auth()

export const authenticateUser = (idToken: string) => admin.auth().verifyIdToken(idToken)
  .then(decodedToken => {
    let uid = decodedToken.uid
    // ...
    return uid
  }).catch(err => {
    console.log('There was an issue with the request', err)
  })

export const signUp = (email: string, pw: string) => {
  auth.createUser({
    email: email,
    password: pw
  })
  .then(userRecord => {
    console.log('Successfully created new user:', userRecord.uid)
  })
  .catch(err => {
      console.log('Error creating new user:', err)
  })
}