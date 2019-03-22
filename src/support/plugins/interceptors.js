export function AuthorizationInterceptor (router) {
  return (request, next) => {
    const token = localStorage.getItem('authorization')

    if (token) {
      request.headers.set('Authorization', token)
    }

    next(response => {
      if (response.headers.get('Authorization')) {
        let token = response.headers.get('Authorization')
        localStorage.setItem('authorization', token)
      }

      if (response.status === 401) {
        router.replace('/login')
      }
    })
  }
}
