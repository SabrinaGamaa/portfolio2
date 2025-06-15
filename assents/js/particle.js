particlesJS('particles-js', {
    particles: {
        number: {
            value: 120,
            density: { enable: true, value_area: 800 }
        },
        color: { value: [ '#00FCFF', '#6A9EFC', '#6ACCFC', '#29FFBA' ] },
        shape: {
            type: 'star',
            stroke: { width: 2, color: '#fafafa' },
            polygon: { nb_sides: 5 },
        },
        opacity: { value: 0.5 },
        size: { value: 4, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#fff',
            opacity: 0.3,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        },
        modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});
