import path from 'path';
import { read } from '../JsEmbroidery';
import { humanRead, arrayRange } from '../utils/py';

const file = path.resolve('./src/__tests__/pooch01/103001.dst');
console.log(file);

async function teste() {
  const test = await read(file);
  console.log('TEST:', test);
}

// teste();
// console.log(arrayRange(32, 126, 1).join(' '));

teste();
