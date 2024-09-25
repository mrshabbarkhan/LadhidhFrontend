
export function getHeader() {
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  const options = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: user ? `Bearer ${user.token}` : null,
    },
  };

  return options;
}