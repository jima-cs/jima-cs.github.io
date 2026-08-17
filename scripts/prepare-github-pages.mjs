import { cp, rm } from 'node:fs/promises';
import { resolve } from 'node:path';

const buildDirectory = resolve('build');
const githubDirectory = resolve('docs');

await rm(githubDirectory, { recursive: true, force: true });
await cp(buildDirectory, githubDirectory, { recursive: true });
await rm(resolve(githubDirectory, 'zh-cn'), { recursive: true, force: true });

console.log('Prepared docs/ for GitHub Pages without /zh-cn/.');
