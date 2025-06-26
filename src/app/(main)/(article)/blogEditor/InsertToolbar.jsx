import React from 'react';
import './InsertToolbar.css';

const InsertToolbar = ({ onInsert, onShortcut }) => {
    const tools = [
        { label: '사진', icon: 'photo'},
        { label: 'MYBOX', icon: 'mybox' },
        { label: '동영상', icon: 'video' },
        { label: '스티커', icon: 'sticker' },
        { label: '이모티콘', icon: 'emoticon' },
        { label: '구분선', icon: 'divider' },
        { label: '장소', icon: 'location' },
        { label: '링크', icon: 'link' },
        { label: '파일', icon: 'file' },
        { label: '일정', icon: 'calendar' },
        { label: '소스코드', icon: 'source' },
        { label: '표', icon: 'table' },
        { label: '수식', icon: 'formula' },
        { label: '내돈내산', icon: 'statistics' },
    ];

    const shortcuts = [
        { label: '내 클립', icon: 'clip' },
        { label: '글감', icon: 'material' },
        { label: '라이브러리', icon: 'library' },
        { label: '템플릿', icon: 'template' },
    ];

    return (
        <div className="insert-toolbar">
            <div className="toolbar-left">
                {tools.map((tool) => (
                    <button
                        key={tool.label}
                        onClick={() => onInsert(tool.label)}
                        title={tool.label}
                    >
                        <img
                            src={`/image/article/icons/inserttoolbar/${tool.icon}.png`}
                            alt={tool.label}
                        />
                    </button>
                ))}
            </div>
            <div className="toolbar-right">
                {shortcuts.map((shortcut) => (
                    <button
                        key={shortcut.label}
                        onClick={() => onShortcut(shortcut.label)}
                        title={shortcut.label}
                    >
                        <img
                            src={`/image/article/icons/inserttoolbar/${shortcut.icon}.png`}
                            alt={shortcut.label}
                        />
                        <span>{shortcut.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default InsertToolbar;