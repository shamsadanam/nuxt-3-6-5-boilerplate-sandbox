export const useApiFetch = (request, opts) => {
  const config = useRuntimeConfig();

  opts.headers = opts.headers ? {
    ...opts.headers,
    'Accept': 'application/json',
  } :
    {
      'Accept': 'application/json',
    }

  return useFetch(request, {
    baseURL: config.public.baseURL,
    ...opts,
  });
};