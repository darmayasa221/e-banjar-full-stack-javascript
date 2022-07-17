const { createContainer } = require('instances-container');

// services
const Requests = require('../Applications/Api/Requests');
const RegisterUserUseCase = require('../Applications/use_case/RegisterUserUseCase');
const UserRepository = require('../Domains/users/UserRepository');
const RequestsApi = require('./Api/RequestsApi');
const UserRepositoryRedux = require('./repository/redux/UserRepositoryRedux');
// use case

const container = createContainer();

container.register([
  {
    key: Requests.name,
    Class: RequestsApi,
  },
  {
    key: UserRepository.name,
    Class: UserRepositoryRedux,
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
          concrete: 'request',
          internal: Requests.name,
        },
        {
          concrete: 'userRepository',
          internal: UserRepository.name,
        },
      ],
    },
  },
]);

module.exports = container;
