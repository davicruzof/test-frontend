import { AxiosError } from "axios";
import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (_, error) => {
        const err = error as AxiosError;
        const status = err?.response?.status;
        if (!status || [401, 403, 404].includes(status)) {
          return false;
        }
        return true;
      },
    },
  },
});
