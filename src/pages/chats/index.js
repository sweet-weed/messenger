import './chats.css';

import { toDomTree } from '../../lib/handlebars';
import notifyLogo from './assets/images/notify-logo.svg';
import pageTemplate from './chats.tmpl';

const pageElement = toDomTree(pageTemplate({
    notifyLogo,
    notifyTitle: 'Chats in the plans',
    notifyLinkText: 'Back To SignIn'
}));

document.body.appendChild(pageElement);