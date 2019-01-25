module.exports = {
        typeDefs: /* GraphQL */ `type AggregateBrighten {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Brighten {
  id: ID!
  createdAt: DateTime!
  text: String!
  sender: User!
  receiver: User!
  revealed: Boolean!
}

type BrightenConnection {
  pageInfo: PageInfo!
  edges: [BrightenEdge]!
  aggregate: AggregateBrighten!
}

input BrightenCreateInput {
  text: String!
  sender: UserCreateOneWithoutSentBrightensInput!
  receiver: UserCreateOneWithoutReceivedBrightensInput!
  revealed: Boolean
}

input BrightenCreateManyWithoutReceiverInput {
  create: [BrightenCreateWithoutReceiverInput!]
  connect: [BrightenWhereUniqueInput!]
}

input BrightenCreateManyWithoutSenderInput {
  create: [BrightenCreateWithoutSenderInput!]
  connect: [BrightenWhereUniqueInput!]
}

input BrightenCreateWithoutReceiverInput {
  text: String!
  sender: UserCreateOneWithoutSentBrightensInput!
  revealed: Boolean
}

input BrightenCreateWithoutSenderInput {
  text: String!
  receiver: UserCreateOneWithoutReceivedBrightensInput!
  revealed: Boolean
}

type BrightenEdge {
  node: Brighten!
  cursor: String!
}

enum BrightenOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  text_ASC
  text_DESC
  revealed_ASC
  revealed_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BrightenPreviousValues {
  id: ID!
  createdAt: DateTime!
  text: String!
  revealed: Boolean!
}

input BrightenScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  revealed: Boolean
  revealed_not: Boolean
  AND: [BrightenScalarWhereInput!]
  OR: [BrightenScalarWhereInput!]
  NOT: [BrightenScalarWhereInput!]
}

type BrightenSubscriptionPayload {
  mutation: MutationType!
  node: Brighten
  updatedFields: [String!]
  previousValues: BrightenPreviousValues
}

input BrightenSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BrightenWhereInput
  AND: [BrightenSubscriptionWhereInput!]
  OR: [BrightenSubscriptionWhereInput!]
  NOT: [BrightenSubscriptionWhereInput!]
}

input BrightenUpdateInput {
  text: String
  sender: UserUpdateOneRequiredWithoutSentBrightensInput
  receiver: UserUpdateOneRequiredWithoutReceivedBrightensInput
  revealed: Boolean
}

input BrightenUpdateManyDataInput {
  text: String
  revealed: Boolean
}

input BrightenUpdateManyMutationInput {
  text: String
  revealed: Boolean
}

input BrightenUpdateManyWithoutReceiverInput {
  create: [BrightenCreateWithoutReceiverInput!]
  delete: [BrightenWhereUniqueInput!]
  connect: [BrightenWhereUniqueInput!]
  disconnect: [BrightenWhereUniqueInput!]
  update: [BrightenUpdateWithWhereUniqueWithoutReceiverInput!]
  upsert: [BrightenUpsertWithWhereUniqueWithoutReceiverInput!]
  deleteMany: [BrightenScalarWhereInput!]
  updateMany: [BrightenUpdateManyWithWhereNestedInput!]
}

input BrightenUpdateManyWithoutSenderInput {
  create: [BrightenCreateWithoutSenderInput!]
  delete: [BrightenWhereUniqueInput!]
  connect: [BrightenWhereUniqueInput!]
  disconnect: [BrightenWhereUniqueInput!]
  update: [BrightenUpdateWithWhereUniqueWithoutSenderInput!]
  upsert: [BrightenUpsertWithWhereUniqueWithoutSenderInput!]
  deleteMany: [BrightenScalarWhereInput!]
  updateMany: [BrightenUpdateManyWithWhereNestedInput!]
}

input BrightenUpdateManyWithWhereNestedInput {
  where: BrightenScalarWhereInput!
  data: BrightenUpdateManyDataInput!
}

input BrightenUpdateWithoutReceiverDataInput {
  text: String
  sender: UserUpdateOneRequiredWithoutSentBrightensInput
  revealed: Boolean
}

input BrightenUpdateWithoutSenderDataInput {
  text: String
  receiver: UserUpdateOneRequiredWithoutReceivedBrightensInput
  revealed: Boolean
}

input BrightenUpdateWithWhereUniqueWithoutReceiverInput {
  where: BrightenWhereUniqueInput!
  data: BrightenUpdateWithoutReceiverDataInput!
}

input BrightenUpdateWithWhereUniqueWithoutSenderInput {
  where: BrightenWhereUniqueInput!
  data: BrightenUpdateWithoutSenderDataInput!
}

input BrightenUpsertWithWhereUniqueWithoutReceiverInput {
  where: BrightenWhereUniqueInput!
  update: BrightenUpdateWithoutReceiverDataInput!
  create: BrightenCreateWithoutReceiverInput!
}

input BrightenUpsertWithWhereUniqueWithoutSenderInput {
  where: BrightenWhereUniqueInput!
  update: BrightenUpdateWithoutSenderDataInput!
  create: BrightenCreateWithoutSenderInput!
}

input BrightenWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  text: String
  text_not: String
  text_in: [String!]
  text_not_in: [String!]
  text_lt: String
  text_lte: String
  text_gt: String
  text_gte: String
  text_contains: String
  text_not_contains: String
  text_starts_with: String
  text_not_starts_with: String
  text_ends_with: String
  text_not_ends_with: String
  sender: UserWhereInput
  receiver: UserWhereInput
  revealed: Boolean
  revealed_not: Boolean
  AND: [BrightenWhereInput!]
  OR: [BrightenWhereInput!]
  NOT: [BrightenWhereInput!]
}

input BrightenWhereUniqueInput {
  id: ID
}

scalar DateTime

scalar Long

type Mutation {
  createBrighten(data: BrightenCreateInput!): Brighten!
  updateBrighten(data: BrightenUpdateInput!, where: BrightenWhereUniqueInput!): Brighten
  updateManyBrightens(data: BrightenUpdateManyMutationInput!, where: BrightenWhereInput): BatchPayload!
  upsertBrighten(where: BrightenWhereUniqueInput!, create: BrightenCreateInput!, update: BrightenUpdateInput!): Brighten!
  deleteBrighten(where: BrightenWhereUniqueInput!): Brighten
  deleteManyBrightens(where: BrightenWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  brighten(where: BrightenWhereUniqueInput!): Brighten
  brightens(where: BrightenWhereInput, orderBy: BrightenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Brighten]!
  brightensConnection(where: BrightenWhereInput, orderBy: BrightenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BrightenConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  brighten(where: BrightenSubscriptionWhereInput): BrightenSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  createdAt: DateTime!
  name: String!
  instagram: String
  email: String
  sentBrightens(where: BrightenWhereInput, orderBy: BrightenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Brighten!]
  receivedBrightens(where: BrightenWhereInput, orderBy: BrightenOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Brighten!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  instagram: String
  email: String
  sentBrightens: BrightenCreateManyWithoutSenderInput
  receivedBrightens: BrightenCreateManyWithoutReceiverInput
}

input UserCreateOneWithoutReceivedBrightensInput {
  create: UserCreateWithoutReceivedBrightensInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutSentBrightensInput {
  create: UserCreateWithoutSentBrightensInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutReceivedBrightensInput {
  name: String!
  instagram: String
  email: String
  sentBrightens: BrightenCreateManyWithoutSenderInput
}

input UserCreateWithoutSentBrightensInput {
  name: String!
  instagram: String
  email: String
  receivedBrightens: BrightenCreateManyWithoutReceiverInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  name_ASC
  name_DESC
  instagram_ASC
  instagram_DESC
  email_ASC
  email_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  name: String!
  instagram: String
  email: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  instagram: String
  email: String
  sentBrightens: BrightenUpdateManyWithoutSenderInput
  receivedBrightens: BrightenUpdateManyWithoutReceiverInput
}

input UserUpdateManyMutationInput {
  name: String
  instagram: String
  email: String
}

input UserUpdateOneRequiredWithoutReceivedBrightensInput {
  create: UserCreateWithoutReceivedBrightensInput
  update: UserUpdateWithoutReceivedBrightensDataInput
  upsert: UserUpsertWithoutReceivedBrightensInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutSentBrightensInput {
  create: UserCreateWithoutSentBrightensInput
  update: UserUpdateWithoutSentBrightensDataInput
  upsert: UserUpsertWithoutSentBrightensInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutReceivedBrightensDataInput {
  name: String
  instagram: String
  email: String
  sentBrightens: BrightenUpdateManyWithoutSenderInput
}

input UserUpdateWithoutSentBrightensDataInput {
  name: String
  instagram: String
  email: String
  receivedBrightens: BrightenUpdateManyWithoutReceiverInput
}

input UserUpsertWithoutReceivedBrightensInput {
  update: UserUpdateWithoutReceivedBrightensDataInput!
  create: UserCreateWithoutReceivedBrightensInput!
}

input UserUpsertWithoutSentBrightensInput {
  update: UserUpdateWithoutSentBrightensDataInput!
  create: UserCreateWithoutSentBrightensInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  instagram: String
  instagram_not: String
  instagram_in: [String!]
  instagram_not_in: [String!]
  instagram_lt: String
  instagram_lte: String
  instagram_gt: String
  instagram_gte: String
  instagram_contains: String
  instagram_not_contains: String
  instagram_starts_with: String
  instagram_not_starts_with: String
  instagram_ends_with: String
  instagram_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  sentBrightens_every: BrightenWhereInput
  sentBrightens_some: BrightenWhereInput
  sentBrightens_none: BrightenWhereInput
  receivedBrightens_every: BrightenWhereInput
  receivedBrightens_some: BrightenWhereInput
  receivedBrightens_none: BrightenWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  instagram: String
  email: String
}
`
      }
    