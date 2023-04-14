import typescript from 'rollup-plugin-typescript2';
import cleaner from 'rollup-plugin-cleaner';
import dts from 'rollup-plugin-dts';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import fs from 'fs';

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const external = Object.keys(packageJson.dependencies);

export default [
  {
    input: './src/index.ts',
    plugins: [
      cleaner({
        targets: ['./dist'],
      }),
      typescript({
        useTsconfigDeclarationDir: true,
      }),
      nodeResolve(),
    ],
    cache: false,
    external,
    output: [
      {
        file: './dist/cjs/index.cjs',
        format: 'cjs',
        exports: 'named',
      },
      {
        file: './dist/esm/index.js',
        format: 'esm',
      },
    ],
  },
  {
    input: './build/index.d.ts',
    output: [
      {
        file: './dist/index.d.ts',
        format: 'es',
      },
    ],
    plugins: [dts()],
  },
];
