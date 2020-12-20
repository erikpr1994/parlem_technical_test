const BASE_URL = "http://localhost:4000/";

const fetchRequest = (path, options) => {
  return fetch(`${BASE_URL}${path}`, options)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((err) => {
      console.log(err); // eslint-disable-line no-console
    });
};

export const getCustomer = async (id: number) => {
  const path = `user/${id}`;
  return await fetchRequest(path, {});
};

export const getAllCustomers = async () => {
  const path = `user/all`;
  return await fetchRequest(path, {});
};

export const getCustomerProducts = async (userId: number) => {
  const path = `product/${userId}`;
  return await fetchRequest(path, {});
};
