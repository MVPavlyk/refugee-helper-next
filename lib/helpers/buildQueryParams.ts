const buildQueryParams = (obj): string => {
    const values = Object.entries(obj).map(([key, value]) => `${key}=${value}`)

    return `?${values.join('&')}`
}

export default buildQueryParams;
