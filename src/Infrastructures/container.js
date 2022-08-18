const Container = require('instances-container');
const LoginUserUseCase = require('../Applications/use_case/LoginUserUseCase');
const RegisterUserUseCase = require('../Applications/use_case/RegisterUserUseCase');
const UserRepository = require('../Domains/users/UserRepository');
const UserRepositoryApi = require('./repository/api/UserRepositoryApi');
const ApiEndpoint = require('./api/ApiEndpoint');
const DomainErrorTranslator = require('../Commons/exceptions/DomainErrorTranslator');
const AuthenticationRepository = require('../Domains/authentications/AuthenticationRepository');
const AuthenticationRepositoryWebStorage = require('./repository/webStorage/AuthenticationRepositoryWebStorage');
const GetUserByKtpUseCase = require('../Applications/use_case/GetUserByKtpUseCase');
const LogoutUserUseCase = require('../Applications/use_case/LogoutUserUseCase');

const container = Container.createContainer();

container.register([
  {
    key: AuthenticationRepository.name,
    Class: AuthenticationRepositoryWebStorage,
  },
  {
    key: UserRepository.name,
    Class: UserRepositoryApi,
    parameter: {
      dependencies: [
        {
          concrete: ApiEndpoint,
        },
      ],
    },
  },
]);

container.register([
  {
    key: RegisterUserUseCase.name,
    Class: RegisterUserUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'userRepository',
          internal: UserRepository.name,
        },
        {
          name: 'domainErrorTranslator',
          concrete: DomainErrorTranslator,
        },
      ],
    },
  },
  {
    key: LoginUserUseCase.name,
    Class: LoginUserUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'userRepository',
          internal: UserRepository.name,
        },
        {
          name: 'domainErrorTranslator',
          concrete: DomainErrorTranslator,
        },
        {
          name: 'authenticationRepository',
          internal: AuthenticationRepository.name,
        },
      ],
    },
  },
  {
    key: GetUserByKtpUseCase.name,
    Class: GetUserByKtpUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'userRepository',
          internal: UserRepository.name,
        },
        {
          name: 'domainErrorTranslator',
          concrete: DomainErrorTranslator,
        },
        {
          name: 'authenticationRepository',
          internal: AuthenticationRepository.name,
        },
      ],
    },
  },
  {
    key: LogoutUserUseCase.name,
    Class: LogoutUserUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'userRepository',
          internal: UserRepository.name,
        },
        {
          name: 'domainErrorTranslator',
          concrete: DomainErrorTranslator,
        },
        {
          name: 'authenticationRepository',
          internal: AuthenticationRepository.name,
        },
      ],
    },
  },
]);

module.exports = container;
