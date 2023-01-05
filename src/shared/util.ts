export const fakeRequest = (wait = 1000) =>
  new Promise(res => {
    setTimeout(() => res(true), wait);
  });
