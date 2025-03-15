# 🔥 MySide: Front-End Test
This is a project that serves as test for my application as front-end developer at MySide.

<img alt="MySide Test App Preview" src="https://github.com/rcrdk/myside-test/blob/main/public/app-presentation.png?raw=true" />

## 🔗 Deployment

[<img alt="Open Project Preview" src="https://img.shields.io/badge/-Open%20Project%20Preview-000000?style=for-the-badge&logo=vercel" />](https://myside-test.vercel.app)


## 🖥️ Features
- **Home:** Display a paginated list of products with category and search filters.
- **Product:** Show detailed information about the selected item.
- **Cart:** View and manage selected products in a list.

## ⚙️ Usage

### 1️⃣ Initial setup:
Enter in your terminal and follow these steps:

```shell
# Clone the project
git clone https://github.com/rcrdk/myside-test.git

# Enter the folder or open your 
cd myside-test

# Install dependencies
npm install
```

> [!IMPORTANT]
> It's important to have installed on your IDE all necessary extensions to maintain the code quality. Make sure you have installed: **ESlint, Prettier and EditorConfig.**

---

### 2️⃣ Environment variables:
You can find a base `.env.example` in projects base file tree. 

```shell
NEXT_PUBLIC_API_URL="https://fakestoreapi.in/api"
```

> [!TIP]
> Create a `.env.local` and a `.env.test.local` for testing purposes.

> [!IMPORTANT]
> Setup your variables also on `.github/workflows/vitest.yaml` file for running your tests correctly during CI. You can setup [GitHub Actions Secrets](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables) in case of using private keys.

---

## 3️⃣ Practical usage:
You can run the project locally and it should be available at http://localhost:3000

```shell
npm run dev
```

---

## 4️⃣ Testing:
Run your tests locally using Vitest:

```shell
# Watch
npm run test

# Run once (CI)
npm run test:ci
```

Additional commands relative to code checking:

```shell
# ESlint corrections:
npm run lint
npm run lint:fix

# Prettier formatting:
npm run format
npm run format:check

# Typescript file checking:
npm run test:ts
```

---

## 🔖 To-do:
- The external API does not provide a query string search options. Until this feature is not implemented, the front-end use memoization to process query search and pagination.
- The external API accepts any number as param when accessing the product page. When accessing with an non-existent id is returned the last product added. By adding an string ID an properly 404 page is shown.
- Create tests using Vitest and React Testing Library.