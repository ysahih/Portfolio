import React, { SetStateAction } from 'react';

export class renderContext {
    render: string = 'home';
    setRender: React.Dispatch<SetStateAction<string>> = () => {};
}

const RenderContext = React.createContext<renderContext | null>(null);

export default RenderContext;