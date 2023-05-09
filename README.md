# pnpm-workspace-tutorial

: pnpm workspace를 사용한 monorepo tutorial

<br/>

# script

### install

```bash
pnpm i
```

### 실행

```bash
pnpm build:comp
pnpm dev:app
```

### 특정 프로젝트에 라이브러리 추가

```bash
pnpm add --filter <package name> <추가하려는 라이브러리>
```

<br/>

# 구조

- projects: 실제 서비스되는 어플리케이션 폴더
- packages: 공통 모듈로 사용되는 라이브러리성 폴더

```bash
├── .vscode
├── packages
│  ├── component
│  └── tailwind-config
└── projects
  └── app
```
