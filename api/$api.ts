import type { AspidaClient } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_odq9yo } from './v1/users';
import type { Methods as Methods_1npqkyd } from './v1/users/_userId@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/v1/users';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';

  return {
    v1: {
      users: {
        _userId: (val2: number) => {
          const prefix2 = `${PATH0}/${val2}`;

          return {
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1npqkyd['get']['resBody']>(prefix, prefix2, GET, option).json(),
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1npqkyd['get']['resBody']>(prefix, prefix2, GET, option).json().then(r => r.body),
            put: (option: { body: Methods_1npqkyd['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1npqkyd['put']['resBody']>(prefix, prefix2, PUT, option).json(),
            $put: (option: { body: Methods_1npqkyd['put']['reqBody'], config?: T | undefined }) =>
              fetch<Methods_1npqkyd['put']['resBody']>(prefix, prefix2, PUT, option).json().then(r => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        get: (option?: { query?: Methods_odq9yo['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_odq9yo['get']['resBody']>(prefix, PATH0, GET, option).json(),
        $get: (option?: { query?: Methods_odq9yo['get']['query'] | undefined, config?: T | undefined } | undefined) =>
          fetch<Methods_odq9yo['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
        post: (option: { body: Methods_odq9yo['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_odq9yo['post']['resBody']>(prefix, PATH0, POST, option).json(),
        $post: (option: { body: Methods_odq9yo['post']['reqBody'], config?: T | undefined }) =>
          fetch<Methods_odq9yo['post']['resBody']>(prefix, PATH0, POST, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods_odq9yo['get']['query'] } | undefined) =>
          `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
