export interface IUser{
    id : number;
    name : string;
    surname: string;
    imageUrl?:string;
    message : string;
    time: string;
    iconMessage: boolean;
    online: boolean;
    
}

export interface IMessage{
    id: number;
    times:string;
    body: string;
    me: boolean;
}

export class Message implements IMessage{
    private constructor(
        public id = 0,
        public times="",
        public body="",
        public me=false, 
    ){}
    public static Build(message: IMessage):Message{
        return new this(
        message.id,
        message.times,
        message.body,
        message.me
        
   )}
}


export class User implements IUser{
    private constructor(
        public id= 0,
        public name = "",
        public surname = "",
        public message = "",
        public imageUrl = "",
        public time ="",
        public iconMessage = false,
        public online = false,
        
    ) { }
    public static Build(user: IUser):User {
        return new this(
            user.id,
            user.name,
            user.surname,
            user.message,
            user.imageUrl,
            user.time,
            user.iconMessage,
            user.online,
           
        );
    }
    public get fullName(): string{
        return  `${this.name} ${this.surname}`;
    }
}













