import * as crypto from 'crypto';
import { objectStringify } from '@liqd-js/fast-object-hash';

export { objectStringify };

export default function objectHash( obj: any, options: { alg?: 'sha1' | 'sha256', format?: 'hex' | 'base64' | 'base64url' | 'binary', sortArrays?: boolean } = {}): string
{
    const { alg = 'sha256', format = 'hex', sortArrays = false } = options;

    return crypto.createHash( alg ).update( objectStringify( obj, { sortArrays, ignoreUndefinedProperties: true })).digest( format );
}