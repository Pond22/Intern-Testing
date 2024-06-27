## Intern Testing (Fibonacci Sequence & Laundromat company)

## Description
โปรเจคนี้ถูกจัดทำขึ้นเพื่อทดสอบการสร้าง API ระบบ Fibonacci Sequence & Laundromat company โดยใช้ Nest.js ในการพัฒนา

[Project Repo.](https://github.com/Pond22/Intern-Testing)

## โครงสร้างโปรเจกต์

```plaintext
Intern-Testing/
├── src/
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── fibonacci/
│   │   ├── fibonacci.controller.spec.ts
│   │   ├── fibonacci.controller.ts
│   │   ├── fibonacci.service.ts
│   └── laundromat/
│       ├── laundromat.controller.spec.ts
│       ├── laundromat.controller.ts
│       ├── laundromat.service.ts
├── test/
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── README.md
├── nest-cli.json
├── package-lock.json
├── package.json
├── tsconfig.build.json
└── tsconfig.json```

## Git Flow

โปรเจกต์นี้ใช้ Git Flow ในการจัดการ branch:
- `main`: Branch หลักที่ใช้สำหรับการปล่อย production
- `develop`: Branch สำหรับการพัฒนาและรวมโค้ดที่สมบูรณ์


## ขั้นตอนการ build และ run

1. **การโคลนโปรเจกต์จาก Git Repository**
    ```bash
    git clone <https://github.com/Pond22/Intern-Testing>
    cd <project_directory>
    ```

2. **ติดตั้ง dependencies** 
    ```bash
    npm install
    ```

3. **รันโปรเจกต์** 
    ```bash
    npm start
    ```
      **รันโปรเจกต์ด้วยโหมดนักพัฒนา**
    ```bash
    npm run start:dev
    ```
4. **ทดสอบโปรเจกต์**
    ```bash
    npm test
    ```


