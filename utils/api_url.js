import { API_URL_PRODUCTION, API_URL_DEV } from '@env'

const API_URL = __DEV__ ? API_URL_DEV : API_URL_PRODUCTION

export default API_URL