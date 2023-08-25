import { APIUser } from "discord-api-types/v10";
import { state, useSnapshot } from "reactish-state";
import useSWR from "swr";

export const UserState = state<LandyardUser | null, unknown>(null);

export const useUserSnapshot = () => {
  return useSnapshot(UserState);
};

export const useUser = () => {
  const user = useUserSnapshot();
  useSWR(
    "https://api.lanyard.rest/v1/users/499021389572079620",
    (input: RequestInfo) => {
      fetch(input).then(async (res) => {
        const result = await res.json();
        UserState.set(result);
      });
    },
  );

  return user;
};

interface LandyardUser {
  data: {
    discord_user: APIUser;
  };
}
