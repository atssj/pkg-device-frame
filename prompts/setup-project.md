# Device Frame JS - Project Setup

## Project Overview
This guide sets up a framework-agnostic device frame component library with framework-specific bindings. The library is tree-shakable and supports Svelte, React, Vue, and vanilla JS.

## Project Structure
```
.
├── packages/
│   ├── core/           # Core device frame logic
│   ├── svelte/         # Svelte components
│   ├── react/          # React components
│   ├── vue/            # Vue components
│   └── vanilla/        # Vanilla JS implementation
├── examples/           # Example projects
├── .github/           # GitHub workflows
├── .vscode/           # VSCode settings
└── package.json        # Root package.json
```

## Setup Commands

1. **Initialize Project**
```bash
# Initialize git if not already done
if [ ! -d ".git" ]; then
  git init
  echo "node_modules" > .gitignore
  echo "dist" >> .gitignore
  echo ".DS_Store" >> .gitignore
  echo "*.local" >> .gitignore
  echo "*.log" >> .gitignore
  echo "coverage" >> .gitignore
  echo ".turbo" >> .gitignore
fi

# Initialize package.json if not exists
if [ ! -f "package.json" ]; then
  bun init -y
  
  # Create basic README if not exists
  if [ ! -f "README.md" ]; then
    echo "# Device Frame JS" > README.md
    echo "A framework-agnostic device frame component library" >> README.md
  fi
fi
```

2. **Setup Workspace**
```bash
# Install root dependencies
bun add -D typescript @types/node --root

# Create workspace directories if they don't exist
mkdir -p packages/core
mkdir -p packages/svelte
mkdir -p packages/react
mkdir -p packages/vue
mkdir -p packages/vanilla
mkdir -p examples
```

3. **Core Package Setup**
```bash
(
  cd packages/core
  if [ ! -f "package.json" ]; then
    bun init -y
    bun add -D typescript @types/node
    bun tsc --init
  fi
)

4. **Svelte Package Setup**
```bash
if [ ! -d "packages/svelte/node_modules" ]; then
  (
    cd packages/svelte
    bun create vite . --template svelte-ts
    bun add -D svelte @sveltejs/vite-plugin-svelte
  )
fi
```

5. **React Package Setup**
```bash
if [ ! -d "packages/react/node_modules" ]; then
  (
    cd packages/react
    bun create vite . --template react-ts
    bun add -D @types/react @types/react-dom
  )
fi
```

6. **Vue Package Setup**
```bash
if [ ! -d "packages/vue/node_modules" ]; then
  (
    cd packages/vue
    bun create vite . --template vue-ts
    bun add -D @vitejs/plugin-vue @vue/compiler-sfc
  )
fi
```

7. **Root Configuration**
```bash
# Create root tsconfig if not exists
if [ ! -f "tsconfig.json" ]; then
  cat > tsconfig.json << 'EOL'
{
  "compilerOptions": {
    "composite": true,
    "declaration": true,
    "declarationMap": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "node",
    "skipLibCheck": true,
    "strict": true,
    "target": "ESNext",
    "baseUrl": ".",
    "paths": {
      "@device-frame/core": ["./packages/core/src"],
      "@device-frame/svelte": ["./packages/svelte/src"],
      "@device-frame/react": ["./packages/react/src"],
      "@device-frame/vue": ["./packages/vue/src"]
    }
  },
  "include": ["packages/**/*"],
  "exclude": ["node_modules", "dist"]
}
EOL

# Update root package.json
cat > package.json << 'EOL'
{
  "name": "device-frame-js",
  "private": true,
  "workspaces": ["packages/*", "examples/*"],
  "scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev",
    "test": "turbo run test",
    "lint": "turbo run lint",
    "format": "prettier --write \"**/*.{ts,tsx,md}\""
  },
  "devDependencies": {
    "turbo": "latest",
    "typescript": "^5.0.0",
    "prettier": "latest",
    "@types/node": "^20.0.0"
  }
}
EOL

# Install Turbo for monorepo management
bun add -D turbo

# Create initial commit if in a git repository
if [ -d ".git" ]; then
  git add .
  git commit -m "Initial commit: Project structure setup"
fi
```

## Next Steps
1. Set up CI/CD with GitHub Actions
2. Configure testing with Vitest
3. Add Storybook for component development
4. Set up changesets for versioning
5. Configure Prettier and ESLint

## Development Workflow
```bash
# Start development servers
bun run dev

# Build all packages
bun run build

# Run tests
bun run test

# Format code
bun run format
```

This setup provides a solid foundation for a modern, tree-shakable component library with framework-specific implementations. The monorepo structure allows for easy sharing of code between packages while keeping them independent.
