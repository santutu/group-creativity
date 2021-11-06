<template>
    <div>

        <div class="d-flex flex-row">
            <input type="text" v-model="story.text">

            <div style="width: 200px; height: 300px;">
                <img
                    style="width: 200px; height: 300px;"
                    src="https://i.picsum.photos/id/717/200/300.jpg?hmac=OJYQhMLNcYlN5qz8IR345SJ7t6A0vyHzT_RdMxO4dSc"
                    alt="">
            </div>

            <button>draw</button>
            <button>record</button>
            <button>play voice</button>

            <button @click="add">add</button>
            <button @click="remove">remove</button>

            {{ depth }}
            children

            <div class="d-flex flex-column">
                <StoryComp :parent-story="story" :index="idx" :depth="depth+1" :story="_story"
                           v-for="(_story,idx) in story.stories" :key="depth+'storyComp'+idx"/>

            </div>

        </div>
    </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {Story} from "@/models/Story";
import StoryBoard from "@/models/StoryBoard";

@Component
export default class StoryComp extends Vue {

    @Prop({
              required: true,
              type: Story
          })
    story!: Story;

    @Prop({
              required: true,
              type: Object
          })
    parentStory!: Story | StoryBoard;

    @Prop({
              required: true,
              type: Number
          })
    index!: number;

    @Prop({
              required: true,
              type: Number
          })
    depth!: number


    add() {
        this.story.stories.push(new Story());
    }

    remove() {
        this.parentStory.stories.splice(this.index, 1);
    }
}
</script>
