export const getKeyByValue = (obj: any, val: string | number | null) => {
  // console.log(val);
  // console.log(Object.keys(obj).find((key) => obj[key] === val));
  return Object.keys(obj).find((key) => obj[key] === val);
};
