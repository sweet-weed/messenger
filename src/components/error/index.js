import './error.css';

import { toDomTree } from '../../lib/handlebars';
import errorLogo from './assets/images/logo-error.svg';

import template from './error.tmpl';

export function toElement(errorCode = 500) {
    return toDomTree(template({
        errorLogo,
        errorCode
    }));
}