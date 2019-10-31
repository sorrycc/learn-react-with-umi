
export const dva = {
  config: {
    namespacePrefixWarning: false,
    onError(err: ErrorEvent) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};
