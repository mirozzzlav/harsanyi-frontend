import configJson from '../config/config.json';


export default {
    data: {
        ...configJson
    },
    get(parName) {
        if (this.data[parName] !== undefined) {
            return this.data[parName];
        }
        return undefined;
    },
    
    maxAttachmentSizeAsTxt() {
        return (this.data.maxAttachmentSize / (1024 * 1024)) + 'MB'
    },
    getSupportedAttachmentsAsTxt() {
        let ret = '';
        this.data.supportedAttachments.forEach((attachType) => {
            let tmp = attachType.split('/');

            ret += (tmp[1] + ', ' || ''); 
        });
        return ret.slice(0, -2);
    }

}