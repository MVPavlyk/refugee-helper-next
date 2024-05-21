function formatDateTime(dateTimeStr: string): string {
    const date = new Date(dateTimeStr);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diffMs / (1000 * 60));

    if (diffHours < 24) {
        if (diffHours >= 1) {
            return `${diffHours} ${pluralize(diffHours, 'година', 'години', 'годин')} тому`;
        } else {
            return `${diffMinutes} ${pluralize(diffMinutes, 'хвилина', 'хвилини', 'хвилин')} тому`;
        }
    }

    const months: { [key: number]: string } = {
        0: "січня", 1: "лютого", 2: "березня", 3: "квітня", 4: "травня", 5: "червня",
        6: "липня", 7: "серпня", 8: "вересня", 9: "жовтня", 10: "листопада", 11: "грудня"
    };

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day} ${month} ${year} року, ${hours}:${minutes}`;
}

function pluralize(count: number, singular: string, genitiveSingular: string, plural: string): string {
    if (count % 10 === 1 && count % 100 !== 11) {
        return singular;
    } else if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) {
        return genitiveSingular;
    } else {
        return plural;
    }
}

export default formatDateTime
