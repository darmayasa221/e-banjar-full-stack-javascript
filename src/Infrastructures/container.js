const Container = require('instances-container');
const { useDispatch } = require('react-redux');

// services
const Requests = require('../Applications/Api/Requests');
const LoginUserUseCase = require('../Applications/use_case/LoginUserUseCase');
const RegisterUserUseCase = require('../Applications/use_case/RegisterUserUseCase');
const DomainErrorTranslator = require('../Commons/exceptions/DomainErrorTranslator');
const ErrorRpository = require('../Domains/users/ErrorRepository');
const UserRepository = require('../Domains/users/UserRepository');
// use case

const container = Container.createContainer();

container.register([
  {
    key: Requests.name,
    Class: RequestsApi,
  },
  {
    key: UserRepository.name,
    Class: UserRepositoryRedux,
    parameter: {
      dependencies: [
        {
          concrete: useDispatch,
        },
      ],
    },
  },
  {
    key: ErrorRpository.name,
    Class: ErrorRepositoryImplement,
    parameter: {
      injectType: 'parameter',
      dependencies: [
        {
          concrete: DomainErrorTranslator,
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
          name: 'request',
          internal: Requests.name,
        },
        {
          name: 'userRepository',
          internal: UserRepository.name,
        },
        {
          name: 'errorRepository',
          internal: ErrorRpository.name,
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
          name: 'request',
          internal: Requests.name,
        },
        {
          name: 'errorRepository',
          internal: ErrorRpository.name,
        },
        {
          name: 'userRepository',
          internal: UserRepository.name,
        },
      ],
    },
  },
]);

module.exports = container;
