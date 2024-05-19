const BASE_URL = 'https://refugeehelper.blob.core.windows.net/images'

const getImageUrl = (path: string): string => `${BASE_URL}/${path}`

export default getImageUrl;
