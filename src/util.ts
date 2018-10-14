import * as slug from 'slug';

export function slugify(frase: string): string {
    let timestamp: string = Date.now().toString();
    let slugId: string = timestamp.substr(timestamp.length -4);
    let slugString = `${frase} ${slugId}`;
    return slug(slugString, { lower: true });
}
