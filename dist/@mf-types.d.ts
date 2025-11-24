
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/HeaderMF';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/HeaderMF' ? typeof import('REMOTE_ALIAS_IDENTIFIER/HeaderMF') :any;