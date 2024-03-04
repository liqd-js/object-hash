import * as crypto from 'crypto';
import { objectStringify } from '@liqd-js/fast-object-hash';

export { objectStringify };

export default function objectHash( obj: any, options: { alg?: 'sha1' | 'sha256', format?: 'hex' | 'base64' | 'base64url' | 'binary', sort?: boolean } = {}): string
{
    const { alg = 'sha256', format = 'hex', sort = false } = options;

    return crypto.createHash( alg ).update( objectStringify( obj, sort, new Set() )).digest( format );
}