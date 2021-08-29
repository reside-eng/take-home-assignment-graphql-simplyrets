const { gql } = require('apollo-server-express');
const server = require('./server');

const GET_PROPERTIES = gql`
  query {
    properties {
      mlsId
    }
  }
`

describe('graphql server', () => {
  it('should get no data with wrong query', async () => {
    const res = await server.executeOperation({query: "wrong"});
    expect(res?.errors).not.toBeUndefined();
    expect(res?.data).toBeUndefined();
  })

  it('should query properties', async () => {
    const res = await server.executeOperation({query: GET_PROPERTIES});
    expect(res?.errors).not.toBeUndefined();
    expect(res?.data).toBeUndefined();
  })

})
