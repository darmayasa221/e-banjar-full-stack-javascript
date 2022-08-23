const LoginUserUseCase = require('@Applications/use_case/LoginUserUseCase');
const RegisterUserUseCase = require('@Applications/use_case/RegisterUserUseCase');
const DomainErrorTranslator = require('@Commons/exceptions/DomainErrorTranslator');
const AuthorizationUseCase = require('Applications/use_case/AuthorizationUseCase');
const LogoutUserUseCase = require('@Applications/use_case/LogoutUserUseCase');
const AuthenticationRepositoryWebStorage = require('./repository/webStorage/AuthenticationRepositoryWebStorage');
const UserRepositoryApi = require('./repository/api/UserRepositoryApi');
const API_ENDPOINT = require('./api/ApiEndpoint');
// service
const userRepository = new UserRepositoryApi(API_ENDPOINT);
const authenticationRepository = new AuthenticationRepositoryWebStorage();
// Appliacation
const logoutUserUseCase = new LogoutUserUseCase({ userRepository, authenticationRepository, domainErrorTranslator: DomainErrorTranslator });
const authorizationUseCase = new AuthorizationUseCase({ userRepository, authenticationRepository, domainErrorTranslator: DomainErrorTranslator });
const loginUserUseCase = new LoginUserUseCase({ userRepository, authenticationRepository, domainErrorTranslator: DomainErrorTranslator });
const registerUserUseCase = new RegisterUserUseCase({ userRepository, domainErrorTranslator: DomainErrorTranslator });
const container = {
  loginUserUseCase,
  logoutUserUseCase,
  registerUserUseCase,
  authorizationUseCase,
};

module.exports = container;
