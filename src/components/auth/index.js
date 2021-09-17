import './auth.css';

import { toDomTree } from '../../lib/handlebars';
import arrowRighIcon from './assets/images/arrow-right-icon.isvg';

import templateSignIn from './auth-signin.tmpl'
import templateSignUp from './auth-signup.tmpl'

export function toSignInElement() {
    return toDomTree(templateSignIn({
        icon: arrowRighIcon,
        title: 'Sign In'
    }));
}

export function toSignUpElement() {
    return toDomTree(templateSignUp({
        icon: arrowRighIcon,
        title: 'Sign Up'
    }));
}