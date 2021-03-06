import './vue'
type AsyncFunction = ((arg0: any) => Promise<any>) | Promise<any>;

type VSanitize = (dirty?: any, options?: VSanitizeOptions) => AsyncFunction

export interface VSanitizeOptions {
    allowedTags?: boolean | object | object[]
    allowedAttributes?: boolean | object | object[],
    disallowedTagsMode?: string,
    selfClosing?: object | object[],
    allowedSchemes?: object | object[],
    allowedSchemesByTag?: object,
    allowedSchemesAppliedToAttributes?: object | object[],
    allowProtocolRelative?: boolean,
    enforceHtmlBoundary?: boolean
}
