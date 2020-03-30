import path from 'path';
import { read } from '../JsEmbroidery';

const file = path.resolve('./src/__tests__/pooch01/103001.dst');
console.log(file);

async function teste() {
  const test = await read(file);
  console.log(test);
}

teste();
