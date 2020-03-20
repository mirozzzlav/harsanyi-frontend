import ConfigHelper from './ConfigHelper';

export default {
    mixins: [ConfigHelper],
    template: "<div></div>",
    data: function() {
      return {
        ajaxLoading: false,
      }
    },
    computed: {
      apiBaseUrl: function() {
        return process.env.VUE_APP_APIURL;
      }
    },
    methods: {
      getAjax: function (apiPath, _callback) {
        let apiUrl = this.apiBaseUrl + apiPath;
        this.ajaxLoading = true;
        this.$http.get(apiUrl).then((response)=> {
          _callback(response);
          this.ajaxLoading = false;
        });
      },
      getAjaxDelayed: function (apiPath, _callback) {
        let apiUrl = this.apiBaseUrl + apiPath;
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

      postAjaxDelayed: function (apiPath, postData, _callback, _err_callback = null) {
        let formData = this.getFormData(postData);
        this.ajaxLoading = true;
        let apiUrl = this.apiBaseUrl + apiPath;

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