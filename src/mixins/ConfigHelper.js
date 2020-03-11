import configJson from '../config/config.json';

export default {
    data: function() {
        return configJson;
    },
    methods: {
        get: function(parName) {
            if (this[parName] !== undefined) {
                return this[parName];
            }
            return undefined;
        },
        maxAttachmentSizeAsTxt: function() {
            return (this.maxAttachmentSize / (1024 * 1024)) + 'MB'
        },
        getSupportedAttachmentsAsTxt: function() {
            let ret = '';
            this.supportedAttachments.forEach((attachType) => {
                let tmp = attachType.split('/');
    
                ret += (tmp[1] + ', ' || ''); 
            });
            return ret.slice(0, -2);
        }
    }
}