# 🔥 MySide: Front-End Test
This is a project that serves as test for my application as front-end developer at MySide.

## 🔗 Deployment
The project is hosted at Vercel, you can [access here](https://myside-test.vercel.app).


<img alt="MySide Test App Preview" src="https://github.com/rcrdk/myside-test/blob/main/public/app-presentation.png?raw=true" />

## 🖥️ Features
- **Home:** list paginated products with query and category filters.
- **Product:** show the details of the selected product.

## 🔖 To-do:
- The external API does not provide a query string search options. Until this feature is not implemented, the front-end use memoization to process query search and pagination.
- The external API accepts any number as param when accessing the product page. When accessing with an non-existent id is returned the last product added. By adding an string ID an properly 404 page is shown.

## ⚙️ Usage

**Initial setup:**
```shell
# Clone the project
git clone https://github.com/rcrdk/myside-test.git

# Enter the folder
cd myside-test

# Install dependencies
npm install
```

---

**Setup environment variables file:**
```shell
NEXT_PUBLIC_API_URL="https://fakestoreapi.in/api"
```

---

**IDE Setup:**
It's important to have installed on you IDE important extensions to maintain the code quality. Make sure you have installed:

- ESlint
- Prettier
- EditorConfig

---

**Run project locally**
```shell
npm run dev
# http://localhost:3000
```