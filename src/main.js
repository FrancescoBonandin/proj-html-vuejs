import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import{faFacebook,faTwitter,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faCalendar,faClock,faEye,faFileLines,faUser } from '@fortawesome/free-regular-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

library.add( faFacebook,faTwitter,faInstagram,faLinkedin,
    faClock,faUser,faFileLines,faLocationDot,faCalendar,faEye )


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
