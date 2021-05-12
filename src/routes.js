// define routes  to components
import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Student from './components/student/Student.vue';
import Redirect from './components/Redirect.vue';

export const routes = [
    {path:'/', name:'homepage', component:Home},
    {path:'/register', name:'register', component:Register},
    {path:'/login', name: 'login', component: Login},
    {path:'/student/:idd', name:'student', component:Student},
    {path:'/redirect', name:'redirect', component:Redirect}

];