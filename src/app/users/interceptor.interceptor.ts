import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';

export const interceptorInterceptor: HttpInterceptorFn = (
  request: HttpRequest<any>,
  next
) => {
  const req = request.clone({
    headers: request.headers
      .set('X-DEGUB', 'MAGDA FII TARE')
      .set('server', 'MAGDA BOSS'),
  });
  console.log('Request made ' + req);

  return next(req).pipe();
};
