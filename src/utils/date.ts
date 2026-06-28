export function dateFormatter(release_date: string) {
    const date = new Date(release_date);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    })
}