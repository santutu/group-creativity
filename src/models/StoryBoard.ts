import {Story} from "@/models/Story";

export default class StoryBoard {

    subject: string = "what is this story subject?";
    description: string = "story description";

    stories: Story[] = []


    voiceMaximumDurationSecond: number = 10
    maximumStoriesChildrenCount: number = 3
    maximumTextCount = 100


    constructor(stories: Story[]) {
        this.stories = stories;
    }

}