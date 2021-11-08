export interface IUser{
    name : string;
    surname: string;
    imageUrl?:string;
    message : string;
    time: string;
    iconMessage: boolean;
    online: boolean;
    bodyMessages?: IMessage[]; 
}

export interface IMessage{
    id: number;
    times:string;
    body: string;
    me: boolean;
}

export class User implements IUser{
    private constructor(
        public name = "",
        public surname = "",
        public message = "",
        public imageUrl = "",
        public time ="",
        public iconMessage = false,
        public online = false,
        public bodyMessages: IMessage[] = [],
    ) { }
    public static Build(user: IUser):User {
        return new this(
            user.name,
            user.surname,
            user.message,
            user.imageUrl,
            user.time,
            user.iconMessage,
            user.online,
            user.bodyMessages,
        );
    }
    public get fullName(): string{
        return  `${this.name} ${this.surname}`;
    }
}













