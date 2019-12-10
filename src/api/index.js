import categoryList from './categoryListData';
import pressListData from './pressListData';

export const loadCategoryList() {
  return categoryList;
}
export const loadPressList() {
  return pressListData;
}
export const loadMyPressList() {}
export const loadNewsList(pressId) {
  return pressListData.filter(press => press.id === pressId);
}
// export const loadNewsDetail(newsId) {}
export const subscribe(pressId) {
  // TODO(Choco)
}
export const unsubscribe(pressId) {
  // TODO(Choco)
}

// const setMode(all | my) {}
// const setViewType(card | list) {}
// const setPress(pressId) / setPressListPage(pageNumber) {}
