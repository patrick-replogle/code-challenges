// You are implementing your own HTML editor. To make it more comfortable for developers you would like to add an auto-completion feature to it.

// Given the starting HTML tag, find the appropriate end tag which your editor should propose.

// If you are not familiar with HTML, consult with this note.

function htmlEndTagByStartTag(startTag) {
    let result = "";
    let regex = /[A-Za-z0-9]/;
    
    for (let i = 1; i < startTag.length; i++) {
        if (regex.test(startTag[i])) {
            result += startTag[i];
        } else {
            break;
        }
    }
    return `</${result}>`;
}
