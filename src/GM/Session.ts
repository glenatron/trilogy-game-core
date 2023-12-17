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

    public currentScene(): Scene | null {
        let result = null;
        if (0 < this.scenes.length) {
            const scene = this.scenes[this.scenes.length - 1];
            if (scene.open) {
                result = scene;
            }
        }
        return result;
    }

    public closeScene(): void {
        if (0 < this.scenes.length) {
            this.scenes[this.scenes.length - 1].close();
        }
    }

    public addScene(scene: Scene): void {
        if (this.currentScene() != null) {
            throw "Cannot create a scene while a scene is open.";
        }
        scene.open = true;
        this.scenes.push(scene);
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
