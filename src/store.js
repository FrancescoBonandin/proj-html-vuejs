import { reactive } from "vue";

export const store= reactive({


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

        {
            image:'../assets/img/courses/artist-course-08-480x480.jpg',
            price:'18.00',
            courseName:'The Acrylic Painting Academy',
            lessons:'4',
            students:'50'

        },
        {
            image:'../assets/img/courses/artist-course-07-480x480.jpg',
            price:'21.00',
            courseName:'Drawing and Shading: Complete Course',
            lessons:'14',
            students:'50'

        },
        {
            image:'../assets/img/courses/artist-course-06-480x480.jpg',
            price:'19.00',
            courseName:'The Color Theory for Digital Artist',
            lessons:'7',
            students:'50'

        },
        {
            image:'../assets/img/courses/artist-course-05-480x480.jpg',
            price:'35.00',
            courseName:'Ultimate Guide to Digital Sketching for Beginners',
            lessons:'14',
            students:'50'

        },
        {
            image:'../assets/img/courses/artist-course-04-480x480.jpg',
            price:'19.00',
            courseName:'Portrait Drawing The Smart Way',
            lessons:'2',
            students:'50'

        },
        {
            image:'../assets/img/courses/artist-course-03-480x480.jpg',
            price:'19.00',
            courseName:'Mastering The Watercolor Painting From Beginner',
            lessons:'9',
            students:'50'

        },
        {
            image:'../assets/img/courses/artist-course-02-480x480.jpg',
            price:'25.00',
            courseName:'The Art & Science Drawing',
            lessons:'4',
            students:'50'

        },
        {
            image:'../assets/img/courses/artist-course-01-480x480.jpg',
            price:'22.00',
            courseName:'The Colored Pencil Drawing Course',
            lessons:'6',
            students:'50'

        },

    ],
    blogPost:[
        {
            image:'../assets/img/blog/artist-blog-03-480x356.jpeg',
            title:'Brush Strokes Energize Trees in Paintings',
            date:'May 15, 2020',
            views:'688'
        },
        {
            image:'../assets/img/blog/artist-blog-02-500x680.jpg',
            title:'Connection between Self-Portrait and Identity',
            date:'May 15, 2020',
            views:'397'
        },
        {
            image:'../assets/img/blog/artist-blog-01-480x356.jpg',
            title:'Poket-Sized Notebooks Hold Miniature Paintings',
            date:'May 15, 2020',
            views:'603'
        },
    ],
    events:[
        {
            image:'../assets/img/events/artist-event-04-250x300.jpg',
            date:'Nov 22, 2020',
            title:'Storytelling Workshop',
            location:'Texas,US'
        },
        {
            image:'../assets/img/events/artist-event-03-250x300.jpg',
            date:'Oct 10, 2020',
            title:'Painting Art Contest 2020',
            location:'New York,US'
        },
        {
            image:'../assets/img/events/artist-event-02-250x300.jpg',
            date:'Nov 23, 2020',
            title:'International Art Fair 2020',
            location:'Hamburg,Germany'
        },
        {
            image:'../assets/img/events/artist-event-01-250x300.jpg',
            date:'Dec 15, 2020',
            title:'Street Performance: Call For Artist',
            location:'Illinois,US'
        },
    ]

})