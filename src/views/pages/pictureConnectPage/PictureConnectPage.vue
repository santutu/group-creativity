<template>
    <div>
        <h4>
            PictureConnectPage
        </h4>

        <template v-if="loading">
            <picture-connect-comp :picture-connect-container="pictureConnectContainer"></picture-connect-comp>

        </template>
    </div>
</template>


<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import PictureConnectContainer from "@/models/PictureConnectContainer";
import PictureConnect from "@/models/PictureConnect";
import PictureConnectComp from "@/views/pages/pictureConnectPage/PictureConnectComp.vue";

@Component({
               components: {PictureConnectComp}
           })
export default class PictureConnectPage extends Vue {

    pictureConnectContainer?: PictureConnectContainer;
    loading = false;

    public mounted() {
        this.pictureConnectContainer = new PictureConnectContainer();
        this.loading = true;
    }


}
</script>
