import {useState, useRef, useCallback, useEffect} from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import "draft-js/dist/Draft.css"
import {convertToHTML} from "draft-convert"
import './RichEditor.scss'


function RichEditor({setArticleText}) {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const editor = useRef(null);
    const [content, setContent] = useState(null);

    useEffect(() => {
        setArticleText(content)
    }, [content, editorState])

    const focus = () => {
        if (editor.current) editor.current.focus();
    };

    const handleKeyCommand = useCallback(
        (command, editorState) => {
            const newState = RichUtils.handleKeyCommand(editorState, command);
            if (newState) {
                setEditorState(newState);
                return 'handled';
            }
            return 'not-handled';
        },
        [editorState, setEditorState],
    );

    const handleSubmit = () => {
        const htmlString = editorState.getCurrentContent();
        const html = convertToHTML(htmlString)
        console.log(html)
        setContent(html);
    }

    let className = 'RichEditor-editor';
    const contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
        if (
            contentState
                .getBlockMap()
                .first()
                .getType() !== 'unstyled'
        ) {
            className += ' RichEditor-hidePlaceholder';
        }
    }

    return (
        <>
            <div className="RichEditor-root">
                <BlockStyleControls
                    editorState={editorState}
                    onToggle={blockType => {
                        const newState = RichUtils.toggleBlockType(editorState, blockType);
                        setEditorState(newState);
                    }}
                />
                <InlineStyleControls
                    editorState={editorState}
                    onToggle={inlineStyle => {
                        const newState = RichUtils.toggleInlineStyle(
                            editorState,
                            inlineStyle,
                        );
                        setEditorState(newState);
                    }}
                />
                <div className={className} onClick={focus}>
                    <Editor
                        editorState={editorState}
                        handleKeyCommand={handleKeyCommand}
                        onChange={setEditorState}
                        placeholder="Tell a story..."
                        ref={editor}
                        spellCheck={true}
                    />
                </div>
            </div>
            <div className="button-secondary"
                 onClick={handleSubmit}>
                Done
            </div>
        </>
    );
}

function StyleButton({onToggle, active, label, style}) {
    let className = 'RichEditor-styleButton';
    if (active) {
        className += ' RichEditor-activeButton';
    }

    return (
        <span
            className={className}
            onMouseDown={e => {
                e.preventDefault();
                onToggle(style);
            }}>
      {label}
    </span>
    );
}

const BLOCK_TYPES = [
    {label: 'H2', style: 'header-two'},
    {label: 'OL', style: 'ordered-list-item'},
];

function BlockStyleControls({editorState, onToggle}) {
    const selection = editorState.getSelection();
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

    return (
        <div className="RichEditor-controls">
            {BLOCK_TYPES.map(type => (
                <StyleButton
                    key={type.label}
                    active={type.style === blockType}
                    label={type.label}
                    onToggle={onToggle}
                    style={type.style}
                />
            ))}
        </div>
    );
}

const INLINE_STYLES = [
    {label: 'Bold', style: 'BOLD'},
    {label: 'Italic', style: 'ITALIC'},
    {label: 'Underline', style: 'UNDERLINE'}
];

function InlineStyleControls({editorState, onToggle}) {
    const currentStyle = editorState.getCurrentInlineStyle();
    return (
        <div className="RichEditor-controls">
            {INLINE_STYLES.map(type => (
                <StyleButton
                    key={type.label}
                    active={currentStyle.has(type.style)}
                    label={type.label}
                    onToggle={onToggle}
                    style={type.style}
                />
            ))}
        </div>
    );
}

export default RichEditor;