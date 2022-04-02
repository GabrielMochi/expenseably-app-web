import User from "./User";

export default interface Bank {
  id: string;
  name: string;
  user: User;
  createdAt: Date;
}
