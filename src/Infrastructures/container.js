const Container = require('instances-container');
const LoginUserUseCase = require('../Applications/use_case/LoginUserUseCase');
const RegisterUserUseCase = require('../Applications/use_case/RegisterUserUseCase');
const UserRepository = require('../Domains/users/UserRepository');
const UserRepositoryApi = require('./repository/api/UserRepositoryApi');
const ApiEndpoint = require('./api/ApiEndpoint');
const DomainErrorTranslator = require('../Commons/exceptions/DomainErrorTranslator');

const container = Container.createContainer();

container.register([
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
      ],
    },
  },
]);

module.exports = container;
