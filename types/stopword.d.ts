// declare module "stopword" {
//     export function removeStopwords(words: string[], stopwords?: string[]): string[];
// }

declare module "stopword" {
    const content: any;
    export default content;

    const stopword: {
        removeStopwords: typeof removeStopwords;
      };
    
    export default stopword;
    
}
