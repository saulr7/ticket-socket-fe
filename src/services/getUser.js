const getUser = () => ({
  agent: localStorage.getItem('agent') || null,
  desk: localStorage.getItem('desk') || null,
});
export const logOutService = () => {
  localStorage.clear();
};

export default getUser;
