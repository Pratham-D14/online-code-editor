import { useQuery } from "@tanstack/react-query";

export function useCompileCode(code: string, url: string, method: string) {
  return useQuery({
    queryKey: ["compile", code], // cache key
    queryFn: async () => {
      const res = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      let result = await res.json();
      return result;
    },
    enabled: false,
    staleTime: 1000 * 60 * 5, // cache for 5 minutes
  });
}
