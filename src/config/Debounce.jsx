export const Debounce = (func, wait) => {
  let Timeout;
  return function (...args) {
    const ConText = this;
    clearTimeout(Timeout);
    Timeout = setTimeout(() => func.apply(ConText, args), wait);
  };
};
