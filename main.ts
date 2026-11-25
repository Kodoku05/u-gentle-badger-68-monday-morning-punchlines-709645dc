// 114 characters; targets Monday relevance, a laugh, surprise, economy, and freshness.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const joke = "Monday morning, I faked my death to skip a meeting. HR hired a medium. 'You still need to train your replacement.'";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), joke, 'utf8');
