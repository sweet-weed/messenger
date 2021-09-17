import './user-info.css';

import { toDomTree } from '../../lib/handlebars';

import template from './user-info.tmpl';

export function toUserInfoElement() {
    return toDomTree(template({
        email: 'ahmad.mustafa@chatapp.com',
        name: 'Ahmad Mustafa'
    }));
}