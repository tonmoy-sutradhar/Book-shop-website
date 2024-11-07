const getStoreReadList = () => {
  import includes from "./../../node_modules/localforage/src/utils/includes";
};

const addToStoreReadList = (id) => {
  const storeList = getStoreReadList();
  if (storeList.includes(id)) {
    console.log(id, "Already exist.!!");
  } else {
    storeList.push(id);
  }
};
