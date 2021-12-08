const variableArr = [
    [
        "../icon/variable/date.svg", "ink-a-js-up"
    ],
    [
        "../icon/variable/logo.svg", "ink-a-js-img"
    ],
    [
        "../icon/variable/whale.svg", "ink-b-js-svg"
    ],
    [
        "../icon/template/ticket.svg", "ink-a-js-ticket"
    ],
    [
        "../icon/template/door.svg", "ink-c-js-svg"
    ],
    [
        "../icon/template/face.svg", "ink-d-js-svg"
    ],
];

const socialArr = [
    [
        "../icon/brands/tiktok-brands.svg", ".ink-c-js-container-social-link:nth-of-type(1) #icon"
    ],
    [
        "../icon/brands/facebook-f-brands.svg", ".ink-c-js-container-social-link:nth-of-type(2) #icon"
    ],
    [
        "../icon/brands/twitter-brands.svg", ".ink-c-js-container-social-link:nth-of-type(3) #icon"
    ],
    [
        "../icon/brands/instagram-brands.svg", ".ink-c-js-container-social-link:nth-of-type(4) #icon"
    ],

    [
        "../icon/brands/spotify-brands.svg", ".ink-b-js-sell-icon a:nth-of-type(1) #icon"
    ],
    [
        "../icon/brands/soundcloud-brands.svg", ".ink-b-js-sell-icon a:nth-of-type(2) #icon"
    ],
    [
        "../icon/brands/youtube-brands.svg", ".ink-b-js-sell-icon a:nth-of-type(3) #icon"
    ]
]

const epArr = [
    [
        "../icon/logo/x.svg", ".ink-e-js-carousel-container-item:nth-of-type(1) #icon"
    ],
    [
        "../icon/logo/modern.svg", ".ink-e-js-carousel-container-item:nth-of-type(2) #icon"
    ],
    [
        "../icon/logo/square.svg", ".ink-e-js-carousel-container-item:nth-of-type(3) #icon"
    ],
    [
        "../icon/logo/modern.svg", ".ink-e-js-carousel-container-item:nth-of-type(4) #icon"
    ]
]

document.addEventListener("DOMContentLoaded", function () {

    variableArr.forEach(variable => {
        let url = variable[0]
        let trigger = variable[1]

        fetch(url)
            .then(response => response.text())
            .then(data => {
                let element = document.getElementById(trigger);
                element.innerHTML = `${data}`;
            })
    })

    socialArr.forEach(social => {
        let url = social[0]
        let trigger = social[1]
        fetch(url)
            .then(response => response.text())
            .then(data => {
                let element = document.querySelector(trigger);
                element.innerHTML = `${data}`;
            })
    })

    epArr.forEach(ep => {
        let url = ep[0]
        let trigger = ep[1]
        fetch(url)
            .then(response => response.text())
            .then(data => {
                let element = document.querySelector(trigger);
                element.innerHTML = `${data}`;
            })
    })

});