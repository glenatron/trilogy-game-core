import { Scene, IScene } from './Scene';

export interface ISession {
    date: Date;

    scenes: Array<IScene>;

    GMNotes: string;
}

export class Session {
    public date: Date;

    public scenes = new Array<Scene>();

    public GMNotes = '';

    constructor(session: ISession | null) {
        if (session) {
            this.date = session.date;
            this.GMNotes = session.GMNotes;
            for (let sc of session.scenes) {
                this.scenes.push(new Scene(sc));
            }
        } else {
            this.date = new Date();
        }
    }

    public toStore(): ISession {
        const result = {
            date: this.date,
            GMNotes: this.GMNotes,
            scenes: new Array<IScene>()
        };
        for (let sc of this.scenes) {
            result.scenes.push(sc);
        }
        return result;
    }

}
