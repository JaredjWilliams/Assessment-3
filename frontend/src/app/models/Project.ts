import Team from "./Team";

export default interface User {
  id: number;
  name: string;
  description: string;
  active: boolean;
  team: Team;
}