// Code generated by Prisma (prisma@1.34.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type Address {
  id: ID!
  type: AddressType
  address1: String!
  address2: String
  city: String
  state: String
  country: String
  zip: String
  effectiveStartDate: DateTime
  effectiveEndDate: DateTime
  member: Member!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type AddressConnection {
  pageInfo: PageInfo!
  edges: [AddressEdge]!
  aggregate: AggregateAddress!
}

input AddressCreateInput {
  id: ID
  type: AddressType
  address1: String!
  address2: String
  city: String
  state: String
  country: String
  zip: String
  effectiveStartDate: DateTime
  effectiveEndDate: DateTime
  member: MemberCreateOneWithoutAddressesInput!
}

input AddressCreateManyWithoutMemberInput {
  create: [AddressCreateWithoutMemberInput!]
  connect: [AddressWhereUniqueInput!]
}

input AddressCreateWithoutMemberInput {
  id: ID
  type: AddressType
  address1: String!
  address2: String
  city: String
  state: String
  country: String
  zip: String
  effectiveStartDate: DateTime
  effectiveEndDate: DateTime
}

type AddressEdge {
  node: Address!
  cursor: String!
}

enum AddressOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  address1_ASC
  address1_DESC
  address2_ASC
  address2_DESC
  city_ASC
  city_DESC
  state_ASC
  state_DESC
  country_ASC
  country_DESC
  zip_ASC
  zip_DESC
  effectiveStartDate_ASC
  effectiveStartDate_DESC
  effectiveEndDate_ASC
  effectiveEndDate_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AddressPreviousValues {
  id: ID!
  type: AddressType
  address1: String!
  address2: String
  city: String
  state: String
  country: String
  zip: String
  effectiveStartDate: DateTime
  effectiveEndDate: DateTime
  createdAt: DateTime!
  updatedAt: DateTime!
}

input AddressScalarWhereInput {
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
  type: AddressType
  type_not: AddressType
  type_in: [AddressType!]
  type_not_in: [AddressType!]
  address1: String
  address1_not: String
  address1_in: [String!]
  address1_not_in: [String!]
  address1_lt: String
  address1_lte: String
  address1_gt: String
  address1_gte: String
  address1_contains: String
  address1_not_contains: String
  address1_starts_with: String
  address1_not_starts_with: String
  address1_ends_with: String
  address1_not_ends_with: String
  address2: String
  address2_not: String
  address2_in: [String!]
  address2_not_in: [String!]
  address2_lt: String
  address2_lte: String
  address2_gt: String
  address2_gte: String
  address2_contains: String
  address2_not_contains: String
  address2_starts_with: String
  address2_not_starts_with: String
  address2_ends_with: String
  address2_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  state: String
  state_not: String
  state_in: [String!]
  state_not_in: [String!]
  state_lt: String
  state_lte: String
  state_gt: String
  state_gte: String
  state_contains: String
  state_not_contains: String
  state_starts_with: String
  state_not_starts_with: String
  state_ends_with: String
  state_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  zip: String
  zip_not: String
  zip_in: [String!]
  zip_not_in: [String!]
  zip_lt: String
  zip_lte: String
  zip_gt: String
  zip_gte: String
  zip_contains: String
  zip_not_contains: String
  zip_starts_with: String
  zip_not_starts_with: String
  zip_ends_with: String
  zip_not_ends_with: String
  effectiveStartDate: DateTime
  effectiveStartDate_not: DateTime
  effectiveStartDate_in: [DateTime!]
  effectiveStartDate_not_in: [DateTime!]
  effectiveStartDate_lt: DateTime
  effectiveStartDate_lte: DateTime
  effectiveStartDate_gt: DateTime
  effectiveStartDate_gte: DateTime
  effectiveEndDate: DateTime
  effectiveEndDate_not: DateTime
  effectiveEndDate_in: [DateTime!]
  effectiveEndDate_not_in: [DateTime!]
  effectiveEndDate_lt: DateTime
  effectiveEndDate_lte: DateTime
  effectiveEndDate_gt: DateTime
  effectiveEndDate_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [AddressScalarWhereInput!]
  OR: [AddressScalarWhereInput!]
  NOT: [AddressScalarWhereInput!]
}

type AddressSubscriptionPayload {
  mutation: MutationType!
  node: Address
  updatedFields: [String!]
  previousValues: AddressPreviousValues
}

input AddressSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AddressWhereInput
  AND: [AddressSubscriptionWhereInput!]
  OR: [AddressSubscriptionWhereInput!]
  NOT: [AddressSubscriptionWhereInput!]
}

enum AddressType {
  MAIL
  BILLING
  EMERGENCY
  PERMANENT
  PRIMARY
}

input AddressUpdateInput {
  type: AddressType
  address1: String
  address2: String
  city: String
  state: String
  country: String
  zip: String
  effectiveStartDate: DateTime
  effectiveEndDate: DateTime
  member: MemberUpdateOneRequiredWithoutAddressesInput
}

input AddressUpdateManyDataInput {
  type: AddressType
  address1: String
  address2: String
  city: String
  state: String
  country: String
  zip: String
  effectiveStartDate: DateTime
  effectiveEndDate: DateTime
}

input AddressUpdateManyMutationInput {
  type: AddressType
  address1: String
  address2: String
  city: String
  state: String
  country: String
  zip: String
  effectiveStartDate: DateTime
  effectiveEndDate: DateTime
}

input AddressUpdateManyWithoutMemberInput {
  create: [AddressCreateWithoutMemberInput!]
  delete: [AddressWhereUniqueInput!]
  connect: [AddressWhereUniqueInput!]
  set: [AddressWhereUniqueInput!]
  disconnect: [AddressWhereUniqueInput!]
  update: [AddressUpdateWithWhereUniqueWithoutMemberInput!]
  upsert: [AddressUpsertWithWhereUniqueWithoutMemberInput!]
  deleteMany: [AddressScalarWhereInput!]
  updateMany: [AddressUpdateManyWithWhereNestedInput!]
}

input AddressUpdateManyWithWhereNestedInput {
  where: AddressScalarWhereInput!
  data: AddressUpdateManyDataInput!
}

input AddressUpdateWithoutMemberDataInput {
  type: AddressType
  address1: String
  address2: String
  city: String
  state: String
  country: String
  zip: String
  effectiveStartDate: DateTime
  effectiveEndDate: DateTime
}

input AddressUpdateWithWhereUniqueWithoutMemberInput {
  where: AddressWhereUniqueInput!
  data: AddressUpdateWithoutMemberDataInput!
}

input AddressUpsertWithWhereUniqueWithoutMemberInput {
  where: AddressWhereUniqueInput!
  update: AddressUpdateWithoutMemberDataInput!
  create: AddressCreateWithoutMemberInput!
}

input AddressWhereInput {
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
  type: AddressType
  type_not: AddressType
  type_in: [AddressType!]
  type_not_in: [AddressType!]
  address1: String
  address1_not: String
  address1_in: [String!]
  address1_not_in: [String!]
  address1_lt: String
  address1_lte: String
  address1_gt: String
  address1_gte: String
  address1_contains: String
  address1_not_contains: String
  address1_starts_with: String
  address1_not_starts_with: String
  address1_ends_with: String
  address1_not_ends_with: String
  address2: String
  address2_not: String
  address2_in: [String!]
  address2_not_in: [String!]
  address2_lt: String
  address2_lte: String
  address2_gt: String
  address2_gte: String
  address2_contains: String
  address2_not_contains: String
  address2_starts_with: String
  address2_not_starts_with: String
  address2_ends_with: String
  address2_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  state: String
  state_not: String
  state_in: [String!]
  state_not_in: [String!]
  state_lt: String
  state_lte: String
  state_gt: String
  state_gte: String
  state_contains: String
  state_not_contains: String
  state_starts_with: String
  state_not_starts_with: String
  state_ends_with: String
  state_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  zip: String
  zip_not: String
  zip_in: [String!]
  zip_not_in: [String!]
  zip_lt: String
  zip_lte: String
  zip_gt: String
  zip_gte: String
  zip_contains: String
  zip_not_contains: String
  zip_starts_with: String
  zip_not_starts_with: String
  zip_ends_with: String
  zip_not_ends_with: String
  effectiveStartDate: DateTime
  effectiveStartDate_not: DateTime
  effectiveStartDate_in: [DateTime!]
  effectiveStartDate_not_in: [DateTime!]
  effectiveStartDate_lt: DateTime
  effectiveStartDate_lte: DateTime
  effectiveStartDate_gt: DateTime
  effectiveStartDate_gte: DateTime
  effectiveEndDate: DateTime
  effectiveEndDate_not: DateTime
  effectiveEndDate_in: [DateTime!]
  effectiveEndDate_not_in: [DateTime!]
  effectiveEndDate_lt: DateTime
  effectiveEndDate_lte: DateTime
  effectiveEndDate_gt: DateTime
  effectiveEndDate_gte: DateTime
  member: MemberWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [AddressWhereInput!]
  OR: [AddressWhereInput!]
  NOT: [AddressWhereInput!]
}

input AddressWhereUniqueInput {
  id: ID
}

type AggregateAddress {
  count: Int!
}

type AggregateMember {
  count: Int!
}

type AggregateProvider {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Member {
  id: ID!
  name: String!
  addresses(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Address!]
  status: MemberStatus
  email: String
  phone: String
  pcp: Provider
  birthDate: DateTime!
  deathDate: DateTime
  createdAt: DateTime!
  updatedAt: DateTime!
}

type MemberConnection {
  pageInfo: PageInfo!
  edges: [MemberEdge]!
  aggregate: AggregateMember!
}

input MemberCreateInput {
  id: ID
  name: String!
  addresses: AddressCreateManyWithoutMemberInput
  status: MemberStatus
  email: String
  phone: String
  pcp: ProviderCreateOneWithoutMembersInput
  birthDate: DateTime!
  deathDate: DateTime
}

input MemberCreateManyWithoutPcpInput {
  create: [MemberCreateWithoutPcpInput!]
  connect: [MemberWhereUniqueInput!]
}

input MemberCreateOneWithoutAddressesInput {
  create: MemberCreateWithoutAddressesInput
  connect: MemberWhereUniqueInput
}

input MemberCreateWithoutAddressesInput {
  id: ID
  name: String!
  status: MemberStatus
  email: String
  phone: String
  pcp: ProviderCreateOneWithoutMembersInput
  birthDate: DateTime!
  deathDate: DateTime
}

input MemberCreateWithoutPcpInput {
  id: ID
  name: String!
  addresses: AddressCreateManyWithoutMemberInput
  status: MemberStatus
  email: String
  phone: String
  birthDate: DateTime!
  deathDate: DateTime
}

type MemberEdge {
  node: Member!
  cursor: String!
}

enum MemberOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  status_ASC
  status_DESC
  email_ASC
  email_DESC
  phone_ASC
  phone_DESC
  birthDate_ASC
  birthDate_DESC
  deathDate_ASC
  deathDate_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type MemberPreviousValues {
  id: ID!
  name: String!
  status: MemberStatus
  email: String
  phone: String
  birthDate: DateTime!
  deathDate: DateTime
  createdAt: DateTime!
  updatedAt: DateTime!
}

input MemberScalarWhereInput {
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
  status: MemberStatus
  status_not: MemberStatus
  status_in: [MemberStatus!]
  status_not_in: [MemberStatus!]
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
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  birthDate: DateTime
  birthDate_not: DateTime
  birthDate_in: [DateTime!]
  birthDate_not_in: [DateTime!]
  birthDate_lt: DateTime
  birthDate_lte: DateTime
  birthDate_gt: DateTime
  birthDate_gte: DateTime
  deathDate: DateTime
  deathDate_not: DateTime
  deathDate_in: [DateTime!]
  deathDate_not_in: [DateTime!]
  deathDate_lt: DateTime
  deathDate_lte: DateTime
  deathDate_gt: DateTime
  deathDate_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [MemberScalarWhereInput!]
  OR: [MemberScalarWhereInput!]
  NOT: [MemberScalarWhereInput!]
}

enum MemberStatus {
  INVALID
  NEW
  PENDING
  ENROLLED
  DISENROLLMENT_PENDING
  DISENROLLED
}

type MemberSubscriptionPayload {
  mutation: MutationType!
  node: Member
  updatedFields: [String!]
  previousValues: MemberPreviousValues
}

input MemberSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MemberWhereInput
  AND: [MemberSubscriptionWhereInput!]
  OR: [MemberSubscriptionWhereInput!]
  NOT: [MemberSubscriptionWhereInput!]
}

input MemberUpdateInput {
  name: String
  addresses: AddressUpdateManyWithoutMemberInput
  status: MemberStatus
  email: String
  phone: String
  pcp: ProviderUpdateOneWithoutMembersInput
  birthDate: DateTime
  deathDate: DateTime
}

input MemberUpdateManyDataInput {
  name: String
  status: MemberStatus
  email: String
  phone: String
  birthDate: DateTime
  deathDate: DateTime
}

input MemberUpdateManyMutationInput {
  name: String
  status: MemberStatus
  email: String
  phone: String
  birthDate: DateTime
  deathDate: DateTime
}

input MemberUpdateManyWithoutPcpInput {
  create: [MemberCreateWithoutPcpInput!]
  delete: [MemberWhereUniqueInput!]
  connect: [MemberWhereUniqueInput!]
  set: [MemberWhereUniqueInput!]
  disconnect: [MemberWhereUniqueInput!]
  update: [MemberUpdateWithWhereUniqueWithoutPcpInput!]
  upsert: [MemberUpsertWithWhereUniqueWithoutPcpInput!]
  deleteMany: [MemberScalarWhereInput!]
  updateMany: [MemberUpdateManyWithWhereNestedInput!]
}

input MemberUpdateManyWithWhereNestedInput {
  where: MemberScalarWhereInput!
  data: MemberUpdateManyDataInput!
}

input MemberUpdateOneRequiredWithoutAddressesInput {
  create: MemberCreateWithoutAddressesInput
  update: MemberUpdateWithoutAddressesDataInput
  upsert: MemberUpsertWithoutAddressesInput
  connect: MemberWhereUniqueInput
}

input MemberUpdateWithoutAddressesDataInput {
  name: String
  status: MemberStatus
  email: String
  phone: String
  pcp: ProviderUpdateOneWithoutMembersInput
  birthDate: DateTime
  deathDate: DateTime
}

input MemberUpdateWithoutPcpDataInput {
  name: String
  addresses: AddressUpdateManyWithoutMemberInput
  status: MemberStatus
  email: String
  phone: String
  birthDate: DateTime
  deathDate: DateTime
}

input MemberUpdateWithWhereUniqueWithoutPcpInput {
  where: MemberWhereUniqueInput!
  data: MemberUpdateWithoutPcpDataInput!
}

input MemberUpsertWithoutAddressesInput {
  update: MemberUpdateWithoutAddressesDataInput!
  create: MemberCreateWithoutAddressesInput!
}

input MemberUpsertWithWhereUniqueWithoutPcpInput {
  where: MemberWhereUniqueInput!
  update: MemberUpdateWithoutPcpDataInput!
  create: MemberCreateWithoutPcpInput!
}

input MemberWhereInput {
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
  addresses_every: AddressWhereInput
  addresses_some: AddressWhereInput
  addresses_none: AddressWhereInput
  status: MemberStatus
  status_not: MemberStatus
  status_in: [MemberStatus!]
  status_not_in: [MemberStatus!]
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
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  pcp: ProviderWhereInput
  birthDate: DateTime
  birthDate_not: DateTime
  birthDate_in: [DateTime!]
  birthDate_not_in: [DateTime!]
  birthDate_lt: DateTime
  birthDate_lte: DateTime
  birthDate_gt: DateTime
  birthDate_gte: DateTime
  deathDate: DateTime
  deathDate_not: DateTime
  deathDate_in: [DateTime!]
  deathDate_not_in: [DateTime!]
  deathDate_lt: DateTime
  deathDate_lte: DateTime
  deathDate_gt: DateTime
  deathDate_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [MemberWhereInput!]
  OR: [MemberWhereInput!]
  NOT: [MemberWhereInput!]
}

input MemberWhereUniqueInput {
  id: ID
}

type Mutation {
  createAddress(data: AddressCreateInput!): Address!
  updateAddress(data: AddressUpdateInput!, where: AddressWhereUniqueInput!): Address
  updateManyAddresses(data: AddressUpdateManyMutationInput!, where: AddressWhereInput): BatchPayload!
  upsertAddress(where: AddressWhereUniqueInput!, create: AddressCreateInput!, update: AddressUpdateInput!): Address!
  deleteAddress(where: AddressWhereUniqueInput!): Address
  deleteManyAddresses(where: AddressWhereInput): BatchPayload!
  createMember(data: MemberCreateInput!): Member!
  updateMember(data: MemberUpdateInput!, where: MemberWhereUniqueInput!): Member
  updateManyMembers(data: MemberUpdateManyMutationInput!, where: MemberWhereInput): BatchPayload!
  upsertMember(where: MemberWhereUniqueInput!, create: MemberCreateInput!, update: MemberUpdateInput!): Member!
  deleteMember(where: MemberWhereUniqueInput!): Member
  deleteManyMembers(where: MemberWhereInput): BatchPayload!
  createProvider(data: ProviderCreateInput!): Provider!
  updateProvider(data: ProviderUpdateInput!, where: ProviderWhereUniqueInput!): Provider
  updateManyProviders(data: ProviderUpdateManyMutationInput!, where: ProviderWhereInput): BatchPayload!
  upsertProvider(where: ProviderWhereUniqueInput!, create: ProviderCreateInput!, update: ProviderUpdateInput!): Provider!
  deleteProvider(where: ProviderWhereUniqueInput!): Provider
  deleteManyProviders(where: ProviderWhereInput): BatchPayload!
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

type Provider {
  id: ID!
  name: String!
  status: ProviderStatus!
  members(where: MemberWhereInput, orderBy: MemberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Member!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type ProviderConnection {
  pageInfo: PageInfo!
  edges: [ProviderEdge]!
  aggregate: AggregateProvider!
}

input ProviderCreateInput {
  id: ID
  name: String!
  status: ProviderStatus!
  members: MemberCreateManyWithoutPcpInput
}

input ProviderCreateOneWithoutMembersInput {
  create: ProviderCreateWithoutMembersInput
  connect: ProviderWhereUniqueInput
}

input ProviderCreateWithoutMembersInput {
  id: ID
  name: String!
  status: ProviderStatus!
}

type ProviderEdge {
  node: Provider!
  cursor: String!
}

enum ProviderOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  status_ASC
  status_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProviderPreviousValues {
  id: ID!
  name: String!
  status: ProviderStatus!
  createdAt: DateTime!
  updatedAt: DateTime!
}

enum ProviderStatus {
  INVALID
  PRACTICING
  ACTIVE
  RETIRED
  DECEASED
}

type ProviderSubscriptionPayload {
  mutation: MutationType!
  node: Provider
  updatedFields: [String!]
  previousValues: ProviderPreviousValues
}

input ProviderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProviderWhereInput
  AND: [ProviderSubscriptionWhereInput!]
  OR: [ProviderSubscriptionWhereInput!]
  NOT: [ProviderSubscriptionWhereInput!]
}

input ProviderUpdateInput {
  name: String
  status: ProviderStatus
  members: MemberUpdateManyWithoutPcpInput
}

input ProviderUpdateManyMutationInput {
  name: String
  status: ProviderStatus
}

input ProviderUpdateOneWithoutMembersInput {
  create: ProviderCreateWithoutMembersInput
  update: ProviderUpdateWithoutMembersDataInput
  upsert: ProviderUpsertWithoutMembersInput
  delete: Boolean
  disconnect: Boolean
  connect: ProviderWhereUniqueInput
}

input ProviderUpdateWithoutMembersDataInput {
  name: String
  status: ProviderStatus
}

input ProviderUpsertWithoutMembersInput {
  update: ProviderUpdateWithoutMembersDataInput!
  create: ProviderCreateWithoutMembersInput!
}

input ProviderWhereInput {
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
  status: ProviderStatus
  status_not: ProviderStatus
  status_in: [ProviderStatus!]
  status_not_in: [ProviderStatus!]
  members_every: MemberWhereInput
  members_some: MemberWhereInput
  members_none: MemberWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [ProviderWhereInput!]
  OR: [ProviderWhereInput!]
  NOT: [ProviderWhereInput!]
}

input ProviderWhereUniqueInput {
  id: ID
}

type Query {
  address(where: AddressWhereUniqueInput!): Address
  addresses(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Address]!
  addressesConnection(where: AddressWhereInput, orderBy: AddressOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AddressConnection!
  member(where: MemberWhereUniqueInput!): Member
  members(where: MemberWhereInput, orderBy: MemberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Member]!
  membersConnection(where: MemberWhereInput, orderBy: MemberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MemberConnection!
  provider(where: ProviderWhereUniqueInput!): Provider
  providers(where: ProviderWhereInput, orderBy: ProviderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Provider]!
  providersConnection(where: ProviderWhereInput, orderBy: ProviderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProviderConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  address(where: AddressSubscriptionWhereInput): AddressSubscriptionPayload
  member(where: MemberSubscriptionWhereInput): MemberSubscriptionPayload
  provider(where: ProviderSubscriptionWhereInput): ProviderSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
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
  email: String
  name: String
}

input UserUpdateManyMutationInput {
  email: String
  name: String
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
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`