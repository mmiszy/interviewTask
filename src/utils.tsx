export const errorToString = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
};

export const getPokemonIdFromUrl = (url: string): number => {
  const matches = url.match(/\/(\d+)\/$/);
  if (!matches) {
    return 0;
  }
  return Number(matches[1]);
};
