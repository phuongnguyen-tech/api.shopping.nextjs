import { BaseEntity } from "./BaseEntity";

export interface Admin extends BaseEntity {
  username: string;
  password: string;
  fullName?: string;
  email?: string;
}
