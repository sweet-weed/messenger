const TEMPLATE_REGEXP_DEFAULT = /\{\{(.*?)\}\}/gi;

export function render(template, context, regExp = TEMPLATE_REGEXP_DEFAULT) {
    let found = null;

    while ((found = regExp.exec(tmpl))) {
        const [matchedString, templateKey] = found;

        if (templateKey) {
            const data = getTemplateValueFromContext(context, templateKey.trim());

            template = template.replace(new RegExp(matchedString, "gi"), data);
        }
    }

    return template;
}

function getTemplateValueFromContext(obj, path, defaultValue) {
    const keys = path.split('.');

    let result = obj;
    for (let key of keys) {
        result = result[key];

        if (result === undefined) {
            return defaultValue;
        }
    }

    return result ?? defaultValue;
}