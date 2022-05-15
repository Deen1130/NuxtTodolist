export default function ({ isHMR, app, store, route, params, error, redirect }) {
  // 熱更新
  if (isHMR) return
  if (route.fullPath === '/post') {
    return redirect('/post/list')
  }
}
