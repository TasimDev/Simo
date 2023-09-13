const text = document.querySelector('.text-rotate p');

text.innerHTML = text.innerText.split("").map((char, i) =>
    `<span style = "transform:rotate(${i * 17.1}deg)">${char}</span>`
).join(" ");

window.addEventListener('load', () => {
    gsap.to('.loader', {
        y: '100%',
        duration: 1,
        ease: 'sine',
        delay: 2,

    })
    gsap.to('.loader .title', {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: 'power1',
    })
})


