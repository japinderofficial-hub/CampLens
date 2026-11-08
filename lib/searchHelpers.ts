export function cleanSearchQuery(query: string): string {
    return query.trim().replace(/^#+/, "");
}