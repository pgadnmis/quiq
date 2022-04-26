import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import commonjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'

export default [
    {
        input: './src/index.js',
        output: [
            {
                file: 'dist/index.min.js',
                format: 'cjs',
            },
            {
                file: 'dist/index.es.min.js',
                format: 'es',
                exports: 'named',
            }
        ],
        plugins: [
            resolve({
                preferBuiltins: true,
                extensions: [".js", ".jsx"]
            }),
            postcss({
                plugins: [],
                minimize: true,
            }),
            commonjs({
                include: /node_modules/,
                namedExports: {
                    'classnames': ['classNames']
                }
            }),
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react'],
            }),
            external(),
            terser()
        ]
    }
]