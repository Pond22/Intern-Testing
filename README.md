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
└── tsconfig.json
```

## Git Flow

โปรเจกต์นี้ใช้ Git Flow ในการจัดการ branch:
- `main`: Branch หลักที่ใช้สำหรับการปล่อย production
- `develop`: Branch สำหรับการพัฒนาและรวมโค้ดที่สมบูรณ์
- `feature/*`: Branch สำหรับการพัฒนาฟีเจอร์ใหม่
- `release/*`: Branch สำหรับการเตรียมการปล่อยเวอร์ชันใหม่
- `hotfix/*`: Branch สำหรับการแก้ไขบั้คด่วนใน production


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
    
## การสร้าง branch ตามหลักของ Git Flow

1. **สร้าง feature branch**
    ```bash
    git flow feature start <feature_name>
    ```
2. **พัฒนาและ commit โค้ดใน feature branch**
    ```bash
    git add .
    git commit -m "รายละเอียดการ commit"
    ```
3. **รวม feature branch เข้ากับ develop**
    ```bash
    git flow feature finish <feature_name>
    ```
4. **สร้าง release branch**
    ```bash
    git flow release start <version_number>
    git flow release finish <version_number>
    ```
5. **สร้าง hotfix branch**
    ```bash
    git flow hotfix start <hotfix_name>
    git flow hotfix finish <hotfix_name>
    ```
