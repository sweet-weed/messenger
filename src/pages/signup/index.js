import './signup.css';

import { toDomTree } from '../../lib/handlebars';

import { toElement as toWelcomeElement } from '../../components/welcome';
import { toSignUpElement } from '../../components/auth';

import pageTemplate from './signup.tmpl';

const pageElement = toDomTree(pageTemplate());

pageElement.appendChild(toWelcomeElement());
pageElement.appendChild(toSignUpElement());

document.body.appendChild(pageElement);