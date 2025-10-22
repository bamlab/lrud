import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/cjs/index.js',
      format: 'cjs'
    },
    plugins: [
      typescript({
        declaration: true,
        declarationDir: 'dist/types'
      }),
      nodeResolve()
    ]
  },
  {
    input: 'dist/cjs/index.js',
    output: {
      file: 'dist/cjs/index.min.js',
      format: 'cjs'
    },
    plugins: [terser()]
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/esm/index.js',
      format: 'esm'
    },
    plugins: [
      typescript({
        declaration: true,
        declarationDir: 'dist/types'
      }),
      nodeResolve()
    ]
  }
]
