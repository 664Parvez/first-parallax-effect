const star = document.getElementById("star")
const moon = document.getElementById("moon")
const parashut = document.getElementById("parashut")
const mount_back = document.getElementById("mount_back")
const mount_front = document.getElementById("mount_front")
const textHeading = document.getElementById("textHeading")
const cloud1 = document.getElementById("cloud1")
const cloud2 = document.getElementById("cloud2")
const cloud3 = document.getElementById("cloud3")

window.addEventListener("scroll", () => {
    let value = window.scrollY
    textHeading.style.right = value + "px"
    star.style.left = value + "px"
    parashut.style.top = - value + "px"
    cloud1.style.right = value + "px"
    cloud1.style.transition = "1s"
    cloud2.style.right = value + "px"
    cloud2.style.transition = "1s"
    cloud3.style.right = value + "px"
    cloud3.style.transition = "1s"

    if (window.scrollY <= 300) {
        moon.style.top = value + "px"
    }
})