<template>
    <div>

        <h1>{{ storyBoard.subject }}</h1>

        <p>{{ storyBoard.description }}</p>



        <StoryComp :parent-story="storyBoard" :index="idx"  :story="story" :depth="0" v-for="(story,idx) in storyBoard.stories" :key="'storyComp'+idx"/>


        <button class="btn btn-primary" @click="test">test</button>

    </div>

</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import StoryBoard from "@/models/StoryBoard";
import StoryComp from "@/views/components/StoryComp.vue";
import {Story} from "@/models/Story"; // @ is an alias to /src

@Component({
               components: {
                   StoryComp,
               },
           })
export default class StoryBoardPage extends Vue {

    storyBoard = new StoryBoard([new Story()]);

    test() {
        console.log(this.storyBoard);
    }

}
</script>
