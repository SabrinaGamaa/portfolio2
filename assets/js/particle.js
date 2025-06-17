particlesJS('particles-js', {
    particles: {
        number: {
            value: 140,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: ['#00FCFF', '#6A9EFC', '#6ACCFC', '#29FFBA'],
        },
        shape: {
            type: 'star',
            stroke: {
                width: 0,
                color: '#fff',
            },
            polygon: {
                nb_sides: 5,
            },
        },

        opacity: {
            value: 1,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: false,
                speed: 1,
                size_min: 3,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#000fff',
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 5,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: 'window',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse',
            },
            onclick: {
                enable: true,
                mode: 'push',
            },
        },
        modes: {
            repulse: {
                distance: 110,
                duration: 0.3,
            },
            push: {
                particles_nb: 10,
            },
        },
    },
    retina_detect: true,
});
