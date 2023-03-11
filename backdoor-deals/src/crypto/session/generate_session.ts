import { type CipherGCMTypes , type CipherGCM, createCipheriv, randomBytes } from "crypto";

class SessionKey {

	session_key: CipherGCM;
	session_key_type: CipherGCMTypes;
	session_password: Buffer;
	initialzation_buffer: Buffer;

	constructor(type: CipherGCMTypes) {
		/* I hate this.... */
		this.session_key_type = type;
		this.session_password = randomBytes(256/8);
		this.initialzation_buffer = randomBytes(13);
		this.session_key = createCipheriv(type, this.session_password, this.initialzation_buffer, {
            authTagLength: 16
        });
	}

	get getSessionKey() {
   		return this.session_key
	}
	
	get getSessionKeyType() {
		return this.session_key_type
	}
	
	get getSessionPassword() {
		return this.session_password
	}

};

const CreateKey = new SessionKey('aes-256-gcm');

export { CreateKey };
