export const formatCreditCard = (value: string) => {
  const v = value
    .replace(/\s+/g, "")
    .replace(/[^0-9]/gi, "")
    .substr(0, 16);
  const parts = [];

  for (let i = 0; i < v.length; i += 4) {
    parts.push(v.substr(i, 4));
  }

  return parts.length > 1 ? parts.join("  -  ") : value;
};
export const removeDash = (str: string) => {
    return str.replace(/-/g, '').replace(/\s+/g, "")

  }
