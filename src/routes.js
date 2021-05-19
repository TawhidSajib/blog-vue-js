import Home from './components/Home'
import Blog from './components/Blog'
import Id from './components/Id'
export const routes = [
    {
        path: '',
        component: Home
    },
    {
        path: '/blog',
        component: Blog
    },
    {
        path: '/blog/:id',
        component: Id
    }
]