import emoji from 'react-easy-emoji';
import splashAnimation from './assets/lottie/splashAnimation';

// Tela de Splash (Animação Inicial)
const splashScreen = {
    enabled: true, // Ativa ou desativa a splash screen
    animation: splashAnimation,
    duration: 2000, // Duração da splash em milissegundos
};

// // Seção de Saudação e Resumo
// const illustration = {
//   animated: true // Coloque false se quiser uma imagem estática
// };

// Seção de Habilidades
const skillsSection = {
    softwareSkills: [
        { skillName: 'HTML5', fontAwesomeClassname: 'fab fa-html5' },
        { skillName: 'CSS3', fontAwesomeClassname: 'fab fa-css3-alt' },
        { skillName: 'JavaScript', fontAwesomeClassname: 'fab fa-js' },
        { skillName: 'React', fontAwesomeClassname: 'fab fa-react' },
        { skillName: 'Node.js', fontAwesomeClassname: 'fab fa-node' },
        { skillName: 'Python', fontAwesomeClassname: 'fab fa-python' },
        { skillName: 'Java', fontAwesomeClassname: 'fab fa-java' },
        { skillName: 'Docker', fontAwesomeClassname: 'fab fa-docker' },
        { skillName: 'SQL', fontAwesomeClassname: 'fas fa-database' },
        { skillName: 'Firebase', fontAwesomeClassname: 'fas fa-fire' },
        { skillName: 'AWS', fontAwesomeClassname: 'fab fa-aws' },
    ],
    display: true,
};

// Seção de Educação
const educationInfo = {
    display: true,
    schools: [
        {
            schoolName: 'Unisociesc',
            logo: require('./assets/images/unisociescLogo.png'),
            subHeader: 'Análise e Desenvolvimento de Sistemas',
            duration: '2025 - 2027',
            desc: 'Foco em desenvolvimento de sistemas, banco de dados e estruturas de software.',
            descBullets: [
                'Projetos práticos de desenvolvimento web e back-end',
                'Participação em hackathons e projetos acadêmicos',
            ],
        },
    ],
};

// Certificações e Conquistas
const achievementSection = {
    title: emoji('Certificações 🏆 '),
    subtitle: 'Certificados, conquistas e prêmios relevantes.',

    achievementsCards: [
        {
            title: 'Python Impressionador',
            subtitle:
                'Certificação de desenvolvimento em Python pela Hashtag Treinamentos.',
            image: require('./assets/images/pythonLogo.webp'),
            imageAlt: 'Python Logo',
            footerLink: [{ name: 'Certificado', url: '#' }],
        },
        {
            title: 'Java Completo',
            subtitle: 'Curso completo de Java com projetos práticos na Udemy.',
            image: require('./assets/images/javaLogo.webp'),
            imageAlt: 'Java Logo',
            footerLink: [{ name: 'Certificado', url: '#' }],
        },
    ],
    display: true,
};

// Currículo
const resumeSection = {
    title: 'Currículo',
    subtitle: 'Baixe meu currículo para saber mais sobre minha trajetória.',
    display: true,
};

// Status de Contratação
const isHireable = true; // true = disponível para trabalho, false = não disponível

export {
    greeting,
    splashScreen,
    skillsSection,
    educationInfo,
    techStack,
    bigProjects,
    achievementSection,
    contactInfo,
    isHireable,
    resumeSection,
};
