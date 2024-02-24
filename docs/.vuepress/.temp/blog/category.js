export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"History":{"path":"/category/history/","indexes":[0,1]},"CategoryA":{"path":"/category/categorya/","indexes":[10,11,12,2,3,7,4,6,5,8,9,13]},"CategoryC":{"path":"/category/categoryc/","indexes":[14,15]},"CategoryB":{"path":"/category/categoryb/","indexes":[10,11,12,2,3,7,4,6,5,8]}}}},"tag":{"/":{"path":"/tag/","map":{"WWI":{"path":"/tag/wwi/","indexes":[1]},"WWII":{"path":"/tag/wwii/","indexes":[0]},"tag A":{"path":"/tag/tag-a/","indexes":[7,6,5,8,9,13]},"tag B":{"path":"/tag/tag-b/","indexes":[7,6,5,8,9,13]},"tag E":{"path":"/tag/tag-e/","indexes":[14,15]},"tag C":{"path":"/tag/tag-c/","indexes":[10,11,12,2,3,4]},"tag D":{"path":"/tag/tag-d/","indexes":[10,11,12,2,3,4]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

