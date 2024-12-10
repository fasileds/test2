# Fastify API with Prisma

This project is a simple Fastify API that interacts with a PostgreSQL database using Prisma ORM. The API provides two endpoints:

1. **POST `/api/register`**: Used to register a new user by creating a new record in the `userList` table.
2. **GET `/api/usercount`**: Retrieves the total number of users in the `userList` table.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 16 or higher.
- **PostgreSQL**: A running PostgreSQL instance, or any other supported database.
- **Prisma**: Prisma Client is used to interact with the database.

## Setup

### 1. Clone the repository

Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/fastify-prisma-api.git
cd fastify-prisma-api
npm install

DATABASE_URL="postgresql://username:password@localhost:5432/testdb?schema=public"
npx prisma generate
npx prisma migrate dev --name init
npm start

```
