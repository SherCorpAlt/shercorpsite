
export const ADMIN_EMAILS = [
    "khawaralisher@gmail.com",
    "kashercorp2@gmail.com",
    "contactme@khawarsher.com" // Adding self just in case
];

export const isAdmin = (email: string) => ADMIN_EMAILS.includes(email);
