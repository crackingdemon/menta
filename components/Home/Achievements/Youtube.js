import React from 'react'

export default function Youtube() {
    return (
        <div className="flex w-3/4 justify-center m-4">
            <iframe className="border-2 w-full h-96" src="https://www.youtube.com/embed/fk8Z7pzeN1I" title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
        </div>
    )
}
