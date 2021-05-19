import Home from './components/Home'
import Blog from './components/Blog'
import Id from './components/Id'
import images from './components/images'
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
    }, {
        path: '/gallery',
        component: images
    }
]