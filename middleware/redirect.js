export default function ({ isHMR, app, store, route, params, error, redirect }) {
  // 熱更新
  if (isHMR) return
  // 路由完整路徑 相等於 /post
  if (route.fullPath === '/post') {
    // 重定向
    return redirect('/post/list')
  }
}
