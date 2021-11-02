export interface IUser{
    name : string;
    surname: string;
    imageUrl?:string;
    message : string;
}

export class User implements IUser{
    private constructor(
        public name = "",
        public surname = "",
        public message = "",
        public imageUrl = "",
    ) { }
    public static Build(user: IUser):User {
        return new this(
            user.name,
            user.surname,
            user.message,
            user.imageUrl
        );
    }
    public get fullName(): string{
        return  `${this.name} ${this.surname}`;
    }
}
