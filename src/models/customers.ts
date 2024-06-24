import { BaseEntity } from "./BaseEntity";

export interface Customer extends BaseEntity {
  firstName?: string;
  lastName?: string;
  email: string;
  phone: string;
  address?: string;
  password: string;
}
