// This imports necessary types and functions from the 'crypto' library
import { type CipherGCMTypes , type CipherGCM, createCipheriv, randomBytes } from "crypto";

// This class represents a session key used for encryption and decryption
class SessionKey {

    // Properties of the class
    session_key: CipherGCM; // The actual session key used for encryption/decryption
    session_key_type: CipherGCMTypes; // The type of session key (e.g. 'aes-256-gcm')
    session_password: Buffer; // The password used to generate the session key
    initialzation_buffer: Buffer; // The initialization vector used for encryption/decryption

    // Constructor method, which sets up the session key with the given type
    constructor(type: CipherGCMTypes) {
        // Set the session key type to the given type
        this.session_key_type = type;
        // Generate a random password of length 256 bits (32 bytes)
        this.session_password = randomBytes(256/8);
        // Generate a random initialization vector of length 13 bytes
        this.initialzation_buffer = randomBytes(13);
        // Create a session key using the given type, password, and initialization vector
        // The authTagLength option sets the length of the authentication tag to 16 bytes
        this.session_key = createCipheriv(type, this.session_password, this.initialzation_buffer, {
            authTagLength: 16
        });
    }

    // Getter method to retrieve the session key
    get getSessionKey() {
        return this.session_key
    }
    
    // Getter method to retrieve the session key type
    get getSessionKeyType() {
        return this.session_key_type
    }
    
    // Getter method to retrieve the session password
    get getSessionPassword() {
        return this.session_password
    }

};

// Create a new instance of the SessionKey class with 'aes-256-gcm' as the key type
const CreateKey = new SessionKey('aes-256-gcm')

// Export the CreateKey instance for use in other modules
export { CreateKey };
