import './welcome.css';

import { toDomTree } from '../../lib/handlebars';
import logo from './images/logo.svg';

import template from './welcome.tmpl'

export function toElement() {
    return toDomTree(template({
        logo,
    }));
}