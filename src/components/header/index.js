import './header.css';

import { toDomTree } from '../../lib/handlebars';

import avatarImage from './assets/images/avatar.png';
import template from './header.tmpl';

export function toHeaderElement() {
    return toDomTree(template({
        title: 'Profile',
        avatarUrl: avatarImage,
        backUrl: '/signin'
    }));
}