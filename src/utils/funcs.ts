export const getKeyByValue = (obj: any, val: string | number) => {
  return Object.keys(obj).find((key) => obj[key] === val);
};
