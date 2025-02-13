const apiUrl = import.meta.env.REACT_APP_API_URL || "http://localhost:27017";

export const login = async (identified: string, password: string) => {
  const response = await fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ identified, password }),
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
};

export const register = async (
  name: string,
  email: string,
  password: string
) => {
  const response = await fetch(`${apiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  if (!response.ok) {
    throw new Error("Error al registrar usuario");
  }

  return response.json();
};
