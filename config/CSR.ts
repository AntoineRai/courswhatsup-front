const API_URLS = {
    local: "http://localhost:3001",
    prod : "...",
}

const SOCKET_URLS = {
    local: "http://localhost:3002",
    prod : "...",
}

const URL: { [key: string]: string } = { 
    local: "http://localhost:3000",
    prod: "...",
};

let CSR: string;
let CSR_SOCKET: string;

if (typeof window === "undefined") {
    CSR = API_URLS[process.env.NEXT_PUBLIC_ENV as keyof typeof API_URLS] || "DEFAULT_VALUE";
    CSR_SOCKET = SOCKET_URLS[process.env.NEXT_PUBLIC_ENV as keyof typeof API_URLS] || "DEFAULT_VALUE";
} else {
    for (const e in URL) {
        if (URL[e] === window.location.origin) {
            CSR = API_URLS[e as keyof typeof API_URLS];
            CSR_SOCKET = SOCKET_URLS[e as keyof typeof API_URLS];
            break;
        }
    }
}

export { CSR, CSR_SOCKET };