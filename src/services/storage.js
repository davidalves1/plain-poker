export function get(key) {
  return localStorage.getItem(key);
}

export function add(key, value) {
  if (localStorage.getItem(key)) {
    return;
  }

  localStorage.setItem(key, value);
}

export function set(key, value) {
  localStorage.setItem(key, value);
}

export function remove(key) {
  localStorage.removeItem(key);
}
