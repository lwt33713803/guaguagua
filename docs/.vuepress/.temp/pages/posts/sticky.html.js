import comp from "/Users/john/WORK/MyCompany/guaguagua/docs/.vuepress/.temp/pages/posts/sticky.html.vue"
const data = JSON.parse("{\"path\":\"/posts/sticky.html\",\"title\":\"上海二中女老师张越被举报出轨自己学生\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2021-01-01T00:00:00.000Z\",\"category\":[\"CategoryC\"],\"tag\":[\"tag E\"],\"sticky\":true,\"excerpt\":\"<p>A sticky article demo.</p>\"},\"headers\":[{\"level\":2,\"title\":\"多媒体资源\",\"slug\":\"多媒体资源\",\"link\":\"#多媒体资源\",\"children\":[{\"level\":3,\"title\":\"具体内容\",\"slug\":\"具体内容\",\"link\":\"#具体内容\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"posts/sticky.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
