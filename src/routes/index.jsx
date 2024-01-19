import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/home';
import Explore from '../pages/explore';
import Notifications from '../pages/notifications';
import Messages from '../pages/messages';
import PinnedLists from '../pages/pinned-lists';
import Bookmarks from '../pages/bookmarks';
import Communities from '../pages/communities';
import Premium from '../pages/premium';
import Profile from '../pages/profile';

import MainLayout from '../layouts/main';
import NotFound from '../pages/not-found';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'home',
                element: <Home></Home>
            },
            {
                path: 'explore',
                element: <Explore></Explore>
            },
            {
                path: 'notifications',
                element: <Notifications></Notifications>
            },
            {
                path: 'messages',
                element: <Messages></Messages>
            },
            {
                path: 'lists',
                element: <PinnedLists></PinnedLists>
            },
            {
                path: 'bookmarks',
                element: <Bookmarks></Bookmarks>
            },
            {
                path: 'communities',
                element: <Communities></Communities>
            }
            ,
            {
                path: 'premium',
                element: <Premium></Premium>
            }
            ,
            {
                path: ':slug',
                element: <Profile></Profile>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }

])

export default routes;