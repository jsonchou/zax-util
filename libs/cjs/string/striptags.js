'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var STATE_PLAINTEXT = Symbol('plaintext');
var STATE_HTML = Symbol('html');
var STATE_COMMENT = Symbol('comment');
var ALLOWED_TAGS_REGEX = /<(\w*)>/g;
var NORMALIZE_TAG_REGEX = /<\/?([^\s\/>]+)/;
/* istanbul ignore next */
function striptags(html) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    html = html || '';
    var allowable_tags = args[0] || [];
    var tag_replacement = args[1] || '';
    var context = init_context(allowable_tags, tag_replacement);
    return striptags_internal(html, context);
}
exports.striptags = striptags;
/* istanbul ignore next */
function init_striptags_stream(allowable_tags, tag_replacement) {
    allowable_tags = allowable_tags || [];
    tag_replacement = tag_replacement || '';
    var context = init_context(allowable_tags, tag_replacement);
    return function striptags_stream(html) {
        return striptags_internal(html || '', context);
    };
}
striptags.init_streaming_mode = init_striptags_stream;
/* istanbul ignore next */
function init_context(allowable_tags, tag_replacement) {
    allowable_tags = parse_allowable_tags(allowable_tags);
    return {
        allowable_tags: allowable_tags,
        tag_replacement: tag_replacement,
        state: STATE_PLAINTEXT,
        tag_buffer: '',
        depth: 0,
        in_quote_char: ''
    };
}
/* istanbul ignore next */
function striptags_internal(html, context) {
    var allowable_tags = context.allowable_tags;
    var tag_replacement = context.tag_replacement;
    var state = context.state;
    var tag_buffer = context.tag_buffer;
    var depth = context.depth;
    var in_quote_char = context.in_quote_char;
    var output = '';
    for (var idx = 0, length_1 = html.length; idx < length_1; idx++) {
        var char = html[idx];
        if (state === STATE_PLAINTEXT) {
            switch (char) {
                case '<':
                    state = STATE_HTML;
                    tag_buffer += char;
                    break;
                default:
                    output += char;
                    break;
            }
        }
        else if (state === STATE_HTML) {
            switch (char) {
                case '<':
                    // ignore '<' if inside a quote
                    if (in_quote_char) {
                        break;
                    }
                    // we're seeing a nested '<'
                    depth++;
                    break;
                case '>':
                    // ignore '>' if inside a quote
                    if (in_quote_char) {
                        break;
                    }
                    // something like this is happening: '<<>>'
                    if (depth) {
                        depth--;
                        break;
                    }
                    // this is closing the tag in tag_buffer
                    in_quote_char = '';
                    state = STATE_PLAINTEXT;
                    tag_buffer += '>';
                    if (allowable_tags.has(normalize_tag(tag_buffer))) {
                        output += tag_buffer;
                    }
                    else {
                        output += tag_replacement;
                    }
                    tag_buffer = '';
                    break;
                case '"':
                case "'":
                    // catch both single and double quotes
                    if (char === in_quote_char) {
                        in_quote_char = '';
                    }
                    else {
                        in_quote_char = in_quote_char || char;
                    }
                    tag_buffer += char;
                    break;
                case '-':
                    if (tag_buffer === '<!-') {
                        state = STATE_COMMENT;
                    }
                    tag_buffer += char;
                    break;
                case ' ':
                case '\n':
                    if (tag_buffer === '<') {
                        state = STATE_PLAINTEXT;
                        output += '< ';
                        tag_buffer = '';
                        break;
                    }
                    tag_buffer += char;
                    break;
                default:
                    tag_buffer += char;
                    break;
            }
        }
        else if (state === STATE_COMMENT) {
            switch (char) {
                case '>':
                    if (tag_buffer.slice(-2) == '--') {
                        // close the comment
                        state = STATE_PLAINTEXT;
                    }
                    tag_buffer = '';
                    break;
                default:
                    tag_buffer += char;
                    break;
            }
        }
    }
    // save the context for future iterations
    context.state = state;
    context.tag_buffer = tag_buffer;
    context.depth = depth;
    context.in_quote_char = in_quote_char;
    return output;
}
/* istanbul ignore next */
function parse_allowable_tags(allowable_tags) {
    var tag_set = new Set();
    if (typeof allowable_tags === 'string') {
        var match = void 0;
        while ((match = ALLOWED_TAGS_REGEX.exec(allowable_tags))) {
            tag_set.add(match[1]);
        }
    }
    else if (typeof allowable_tags[Symbol.iterator] === 'function') {
        tag_set = new Set(allowable_tags);
    }
    else if (typeof allowable_tags.forEach === 'function') {
        // IE11 compatible
        allowable_tags.forEach(tag_set.add, tag_set);
    }
    return tag_set;
}
/* istanbul ignore next */
function normalize_tag(tag_buffer) {
    var match = NORMALIZE_TAG_REGEX.exec(tag_buffer);
    return match ? match[1].toLowerCase() : null;
}
//# sourceMappingURL=striptags.js.map