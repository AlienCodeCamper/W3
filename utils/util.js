export const minifyAddress = (address, middleChars = 4, endChars = 4) => {
  if (!address) return "";

  return `${address.substring(0, middleChars + 2)}...${address.substring(
    address.length - endChars
  )}`;
};
