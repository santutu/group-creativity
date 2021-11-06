import PictureConnect from "@/models/PictureConnect";

export default class PictureConnectContainer {

    id!: number
    title: string = ""

    pictureConnects: PictureConnect[] = [new PictureConnect()];

    public last() {
        return this.pictureConnects[this.pictureConnects.length - 1];
    }

    public previous2(): PictureConnect | null {
        if (!this.hasPrevious2()) {
            return null;
        }
        return this.pictureConnects[this.pictureConnects.length - 2];
    }

    public hasPrevious2() {
        return this.pictureConnects.length - 2 >= 0
    }


}