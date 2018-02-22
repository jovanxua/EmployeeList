//Schema
const EmployeeSchema = {
  name: 'Employee',
  properties: {
    firstname:  'string',
    middlename: 'string',
    lastname: 'string',
    birthday: {type: 'date'},
    address: 'string',
    position: 'string',
    salary: {type: 'double'},
  }
};

export default EmployeeSchema;