const getStoreReadList = () => {
  // read-list
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    const storeList = JSON.parse(storedListStr);
    return storeList;
  } else {
    return [];
  }
};

const addToStoreReadList = (id) => {
  const storeList = getStoreReadList();
  if (storeList.includes(id)) {
    console.log(id, "Already exist.!!");
  } else {
    storeList.push(id);
    const storedListStr = JSON.stringify(storeList);
    localStorage.setItem("read-list", storedListStr);
  }
};

const getStoredWishList = () => {
  const storedWishListstr = localStorage.getItem("wish-list");
  if (storedWishListstr) {
    const storedWishList = JSON.parse(storedWishListstr);
    return storedWishList;
  } else {
    return [];
  }
};

const addToStoredWishList = (id) => {
  const storedWishList = getStoreReadList();

  if (storedWishList.includes(id)) {
    console.log(id, "already ace list e bujcos");
  } else {
    storedWishList.push(id);
    const storedWishListstr = JSON.stringify(storedWishList);
    localStorage.setItem("wish-list", storedWishListstr);
  }
};
export {
  addToStoreReadList,
  getStoreReadList,
  addToStoredWishList,
  getStoredWishList,
};
