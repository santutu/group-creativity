export default class PictureConnect {

    id!: number

    title: string = "";

    painting: string = "";


    mode: "drawPainting" | "writeTitle" | "complete" = "drawPainting";

    isWriteTitleMode() {
        return this.mode === "writeTitle";
    }

    isDrawPaintingMode() {
        return this.mode === "drawPainting";
    }

    isCompleteMode() {
        return this.mode === "complete";
    }

    toDrawPaintingMode() {
        this.mode = "drawPainting";
        return this;
    }

    toCompleteMode() {
        this.mode = "complete"
        return this;
    }

    toWriteTitleMode() {
        this.mode = "writeTitle";
        return this;
    }

}