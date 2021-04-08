const storage = {
  set: (key, value) => window.localStorage.setItem(key, JSON.stringify(value)),
  get: (key) => JSON.parse(window.localStorage.getItem(key)),
  remove: (key) => window.localStorage.removeItem(key),
  clear: () => window.localStorage.clear()
}

export default storage
