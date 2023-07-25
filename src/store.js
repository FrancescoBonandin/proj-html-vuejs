import { reactive } from "vue";

export const store= reactive({

    isMouseOnSlider:false,

    boxImages:[
        {
            image:'../assets/img/box/artist-box-image-01.png',
            title:'Online Courses',
            text:`Online art coaching now offers you a very powerful way to redesign your artist mind`
        },
        {
            image:'../assets/img/box/artist-box-image-02.png',
            title:'One to One',
            text:`Getting the necessary clarity about the current state to help you improve your ability`
        },
        {
            image:'../assets/img/box/artist-box-image-03.png',
            title:'Anywhere',
            text:`Access to valuable and portable program which allow you to setup and live anywhere you want`
        },
        {
            image:'../assets/img/box/artist-box-image-04.png',
            title:'On Time',
            text:`Punctuality is our top priority because it's an essential criteria to assess a program quality`
        },
    ],

    profiles:[
        [
            {   image:"../assets/img/avatars/artist-testimonial-avatar-02.jpg",
                name:"Florence Themes",
                title:"It's a choice of quality for people with special needs",
                text:`I'm a very strict person so i require everything to be organized and neat.
                    Then, i'll be able to make things right and shine. MaxCoach guys just got me`,
                role:"Multimedia admin"

            },
            {   image:"../assets/img/avatars/artist-testimonial-avatar-03.jpg",
                name:"Mina Hollace",
                title:"High level of efficiency and scientific teaching methods",
                text:`I am free to learn at my own pace, follow my own schedule and choose
                    the subject i want to learn from the syllabus. Great study portal for people like me`,
                role:"Freelancer"

            },
            {   image:"../assets/img/avatars/artist-testimonial-avatar-04.jpg",
                name:"Madley Pondor",
                title:"Professional Team of specialists and passionate mentors at reach",
                text:`I need to get a certification for English proficiency and Max Coach is my best choice.
                    Their tutors are smart and professionals when dealing with student`,
                role:"Multimedia admin"

            },
        ],   
        [
            {   image:"../assets/img/avatars/artist-testimonial-avatar-04.jpg",
                name:"Madley Pondor",
                title:"Professional Team of specialists and passionate mentors at reach",
                text:`I need to get a certification for English proficiency and Max Coach is my best choice.
                    Their tutors are smart and professionals when dealing with student`,
                role:"Multimedia admin"

            },
            {   image:"../assets/img/avatars/artist-testimonial-avatar-02.jpg",
                name:"Florence Themes",
                title:"It's a choice of quality for people with special needs",
                text:`I'm a very strict person so i require everything to be organized and neat.
                    Then, i'll be able to make things right and shine. MaxCoach guys just got me`,
                role:"Multimedia admin"

            },
            {   image:"../assets/img/avatars/artist-testimonial-avatar-03.jpg",
                name:"Mina Hollace",
                title:"High level of efficiency and scientific teaching methods",
                text:`I am free to learn at my own pace, follow my own schedule and choose
                    the subject i want to learn from the syllabus. Great study portal for people like me`,
                role:"Freelancer"

            },
        ],   
        [
            {   image:"../assets/img/avatars/artist-testimonial-avatar-03.jpg",
                name:"Mina Hollace",
                title:"High level of efficiency and scientific teaching methods",
                text:`I am free to learn at my own pace, follow my own schedule and choose
                the subject i want to learn from the syllabus. Great study portal for people like me`,
                role:"Freelancer"
                
            },
            {   image:"../assets/img/avatars/artist-testimonial-avatar-02.jpg",
                name:"Florence Themes",
                title:"It's a choice of quality for people with special needs",
                text:`I'm a very strict person so i require everything to be organized and neat.
                    Then, i'll be able to make things right and shine. MaxCoach guys just got me`,
                role:"Multimedia admin"

            },
            {   image:"../assets/img/avatars/artist-testimonial-avatar-04.jpg",
                name:"Madley Pondor",
                title:"Professional Team of specialists and passionate mentors at reach",
                text:`I need to get a certification for English proficiency and Max Coach is my best choice.
                    Their tutors are smart and professionals when dealing with student`,
                role:"Multimedia admin"

            },
        ], 


    ],
    courseCards:[

        {image:'../assets/img/courses/'

        },

    ]

})