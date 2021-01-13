global.LOG_LEVEL = {
    info: 1,
    warning: 2,
    error: 3
}

class UtilityHelper {

    static formatString (template, ...args) {
        const length = args.length;
        for (let i = 0; i < length; i++) {
            let needle = '%s';
            if (!template.includes(needle)) {
                needle = new RegExp(`\\{${i}\\}`, 'gm');
            }
            template = template.replace(needle, args[i]);
        }
        return template;
    }

    static log (msg, level = 1) {
        if (level === LOG_LEVEL.error) console.error(msg);
        else if (level === LOG_LEVEL.warning) console.warning(msg);
        else console.log(msg);
    }
}
module.exports = UtilityHelper
