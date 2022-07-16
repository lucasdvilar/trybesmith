export interface IUser {
  username: string,
  password: string,
}

export interface IUserWithClasseAndLevel extends IUser {
  classe: string,
  level: number,
}
