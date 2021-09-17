export function toDomTree(template, data = {}) {
    if (typeof template !== 'string') {
        throw new Error('Inccorrect template type');
    }

    const container = document.createElement('div');
    container.innerHTML = template;

    return container.firstChild;
}