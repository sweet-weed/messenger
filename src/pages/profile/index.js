import './profile.css';

import { toDomTree } from '../../lib/handlebars';

import { toHeaderElement } from '../../components/header';
import { toUserInfoElement } from '../../components/user-info';

import pageTemplate from './profile.tmpl';

const pageElement = toDomTree(pageTemplate());

pageElement.appendChild(toHeaderElement());
pageElement.appendChild(toUserInfoElement());

document.body.appendChild(pageElement);