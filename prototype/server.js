export const data = (context, callback) => {
  // const { name } = context.params;
  // const { visible } = context.params;

  // we should explicitly return the params here instead of the whole context params.
  return callback(null, context.params);
};
