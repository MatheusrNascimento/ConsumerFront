import { Expose } from "class-transformer";

export class Customer {
  @Expose({ name: 'name' })
  Name!: string;
  @Expose({ name: 'email' })
  Email!: string;
  @Expose({ name: 'status' })
  Status!: boolean;
  @Expose({ name: 'id' })
  Identifier!: string;
}
