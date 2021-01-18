export function debouncer(callback, delay) {
  let timeoutId;

  return function (...args) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(args), delay);
  };
}
