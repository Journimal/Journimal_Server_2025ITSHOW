export class UserDto {
  userId: string;
  userNickname: string;
  userPassword: string;

  constructor(entity: {
    userId: string;
    userNickname: string;
    userPassword: string;
  }) {
    this.userId = entity.userId;
    this.userNickname = entity.userNickname;
    this.userPassword = entity.userPassword;
  }
}
