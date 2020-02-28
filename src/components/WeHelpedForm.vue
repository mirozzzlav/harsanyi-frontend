<template>
    <b-form @submit.stop.prevent="onSubmit" class="we-helped-outer"> 
        <div class="spinner-container" v-if="ajaxLoading">
            <b-spinner label="Loading..."></b-spinner>
        </div>
        <div class="container-type1 vertical-space we-helped">
            <div class="row">
                <div class="col-md-6 col-12">
                    <h3>Žiadateľ</h3>
                </div>
                <div class="col-md-6 col-12 d-none d-md-block">
                    <h3>Text žiadosti</h3>                    
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-12">
                    <div>
                        <b-form-input type="text" name="applicantFullname" placeholder="Meno a priezvisko"
                        v-model="$v.form.applicantFullname.$model" :state="validateState('applicantFullname')" 
                        aria-describedby="feedback-applicantFullname">
                        </b-form-input>
                        <b-form-invalid-feedback id="feedback-applicantFullname">
                            Zadjte meno a priezvisko o dĺžke najmenej 3 znaky.
                        </b-form-invalid-feedback>
                    </div>

                    <div>
                        <b-form-input type="text" name="applicantEmail" placeholder="E-mail"
                        v-model="$v.form.applicantEmail.$model" :state="validateState('applicantEmail')" 
                        aria-describedby="feedback-applicantEmail">
                        </b-form-input>
                        <b-form-invalid-feedback id="feedback-applicantEmail">
                            Zadajte správny tvar e-mailu.
                        </b-form-invalid-feedback>
                    </div>

                    <div>
                        <b-form-input type="text" name="applicantPhoneNr" placeholder="Tel. číslo"
                        v-model="$v.form.applicantPhoneNr.$model" :state="validateState('applicantPhoneNr')" 
                        aria-describedby="feedback-applicantPhoneNr">
                        </b-form-input>
                        <b-form-invalid-feedback id="feedback-applicantPhoneNr">
                            Zadajte správny tvar tel. čísla bez medzier a lomítok.
                        </b-form-invalid-feedback>
                    </div>
                    
                    <div>
                        <b-form-input type="text" name="applicantAddress" placeholder="Adresa" 
                            v-model="$v.form.applicantAddress.$model" :state="validateState('applicantAddress')"></b-form-input>
                    </div>
                    
                    <h3>Príjemca podpory</h3>

                    <div>
                        <b-form-input type="text" name="recipientFullname" placeholder="Meno a priezvisko"
                        v-model="$v.form.recipientFullname.$model" :state="validateState('recipientFullname')" 
                        aria-describedby="feedback-recipientFullname">
                        </b-form-input>
                        <b-form-invalid-feedback id="feedback-recipientFullname">
                            Zadjte meno a priezvisko o dĺžke najmenej 3 znaky.
                        </b-form-invalid-feedback>
                    </div>
                    <div>
                        <b-form-input type="text" name="recipientRelToApplicant" 
                            v-model="$v.form.recipientRelToApplicant.$model" placeholder="Vzťah ku žiadatelovi"
                            :state="validateState('recipientRelToApplicant')"
                        >
                        </b-form-input>
                    </div>
                </div>
                <div class="col-md-6 col-12 textarea-wrapper">
                        <h3 class="d-block d-md-none textarea-md-mode-hl">Text žiadosti</h3>
                        <b-form-textarea type="text" placeholder="Text žiadosti" name="requestText"
                            v-model="$v.form.requestText.$model" :state="validateState('requestText')">
                        </b-form-textarea>
                </div>  
            </div>
            <div class="row">
                <div class="col-md-6 col-12">
                    <b-form-input type="text" name="recipientPurpose" v-model="$v.form.recipientPurpose.$model"
                        placeholder="Účel pomoci" :state="validateState('recipientPurpose')">
                    </b-form-input>
                </div>    
                <div class="col-md-6 col-12">
                    <b-form-file name="attachments" multiple browse-text="Pripojiť prílohu" placeholder="žiadna príloha"
                    v-model="$v.form.attachments.$model" :state="validateState('attachments')">
                    </b-form-file>
                    <div class="custom-invalid-feedback" v-if="$v.form.requestText.$error">
                        Minimálna dĺžka žiadosti je 30 znakov.
                    </div>
                    <div class="custom-invalid-feedback" v-if="$v.form.attachments.filesize === false">
                        Pripojené súbory presiahly maximum {{configHelper.maxAttachmentSizeAsTxt()}}.
                    </div>
                    <div class="custom-invalid-feedback" v-if="$v.form.attachments.filetypes === false">
                        Podporované sú iba tieto typy súborov: {{configHelper.getSupportedAttachmentsAsTxt()}}.
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-sm-12">
                    <b-alert variant="success" class="text-center" :show="applicationSucceed">
                        Vaša žiadosť bola zaregistrovaná.
                    </b-alert>
                    <b-alert variant="danger" class="text-center" :show="applicationError">
                        {{applicationErrorMsg}}
                    </b-alert>
                    <div class="text-center mt-4 mb-2">
                        <b-button type="submit" variant="primary">Odoslať</b-button>
                    </div>
                </div>
            </div>
            
        </div> <!-- we-helped END -->
    </b-form>        
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'
import Ajaxable from '../mixins/Ajaxable';

export default {
    name: 'WeHelpedForm',
    mixins: [validationMixin, Ajaxable],
    props: ['visible'],
    data: function() {
        return {
            applicationSucceed: null,
            applicationError: null,
            applicationErrorMsg: null,
            form: {
                applicantFullname: null,
                applicantEmail: null,
                applicantPhoneNr: null,
                applicantAddress: null,
                recipientFullname: null,
                recipientRelToApplicant: null,
                recipientPurpose: null,
                requestText: null,
                attachments: null
            }
        };
    },
    validations: {
        form: {
            applicantFullname: {
                required,
                minLength: minLength(3)
            },
            applicantEmail: {
                email
            },
            applicantPhoneNr: {
                function(numbr) {
                    if (numbr === null || numbr === undefined) {
                        return true;
                    }
                    numbr = numbr.replace(/\s+/g, '');
                    return numbr.match(/^(\+[0-9]{3})?[0-9 ]{9,}$/) === null ? false : true;
                },
                required
            },
            applicantAddress: {},
            recipientFullname: {
                required,
                minLength: minLength(3)
            },
            recipientRelToApplicant: {},
            recipientPurpose: {},
            requestText: {
                required,
                minLength: minLength(30)
            },
            attachments: {
                'filesize': function(attachments) {                    
                    if (!attachments) {
                        return true;
                    }
                    let filesize = 0;
                    attachments.forEach((_file) => {
                        filesize += _file.size;
                    });
                    if (filesize > this.configHelper.get('maxAttachmentSize')) {
                        return false;
                    }
                    return true;
                },
                'filetypes': function(attachments) {
                    if (!attachments) {
                        return true;
                    }
                    let ret = true;
                    attachments.forEach((_file) => {
                        let fileType = _file.type.toLowerCase();
                        if (!this.configHelper.get('supportedAttachments').includes(fileType)) {
                            ret = false;
                            return;
                        }
                    });

                    return ret;
                }
            }
        }
  },
  methods: {
    validateState(name) {
        let ret = null;
        if (name === null) {
            return true;
        }
        if (this.$v.form[name] !== null) {
            const { $dirty, $error } = this.$v.form[name];
            ret = $dirty ? !$error : null;
        }
        return ret;
    },
    resetForm() {
        Object.entries(this.form).forEach(([key]) => {
            this.form[key] = null;
        });

        this.$nextTick(() => {
            this.$v.$reset();
        });
    },
    onSubmit() {
        this.$v.form.$touch();
        
        if (this.$v.form.$anyError) {
            return;
        }
        
        this.postAjaxDelayed(
            `${process.env.VUE_APP_APIURL}custom-api/v2/create-application`,
            this.form,
            () => {
                this.applicationSucceed = true;
                this.applicationError = false;
                this.resetForm();
            },
            (msg) => {
                this.applicationErrorMsg = msg;
                this.applicationError = true;
                this.applicationSucceed = false;
            }
        );
    },

  },
  created: function() {
      
  }

}
</script>
<style lang="scss">
@import '../scss/wehelpedform';
</style>