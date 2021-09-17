import './conversation.css';

import { toDomTree } from '../../lib/handlebars';
import notifyLogo from './assets/images/notify-logo.svg';
import pageTemplate from './conversation.tmpl';

const pageElement = toDomTree(pageTemplate({
    notifyLogo,
    notifyTitle: 'Conversation in the plans',
    notifyLinkText: 'Back To SignIn'
}));

document.body.appendChild(pageElement);