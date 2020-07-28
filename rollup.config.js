import { terser } from 'rollup-plugin-terser';
import ts from '@wessberg/rollup-plugin-ts';

import pkg from './package.json';

export default {
    input: 'src/index.ts',
    output: [
        // CommonJS (for Node) and ES module (for bundlers) build
        { file: pkg.main, format: 'cjs' },
        { file: pkg.module, format: 'es' },
        // browser-friendly UMD build
        {
            file: pkg.browser,
            format: 'umd',
            name: 'bic',
        },
    ],
    plugins: [
        ts({
            browserslist: ['last 1 version', '> 1%'],
        }),
        terser(),
    ],
};
