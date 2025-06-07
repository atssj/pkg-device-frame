# Device Frame JS - Project Setup

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

## Automated Project Setup Script

To set up the project, you can run the following script in your terminal (e.g., Git Bash on Windows):

```bash
#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

echo "--- Initializing Project ---"
# Initialize git if not already done
if [ ! -d ".git" ]; then
  git init
  echo "node_modules" >> .gitignore
  echo "dist" >> .gitignore
  echo ".DS_Store" >> .gitignore
  echo "*.local" >> .gitignore
  echo "*.log" >> .gitignore
  echo "coverage" >> .gitignore
  echo ".turbo" >> .gitignore
  echo "Initialized git repository and .gitignore."
else
  echo "Git repository already initialized."
fi

# Initialize package.json if not exists
if [ ! -f "package.json" ]; then
  bun init -y
  echo "Initialized root package.json."
  # Create basic README if not exists
  if [ ! -f "README.md" ]; then
    echo "# Device Frame JS" > README.md
    echo "A framework-agnostic device frame component library" >> README.md
    echo "Created README.md."
  else
    echo "README.md already exists."
  fi
else
  echo "Root package.json already exists."
fi

echo "--- Setting up Workspace ---"
# Install root dependencies
echo "Installing root dependencies..."
bun add -D typescript @types/node --root
echo "Root dependencies installed."

# Create workspace directories if they don't exist
echo "Creating workspace directories..."
mkdir -p packages/core packages/svelte packages/react packages/vue packages/vanilla examples
echo "Workspace directories created."

echo "--- Core Package Setup ---"
CORE_PATH="packages/core"
if [ ! -f "${CORE_PATH}/package.json" ]; then
  echo "Setting up core package..."
  (
    cd "${CORE_PATH}" && \
    bun init -y && \
    bun add -D typescript @types/node && \
    bun tsc --init
  )
  echo "Core package setup complete."
else
  echo "Core package already set up."
fi

echo "--- Svelte Package Setup ---"
SVELTE_PATH="packages/svelte"
if [ ! -d "${SVELTE_PATH}/node_modules" ]; then
  echo "Setting up Svelte package..."
  (
    cd "${SVELTE_PATH}" && \
    bun create vite . --template svelte-ts && \
    bun add -D svelte @sveltejs/vite-plugin-svelte
  )
  echo "Svelte package setup complete."
else
  echo "Svelte package already set up."
fi

echo "--- React Package Setup ---"
REACT_PATH="packages/react"
if [ ! -d "${REACT_PATH}/node_modules" ]; then
  echo "Setting up React package..."
  (
    cd "${REACT_PATH}" && \
    bun create vite . --template react-ts && \
    bun add -D @types/react @types/react-dom
  )
  echo "React package setup complete."
else
  echo "React package already set up."
fi

echo "--- Vue Package Setup ---"
VUE_PATH="packages/vue"
if [ ! -d "${VUE_PATH}/node_modules" ]; then
  echo "Setting up Vue package..."
  (
    cd "${VUE_PATH}" && \
    bun create vite . --template vue-ts && \
    bun add -D @vitejs/plugin-vue @vue/compiler-sfc
  )
  echo "Vue package setup complete."
else
  echo "Vue package already set up."
fi

echo "--- Root Configuration ---"
# Create root tsconfig if not exists
if [ ! -f "tsconfig.json" ]; then
  echo "Creating root tsconfig.json..."
  cat > tsconfig.json << 'EOF'
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
EOF
  echo "Root tsconfig.json created."
else
  echo "Root tsconfig.json already exists."
fi

# Update root package.json
echo "Updating root package.json..."
cat > package.json << 'EOF'
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
EOF
echo "Root package.json updated."

# Install Turbo for monorepo management
echo "Installing Turbo..."
bun add -D turbo
echo "Turbo installed."

# Create initial commit if in a git repository
if [ -d ".git" ]; then
  echo "Creating initial git commit..."
  git add .
  git commit -m "Initial commit: Project structure setup"
  echo "Initial commit created."
else
  echo "Not a git repository, skipping initial commit."
fi

echo "--- Project Setup Complete! ---"
echo "You can now run 'bun run dev' to start development servers."
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
