export const types = {
  PUSH_ROUTE: 'PUSH_ROUTE'
};

export const pushRoute = (payload) => ({
    type: types.PUSH_ROUTE,
    payload
});