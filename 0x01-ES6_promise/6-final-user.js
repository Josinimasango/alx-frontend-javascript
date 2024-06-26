import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpPromise, uploadPromise])
    .then((results) => {
      const responseArray = [];
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          responseArray.push({ status: result.status, value: result.value });
        } else {
          responseArray.push({
            status: result.status,
            value: `Error: ${result.reason.message}`,
          });
        }
      });
      return responseArray;
    });
}
