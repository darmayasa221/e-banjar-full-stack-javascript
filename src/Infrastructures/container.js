const Container = require('instances-container');
const { useDispatch } = require('react-redux');

// services
const Requests = require('../Applications/Api/Requests');
const RegisterUserUseCase = require('../Applications/use_case/RegisterUserUseCase');
const DomainErrorTranslator = require('../Commons/exceptions/DomainErrorTranslator');
const ErrorRpository = require('../Domains/users/ErrorRepository');
const UserRepository = require('../Domains/users/UserRepository');
const RequestsApi = require('./Api/RequestsApi');
const ErrorRepositoryImplement = require('./repository/error/ErrorRepositoryImplement');
const UserRepositoryRedux = require('./repository/redux/UserRepositoryRedux');
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
]);

module.exports = container;
