// src/utils/auth.js
export const login = async (email, password) => {
  // TODO: Implement login API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ token: 'mock_token', user: { id: 1, name: 'John Doe' } });
    }, 1000);
  });
};

export const register = async (username, email, password) => {
  // TODO: Implement register API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ token: 'mock_token', user: { id: 1, name: username } });
    }, 1000);
  });
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};