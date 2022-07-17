export interface IUser {
  id?: number,
  username: string,
  password: string,
}

export interface IUserWithClasseAndLevel extends IUser {
  classe: string,
  level: number,
}
