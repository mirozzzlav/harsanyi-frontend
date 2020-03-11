import ConfigHelper from './ConfigHelper';

export default {
    mixins: [ConfigHelper],
    data: function() {
      return {
        ajaxLoading: false
      }
    },
    methods: {
      getAjax: function (apiUrl, _callback) {
        this.ajaxLoading = true;
        this.$http.get(apiUrl).then((response)=> {
          _callback(response);
          this.ajaxLoading = false;
        });
      },
      getAjaxDelayed: function (apiUrl, _callback) {
        this.ajaxLoading = true;
        setTimeout(
            () => {
                this.$http.get(apiUrl).then((response)=> {
                    _callback(response);
                    this.ajaxLoading = false;
                });
            },                
            this.ajaxDelayTime
        );
      },

      postAjaxDelayed: function (apiUrl, postData, _callback, _err_callback = null) {
        let formData = this.getFormData(postData);
        this.ajaxLoading = true;

        setTimeout(
            () => {
                this.$http.post(
                  apiUrl, 
                  formData, 
                  {
                    headers: {'Content-Type': 'multipart/form-data'}
                  }
                ).then((response)=> {
                    _callback(response);
                    this.ajaxLoading = false;
                }).catch(err => {
                  let msg = err.response.data.message || '';
                  this.ajaxLoading = false;
                  if (_err_callback) {
                    _err_callback(msg);
                  }
                });
            },                
            this.ajaxDelayTime
        );
      },
      getFormData(obj) {
        const formData = new FormData();
        Object.keys(obj).forEach(
          (key) => {
              let inpt = obj[key];
              if (inpt instanceof Array && inpt[0] instanceof File) {
                inpt.forEach(_file => {
                  formData.append(key + '[]', _file, _file.name);
                });
                return;
              }
              formData.append(key, obj[key] !== null ? obj[key] : '');
          }
        );

        return formData;
    }


    }
  }