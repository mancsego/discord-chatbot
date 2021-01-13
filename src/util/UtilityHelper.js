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
}
module.exports = UtilityHelper
