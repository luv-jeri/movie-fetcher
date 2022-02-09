const getData = async () => {
  const { data } = await axios.get(
    'https://reqres.in/api/users?page=2'
  );
  data.data.forEach((el) => {
    // append data to the DOM
  });
};
getData();
