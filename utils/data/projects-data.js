import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Cafe Coffee day ',
        description: " I have developed a sophisticated cafe coffee app using React JS and React Reveal, designed to deliver an exceptional user experience while maintaining robust functionality and scalability.",
        tools: ['ReactJS', 'CSS', 'React-Reveal',"javascript"],
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Breast Cancer Detection Using Modified Alexnet ',
        description: 'In this project, I have developed a state-of-the-art breast cancer detection system utilizing a modified AlexNet architecture, specifically designed to analyze mammogram images. This system aims to assist radiologists and healthcare professionals in the early detection and diagnosis of breast cancer, thereby improving patient outcomes.',
        tools: ['python', 'pandas', "OpenCV", "TensorFlow"],
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'MERN GPT',
        description: 'I have developed a sophisticated GPT clone application using the MERN stack (MongoDB, Express.js, React.js, Node.js) and integrated it with the Groq API. This project demonstrates the capabilities of GROQ API and conversational AI, providing a versatile platform for various text-based applications.',
        tools: ['React', 'Express', 'Nodejs', 'MongoDB', 'javaScript', 'GROQ API', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },