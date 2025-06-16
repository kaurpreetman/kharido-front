import { useLocation, useNavigate } from 'react-router-dom';

export const useQueryParams = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getParams = () => {
    const params = new URLSearchParams(location.search);
    return Object.fromEntries(params.entries());
  };

  const setParams = (newParams) => {
    const params = new URLSearchParams(location.search);
    Object.entries(newParams).forEach(([key, value]) => {
      if (value === null || value === undefined || value === '') {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });
    navigate({ search: params.toString() }, { replace: true });
  };

  return { getParams, setParams };
};
