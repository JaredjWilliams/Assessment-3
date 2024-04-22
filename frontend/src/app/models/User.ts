import Company from "./Company";
import Team from "./Team";
import Profile from "./profile";

export default interface User {
  id: number;
  profile: Profile;
  admin: boolean;
  active: boolean;
  status: string;
  companies: Company[];
  teams: Team[];
}