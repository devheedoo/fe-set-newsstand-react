import categoryList from './categoryListData';
import pressList from './pressListData';

export const loadCategoryList() {
  return categoryList;
}
export const loadPressList() {
  return pressList;
}
export const loadMyPressList() {}
export const loadNewsList(pressId) {
  return pressList.filter(press => press.id === pressId);
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
