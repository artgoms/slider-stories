class SlideStories {
    constructor(id) {
        this.slide = document.querySelector(`[data-slide="${id}"]`)
        this.active = 0
        console.log(this.slide )
    }
}

new SlideStories('slide')