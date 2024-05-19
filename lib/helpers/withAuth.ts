export default function withAuth (token: string) {
    return `Bearer ${token}`
}
