class SlideStories {
  constructor(id) {
    this.slide = document.querySelector(`[data-slide="${id}"]`)
    this.active = 0
    console.log(this.slide)
    this.activeSlide(2)
  }

  activeSlide(index) {
    this.active = index
    this.items = this.slide.querySelectorAll('.slide-items > *')
    this.items[index].classList.add('active')
    console.log()
  }
}

new SlideStories('slide')
