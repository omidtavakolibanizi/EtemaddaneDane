import axios from "axios";

import getAPIUrl from "@/utils/getAPIUrl";

/**
 * Axios مشترک برای تمام درخواست‌های API پروژه
 */
const AXIOS = axios.create({
  baseURL: getAPIUrl(),
  timeout: 20_000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default AXIOS;
