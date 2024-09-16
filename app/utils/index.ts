
export const formatLongText = (text: string): string => {
  if (!text) return '';
  if (text.length > 30) {
    return `${text.slice(0, 30)}...`;
  }
  return text;
};

