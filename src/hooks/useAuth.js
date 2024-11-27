import { useQuery } from "@tanstack/react-query";
import authService from "@/services/authService";

const useAuth = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["usuario"],
    queryFn: authService.getUsuario,
    retry: 1,
    refetchOnWindowFocus: false,
  });

  return { data, isError, isLoading };
};

export default useAuth;
