class DjscordError extends Error {
    constructor(path, error, method) {
        super();

        const flattened = this.constructor.flattenErrors(error.errors || error).join('\n');

        this.name = "DjscordError"
        this.message = error.message && flattened ? `${error.message}\n${flattened}` : error.message || flattened;

        /**
         * @type {string}
         */
        this.path = path

        this.code = error.code

        this.method = method
    }

    static flattenErrors(obj, key = '') {
        let messages = [];
    
        for (const k of Object.keys(obj)) {
          if (k === 'message') continue;
          const newKey = key ? isNaN(k) ? `${key}.${k}` : `${key}[${k}]` : k;
    
          if (obj[k]._errors) {
            messages.push(`${newKey}: ${obj[k]._errors.map(e => e.message).join(' ')}`);
          } else if (obj[k].code || obj[k].message) {
            messages.push(`${obj[k].code ? `${obj[k].code}: ` : ''}: ${obj[k].message}`.trim());
          } else if (typeof obj[k] === 'string') {
            messages.push(obj[k]);
          } else {
            messages = messages.concat(this.flattenErrors(obj[k], newKey));
          }
        }
    
        return messages;
    }
}

module.exports = DjscordError