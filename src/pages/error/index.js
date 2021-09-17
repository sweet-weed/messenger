import './error.css';

import { toDomTree } from '../../lib/handlebars';
import { toElement as toErrorElement } from '../../components/error';
import pageTemplate from './error.tmpl';

const pageElement = toDomTree(pageTemplate());

pageElement.appendChild(toErrorElement());

document.body.appendChild(pageElement);