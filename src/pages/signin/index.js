import './signin.css';

import { toDomTree } from '../../lib/handlebars';

import { toElement as toWelcomeElement } from '../../components/welcome';
import { toSignInElement } from '../../components/auth';

import pageTemplate from './signin.tmpl';

const pageElement = toDomTree(pageTemplate());

pageElement.appendChild(toWelcomeElement());
pageElement.appendChild(toSignInElement());

document.body.appendChild(pageElement);