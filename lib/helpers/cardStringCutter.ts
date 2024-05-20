export default function cardStringCutter(text: string): string {
    let words = text.split(/\s+/);

    if (words.length > 50) {
        return words.slice(0, 50).join(' ') + '...';
    } else {
        return text;
    }
}
