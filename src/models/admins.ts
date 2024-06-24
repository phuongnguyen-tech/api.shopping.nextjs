import { BaseEntity } from "./BaseEntity";

export interface Admins extends BaseEntity {
  username: string;
  password: string;
  fullName?: string;
  email?: string;
}
