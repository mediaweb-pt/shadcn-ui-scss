export function formatDate(dateString: string) {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// ADDS DELAY TO SIMULATE SLOW API REMOVE FOR PRODUCTION
export const delay = (time: number) => new Promise((resolve) => setTimeout(() => resolve(1), time));

/**
 * Helper regex pattern for emails
 */
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(email: string) {
    return emailRegex.test(email);
}

/**
 * Helper regex pattern for login code
 */
export const codeRegex = /^[a-zA-Z0-9]{6}$/; // 6 digits with letters or numbers

export function validateCode(code: string) {
    return codeRegex.test(code) && code.length === 6;
}
/**
 * Find key in object and returns the value
 * @param {object} obj
 * @param {string} targetKey
 * @returns {(any | null)} Returns the value of the respective key in the object
 */

export function findKey(obj: any, targetKey: string): any | null {
    let result = null;

    // Helper function to recursively search for the key
    function search(obj: any, key: string) {
        for (const prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (prop === key) {
                    result = obj[prop];
                    return;
                } else if (typeof obj[prop] === "object") {
                    search(obj[prop], key);
                }
            }
        }
    }

    // Start the search
    search(obj, targetKey);
    return result;
}



// Function to convert a string to camel case
// Example: 'rocket-ui' => 'RocketUi' || 'rocket ui' => 'RocketUi'
export function toCamelCase(str:string):string {
    if(!str) return str;
    // Remove file extension
    const strTemp = str.replace(/\.[^/.]+$/, "")

    // Split the string into parts using hyphens as delimiters
    const parts = strTemp.replace(" ", "-").split("-")
    // Capitalize the first letter of each part except for the first one
    parts.forEach((part, index) => {
        parts[index] = part.charAt(0).toUpperCase() + part.slice(1);
    });
    // Join the parts together without any separator
    return parts.join("") //.replace(" ", "");
}

export function toDashedLowerCase(str:string):string {
    if(!str) return str;
    // Remove file extension
    const strTemp = str.replace(/\.[^/.]+$/, "")

    // Split the string into parts using hyphens as delimiters and lowercase
    return strTemp.replace(" ", "-").toLowerCase();
}

//function to turn "ArrowRight" to "arrow-right"
export function toKebabCase(str:string):string {
    if(!str) return str;
    // Remove file extension
    const strTemp = str.replace(/\.[^/.]+$/, "")

    return strTemp.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}
