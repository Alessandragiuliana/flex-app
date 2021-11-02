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

export interface IMessage{
    imageUrl?:string;
    message:string;
    imageUrlTwo: string;
    messageTwo: string;
}
export class Messager implements IMessage{
    private constructor(
        public imageUrl="",
        public message= "",
        public imageUrlTwo="",
        public messageTwo="",
    ){}
    public static Build(messager: IMessage):Messager{
        return new this(
            messager.imageUrl,
            messager.message,
            messager.imageUrlTwo,
            messager.messageTwo,
        );
    }
}










export interface IMessageTwo{
    message:string;
}