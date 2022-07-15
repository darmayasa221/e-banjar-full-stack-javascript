const DomainErrorTranslator = require('../DomainErrorTranslator');
const InvariantError = require('../InvariantError');

describe('DomainErrorTranslator', () => {
  it('should translate error correctly', () => {
    expect(DomainErrorTranslator.translate(new Error('USER_REGISTER.NOT_CONTAIN_NEEDED_PROPERT')))
      .toStrictEqual(new InvariantError('registrasi gagal. mohon untuk melengkapi semua form'));
    expect(DomainErrorTranslator.translate(new Error('USER_REGISTER.NOT_MEET_DATA_TYPE_SPECIFICATION')))
      .toStrictEqual(new InvariantError('registrasi gagal. tipe data yang dimasukan tidak sesuai'));
    expect(DomainErrorTranslator.translate(new Error('USER_REGISTER.KTP_OF_LENGTH_GREETER_THEN_16')))
      .toStrictEqual(new InvariantError('registrasi gagal. jumlah ktp melebihi 16 digit'));
  });
  it('should return original error when error message is not needed to translate', () => {
    // Arrange
    const error = new Error('some_error_message');
    // Action
    const translatedError = DomainErrorTranslator.translate(error);
    // Assert
    expect(translatedError).toStrictEqual(error);
  });
});
