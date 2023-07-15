import React from 'react'
import { PortableText } from '@portabletext/react'

function SimpleBlockContent({ textContent }) {


    if (!textContent) {
        console.error('Missing textContent')
        return null
    }

    return (
        <PortableText
            value={textContent}
            components={{
                marks: {
                    left: ({ children }) => <span className="align-left">{children}</span>,
                    center: ({ children }) => <span className="align-center">{children}</span>,
                    right: ({ children }) => <span className="align-right">{children}</span>,
                    bigger: ({ children }) => <span className="bigger-text">{children}</span>,
                },
            }}
        />
    )
}

export default SimpleBlockContent