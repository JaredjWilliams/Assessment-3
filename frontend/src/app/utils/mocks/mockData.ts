import Profile from "../../models/Profile";
import UserInfo from "../../models/UserInfo";
import Team from "../../models/Team";
import Company from "../../models/Company";
import User from "../../models/User";
import Credentials from "../../models/Credentials";

export const mockProfile: Profile = {
  email: "Testing@gmail.com",
  firstName: "Larry",
  lastName: "The Lobster",
  phone: "900909090909"
}

export const mockUserInfo: UserInfo = {
  admin: true,
  active: true,
  id: 1,
  profile: mockProfile,
  status: "Active"
}

export const mockTeams: Team = {
  description: "Team 1 Description",
  id: 1,
  name: "Team 1",
  teammates: [mockUserInfo]
}

export const mockUser: User = {
  id: 0,
  profile: mockProfile,
  admin: false,
  active: false,
  status: "",
  companies: [],
  teams: [mockTeams]
}

export const mockCompany : Company = {
  description: "Company 1 Description",
  id: 1,
  name: "Company 1",
  teams: [mockTeams],
  employees: [mockUser]
}

export const mockCredentials : Credentials = {
  "username": "cousingreg",
  "password": "mosteligiblebachelor"
}
