const InvariantError = require('./InvariantError');

const DomainErrorTranslator = {
  translate(error) {
    return DomainErrorTranslator._directories[error.message] || error;
  },
};

DomainErrorTranslator._directories = {
  'USER_REGISTER.NOT_CONTAIN_NEEDED_PROPERT': new InvariantError('registrasi gagal. mohon untuk melengkapi semua form'),
  'USER_REGISTER.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('registrasi gagal. tipe data yang dimasukan tidak sesuai'),
  'USER_REGISTER.KTP_OF_LENGTH_GREETER_THEN_16': new InvariantError('registrasi gagal. jumlah ktp melebihi 16 digit'),
  'USER_LOGIN.NOT_CONTAIN_NEEDED_PROPERTY': new InvariantError('username dan password tidak boleh kosong'),
  'USER_LOGIN.NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('masukkan username dan password dengan data yang benar'),
  'DELETE_AUTHENTICATION_USE_CASE.NOT_CONTAIN_REFRESH_TOKEN': new InvariantError('harus mengirimkan token refresh'),
  'DELETE_AUTHENTICATION_USE_CASE.PAYLOAD_NOT_MEET_DATA_TYPE_SPECIFICATION': new InvariantError('refresh token tidak sesuai'),
};
module.exports = DomainErrorTranslator;
