const USERS_URL = "https://api.github.com/users/";

export const getGithubUser = async (userName) => {
  const data = await fetch(`${USERS_URL}${userName}`).then((response) =>
    response.json()
  );
  return data;
};
