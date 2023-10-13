import axios from 'axios';

axios.defaults.baseURL = 'https://6529741c55b137ddc83edaeb.mockapi.io/';

export async function fetchUsersCards(page) {
  const { data } = await axios.get(`/users?limit=3&page=${page}`);
//   console.log('data', data);
  return data;
}


export async function addToFollow(id, follow, addFollower) {
  console.log('isFollow', follow);

  const { data } = await axios.put(`/users/${id}`, {
    isFollow: follow,
    followers: addFollower,
  });
  console.log('data', data.isFollow);
  return data;
}
// export async function removeContact(id) {
//   const { data } = await axios.delete(
//     `https://64abd7fe9edb4181202ea786.mockapi.io/phonenbook/v1/contacts:${id}`
//   );
//   console.log('data', data);
//   return data;
// }
