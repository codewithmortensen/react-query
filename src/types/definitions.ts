export interface User {
  id: number;
  name: string;
}

export interface UserContext {
  previousUsers: User[];
}
