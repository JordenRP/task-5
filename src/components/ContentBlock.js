import React, { useState } from 'react';

function ContentBlock({ title, content }) {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="content">
            <h2>{title}</h2>
            <button onClick={toggleVisibility}>
                {isVisible ? 'Hide' : 'Show'} Content
            </button>
            {isVisible && <p>{content}</p>}
        </div>
    );
}

export default ContentBlock;
