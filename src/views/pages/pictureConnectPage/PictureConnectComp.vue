<template>
    <div>


        <template v-if="lastPictureConnect.mode === 'drawPainting'">
            <div>
                {{ lastPictureConnect.title }}
            </div>
            drawing:
            <div style="width: 200px; height: 300px;">
                <img
                    style="width: 200px; height: 300px;"
                    src="https://i.picsum.photos/id/717/200/300.jpg?hmac=OJYQhMLNcYlN5qz8IR345SJ7t6A0vyHzT_RdMxO4dSc"
                    alt="">
            </div>

            <button @click="confirm">confirm</button>
        </template>
        <template v-else-if="lastPictureConnect.mode === 'writeTitle' ">

            <div>
                title : <input type="text" v-model="lastPictureConnect.title">
            </div>
            <button @click="confirm">confirm</button>


        </template>

        {{ lastPictureConnect.mode }}
    </div>
</template>


<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import PictureConnectContainer from "@/models/PictureConnectContainer";
import PictureConnect from "@/models/PictureConnect";

@Component
export default class PictureConnectComp extends Vue {

    @Prop({
              required: true,
              type: PictureConnectContainer
          })
    pictureConnectContainer!: PictureConnectContainer

    lastPictureConnect?: PictureConnect = this.pictureConnectContainer.last();
    previousPictureConnect?: PictureConnect | null = this.pictureConnectContainer.previous2()


    confirm() {

        if (this.lastPictureConnect?.isDrawPaintingMode()) {
            this.lastPictureConnect?.toWriteTitleMode();
        } else if (this.lastPictureConnect?.isWriteTitleMode()) {
            this.lastPictureConnect?.toCompleteMode()
            //todo goto picture connectPage
        }

    }

}
</script>
