// used in context file to create state (theme state) from localStorage if exists

import { useState, useEffect } from 'react';

// ex. localStorage key = 'tasks', defaultValue [] / {} OR 'theme', defaultValue 'dark'
export default function useLocalStorageState(key, defaultValue) {
  // 1. make piece of state based of value in localStorage
  const [state, setState] = useState(() => {
    let value;
    try {
      // value = JSON.parse(window.localStorage.getItem(key) || String(defaultValue)); // when defaultValue is array or object
      return JSON.parse(window.localStorage.getItem(key)) || defaultValue; // here defaultValue is already a string
    } catch (e) {
      value = defaultValue;
    }
    return value;
  });

  // 2. use useEffect to update localStorage when this piece of state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

// NOTES (to myself) & use cases:
// in main TodoApp: const [todos, setTodos] = useLocalStorageState("todos", []);
// instead of:      const [todos, setTodos] = useState(initialTodos);
// same as useState(); only diff is we intercepted it, based its value on stored value,
// + added useEffect which is listening for a change
// if we wanted to store something else in localStorage like darkMode, language etc,
// which has nothing to do with todos, we could use:
// useEffect(() => {
//   window.localStorage.setItem('theme', 'dark');
// }, [theme]);
// in themeContext file:
// const [theme, setTheme] = useLocalStorageState('theme', 'dark');
