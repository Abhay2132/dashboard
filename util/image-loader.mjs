import path from "path";
const basePath = process.env.BASEPATH ? process.env.BASEPATH : "";

export default function myImageLoader({src}) {
  if( basePath && path.isAbsolute(src) ){
    return `${basePath}${src}`;
  }
  return `${src}`;
}