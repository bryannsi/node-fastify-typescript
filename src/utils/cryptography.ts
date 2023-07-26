import crypto from "node:crypto";

const KeyEncript = 'SGCDTI03-09-3-.NET';
const bytIV = Buffer.from([121, 241, 10, 1, 132, 74, 11, 39, 255, 91, 45, 78, 14, 211, 22, 62]);


const EncryptString128Bit = (vstrTextToBeEncrypted: string): string => {
  try {
    let vstrEncryptionKey: string = KeyEncript
    //Strip any null character from string to be encrypted
    vstrTextToBeEncrypted = StripNullCharacters(vstrTextToBeEncrypted);
    //Value must be within ASCII range (i.e., no DBCS chars)
    const bytValue = Buffer.from(vstrTextToBeEncrypted, 'ascii');
    // Encryption Key must be 256 bits long (32 bytes)
    // If it is longer than 32 bytes, it will be truncated.
    // If it is shorter than 32 bytes, it will be padded with upper-case Xs.
    let intLength = Buffer.byteLength(vstrEncryptionKey, 'ascii');
    if (intLength >= 32) {
      vstrEncryptionKey = vstrEncryptionKey.slice(0, 32);
    } else {
      const intRemaining = 32 - intLength;
      vstrEncryptionKey = vstrEncryptionKey + 'X'.repeat(intRemaining);
    }
    const bytKey = Buffer.from(vstrEncryptionKey, 'ascii');

    const cipher = crypto.createCipheriv('aes-256-cbc', bytKey, bytIV);

    const encryptedChunks = [cipher.update(bytValue)];
    encryptedChunks.push(cipher.final());
    let bytEncoded = Buffer.concat(encryptedChunks);

    // Return encrypted value (converted from a byte Array to a base64 string).
    return bytEncoded.toString('base64');
  } catch (error) {
    console.error(`Ha ocurrido un error en la validación: ${error}`);
    return ""; // Or handle the error accordingly
  }
};

const DecryptString128Bit = (vstrStringToBeDecrypted: string): string => {
  try {
    let vstrDecryptionKey: string = KeyEncript;
    const bytDataToBeDecrypted = Buffer.from(vstrStringToBeDecrypted, 'base64');
    const objRijndaelManaged = crypto.createDecipheriv('aes-256-cbc', padKey(vstrDecryptionKey), bytIV);

    const decryptedChunks: any[] = [];
    decryptedChunks.push(objRijndaelManaged.update(bytDataToBeDecrypted));
    decryptedChunks.push(objRijndaelManaged.final());
    let decrypted = Buffer.concat(decryptedChunks).toString('ascii');
    // Return decrypted value after stripping null characters
    return StripNullCharacters(decrypted);
  } catch (error) {
    console.error(`Ha ocurrido un error en la validación: ${error}`);
    return ""; // Or handle the error accordingly
  }
};

const padKey = (key: string): Buffer => {
  // If the key is longer than 32 bytes, truncate it
  if (Buffer.byteLength(key, 'ascii') >= 32) {
    return Buffer.from(key.slice(0, 32), 'ascii');
  }

  // If the key is shorter than 32 bytes, pad it with 'X'
  const remainingBytes = 32 - Buffer.byteLength(key, 'ascii');
  return Buffer.from(key + 'X'.repeat(remainingBytes), 'ascii');
};


function StripNullCharacters(inputString: string) {
  return inputString.replace(/\0/g, '');
}


export { EncryptString128Bit, DecryptString128Bit }