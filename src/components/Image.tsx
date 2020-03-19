import React, {useCallback} from 'react';
import {ListItemImage} from "../styled/articleItem";

interface ImageProps {
    src: string;
    alt: string;
}

const FALLBACK_IMG = "/fallback-image.png";

export const Image = ({src, alt}: ImageProps) => {
    const handleError = useCallback(({target})=>{
        if(!target.src.includes(FALLBACK_IMG)) {
            target.src = FALLBACK_IMG;
        }
    }, [])
    return <ListItemImage src={src} alt={alt} role="presentation" onError={handleError}/>
}