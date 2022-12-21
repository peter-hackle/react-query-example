import { useMutation, UseMutationOptions } from "@tanstack/react-query";

export default function usePostUpdateMutation(
  options: Omit<UseMutationOptions<unknown, unknown, number>, "mutationFn"> = {}
) {
  return useMutation(async (id: number) => {
    window.alert(`update id : ${id}`);
  }, options);
}
